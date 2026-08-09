import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { siteConfig } from "@/site.config";

const defaultBlogDirectory = path.join(process.cwd(), "content", "blog");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const yearPattern = /^\d{4}$/;

export type BlogArticleMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  status: "published";
  category: string;
  tags: string[];
  author: string;
  heroImage?: string;
  heroAlt: string;
  canonicalUrl: string;
  sources: string[];
  draft: false;
  articleType: string;
  readingTime: number;
  sourceDisclosure: string;
  verificationFingerprint: string;
  year: string;
};

export type BlogArticle = BlogArticleMeta & {
  html: string;
};

type BlogOptions = {
  root?: string;
  siteOrigin?: string;
};

function blogDirectory(options?: BlogOptions) {
  return options?.root ?? defaultBlogDirectory;
}

function articleFiles(root: string): string[] {
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && yearPattern.test(entry.name))
    .flatMap((year) =>
      fs
        .readdirSync(path.join(root, year.name), { withFileTypes: true })
        .filter(
          (entry) =>
            entry.isFile() &&
            entry.name.endsWith(".mdx") &&
            !entry.name.startsWith("_"),
        )
        .map((entry) => path.join(root, year.name, entry.name)),
    );
}

function requiredString(data: Record<string, unknown>, key: string, fileName: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required frontmatter field "${key}" in ${fileName}`);
  }
  return value;
}

function stringArray(data: Record<string, unknown>, key: string, fileName: string) {
  const value = data[key];
  if (!Array.isArray(value) || value.some((item) => typeof item !== "string")) {
    throw new Error(`Frontmatter field "${key}" must be a string array in ${fileName}`);
  }
  return value as string[];
}

function publicUrl(value: string, key: string, fileName: string) {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error(`Frontmatter field "${key}" must be an absolute URL in ${fileName}`);
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(`Frontmatter field "${key}" must use HTTP(S) in ${fileName}`);
  }
  return url.toString();
}

function parseArticle(filePath: string, options?: BlogOptions) {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const data = parsed.data as Record<string, unknown>;
  const fileName = path.relative(blogDirectory(options), filePath);
  const fileSlug = path.basename(filePath, ".mdx");
  const slug = requiredString(data, "slug", fileName);

  if (!slugPattern.test(slug) || slug !== fileSlug) {
    throw new Error(`Frontmatter slug must match the kebab-case filename in ${fileName}`);
  }

  if (data.draft === true || data.status === "draft") return null;
  if (data.draft !== false || data.status !== "published") {
    throw new Error(`Published article state is invalid in ${fileName}`);
  }

  const publishedAt = requiredString(data, "publishedAt", fileName);
  const updatedAt = requiredString(data, "updatedAt", fileName);
  if (Number.isNaN(Date.parse(publishedAt)) || Number.isNaN(Date.parse(updatedAt))) {
    throw new Error(`Article dates must be valid ISO dates in ${fileName}`);
  }

  const canonicalValue = data.canonicalUrl;
  const fallbackCanonical = `${options?.siteOrigin ?? siteConfig.url}/blog/${slug}`;
  const canonicalUrl = publicUrl(
    typeof canonicalValue === "string" && canonicalValue
      ? canonicalValue
      : fallbackCanonical,
    "canonicalUrl",
    fileName,
  );
  const sources = stringArray(data, "sources", fileName).map((source) =>
    publicUrl(source, "sources", fileName),
  );
  const readingTime = data.readingTime;
  if (typeof readingTime !== "number" || !Number.isInteger(readingTime) || readingTime < 1) {
    throw new Error(`Frontmatter field "readingTime" must be a positive integer in ${fileName}`);
  }

  const heroImage =
    typeof data.heroImage === "string" && data.heroImage.startsWith("/")
      ? data.heroImage
      : undefined;
  const year = path.basename(path.dirname(filePath));
  const verificationFingerprint = createHash("sha256")
    .update(raw)
    .digest("hex")
    .slice(0, 16);

  const meta: BlogArticleMeta = {
    slug,
    title: requiredString(data, "title", fileName),
    description: requiredString(data, "description", fileName),
    publishedAt,
    updatedAt,
    status: "published",
    category: requiredString(data, "category", fileName),
    tags: stringArray(data, "tags", fileName),
    author: requiredString(data, "author", fileName),
    heroImage,
    heroAlt: requiredString(data, "heroAlt", fileName),
    canonicalUrl,
    sources,
    draft: false,
    articleType: requiredString(data, "articleType", fileName),
    readingTime,
    sourceDisclosure: requiredString(data, "sourceDisclosure", fileName),
    verificationFingerprint,
    year,
  };

  return { meta, content: parsed.content };
}

export function getAllBlogArticles(options?: BlogOptions): BlogArticleMeta[] {
  const seen = new Set<string>();
  const articles = articleFiles(blogDirectory(options))
    .map((filePath) => parseArticle(filePath, options))
    .filter((article): article is NonNullable<typeof article> => article !== null)
    .map((article) => article.meta);

  for (const article of articles) {
    if (seen.has(article.slug)) {
      throw new Error(`Duplicate blog slug across year directories: ${article.slug}`);
    }
    seen.add(article.slug);
  }

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export async function getBlogArticleBySlug(
  slug: string,
  options?: BlogOptions,
): Promise<BlogArticle | null> {
  if (!slugPattern.test(slug)) return null;
  const matches = articleFiles(blogDirectory(options)).filter(
    (filePath) => path.basename(filePath, ".mdx") === slug,
  );
  if (matches.length === 0) return null;
  if (matches.length > 1) throw new Error(`Duplicate blog slug across year directories: ${slug}`);

  const article = parseArticle(matches[0], options);
  if (!article) return null;
  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: true })
    .process(article.content);

  return { ...article.meta, html: processed.toString() };
}
