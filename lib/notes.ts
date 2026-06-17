import fs from "node:fs";
import path from "node:path";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "content", "notes");
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type NoteMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  topics: string[];
  draft: boolean;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCaption?: string;
};

export type Note = NoteMeta & {
  html: string;
};

function noteFiles(): string[] {
  if (!fs.existsSync(notesDirectory)) return [];

  return fs
    .readdirSync(notesDirectory)
    .filter(
      (file) =>
        file.endsWith(".md") &&
        !file.startsWith("_") &&
        file.toLowerCase() !== "readme.md",
    );
}

function parseMeta(fileName: string): NoteMeta | null {
  const slug = fileName.replace(/\.md$/, "");
  if (!slugPattern.test(slug)) return null;
  const fullPath = path.join(notesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseMarkdownFile(fileContents, fileName);

  if (data.draft === true) return null;

  const required = ["title", "description", "publishedAt"] as const;
  for (const key of required) {
    if (!data[key]) {
      throw new Error(`Missing required frontmatter field "${key}" in ${fileName}`);
    }
  }

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    author: data.author ? String(data.author) : undefined,
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    draft: false,
    readingTime: calculateReadingTime(content),
    ...resolveHeroImage(data),
  };
}

export function getAllNotes(): NoteMeta[] {
  return noteFiles()
    .map(parseMeta)
    .filter((note): note is NoteMeta => note !== null)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export async function getNoteBySlug(slug: string): Promise<Note | null> {
  if (!slugPattern.test(slug)) return null;

  const fullPath = path.join(notesDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseMarkdownFile(fileContents, `${slug}.md`);

  if (data.draft === true) return null;

  const meta = parseMeta(`${slug}.md`);
  if (!meta) return null;

  const processed = await remark().use(html, { sanitize: true }).process(content);

  return {
    ...meta,
    html: processed.toString(),
  };
}

function calculateReadingTime(content: string): number {
  const withoutComments = content.replace(/<!--[\s\S]*?-->/g, " ");
  const plainText = withoutComments
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*_\-[\]()]/g, " ");
  const wordCount = plainText.match(/\b[\w'’-]+\b/g)?.length ?? 0;

  return Math.max(1, Math.ceil(wordCount / 220));
}

function parseMarkdownFile(fileContents: string, fileName: string) {
  if (!fileContents.startsWith("---\n")) {
    throw new Error(`Missing frontmatter block in ${fileName}`);
  }

  const closingMarker = fileContents.indexOf("\n---", 4);
  if (closingMarker === -1) {
    throw new Error(`Unclosed frontmatter block in ${fileName}`);
  }

  const frontmatter = fileContents.slice(4, closingMarker);
  const contentStart = fileContents.indexOf("\n", closingMarker + 4);
  const content = contentStart === -1 ? "" : fileContents.slice(contentStart + 1);

  return {
    data: parseFrontmatter(frontmatter),
    content,
  };
}

function parseFrontmatter(frontmatter: string): Record<string, string | string[] | boolean> {
  const data: Record<string, string | string[] | boolean> = {};
  const lines = frontmatter.split(/\r?\n/);
  let currentListKey: string | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) continue;

    if (currentListKey && trimmed.startsWith("- ")) {
      const currentValue = data[currentListKey];
      if (Array.isArray(currentValue)) {
        currentValue.push(parseScalar(trimmed.slice(2)) as string);
      }
      continue;
    }

    currentListKey = null;
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();

    if (!rawValue) {
      data[key] = [];
      currentListKey = key;
      continue;
    }

    data[key] = parseScalar(rawValue);
  }

  return data;
}

function parseScalar(value: string): string | boolean {
  if (value === "true") return true;
  if (value === "false") return false;

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

function resolveHeroImage(data: Record<string, unknown>) {
  if (!data.heroImage || typeof data.heroImage !== "string") return {};
  if (!data.heroImage.startsWith("/")) return {};

  const publicPath = path.join(process.cwd(), "public", data.heroImage.slice(1));
  if (!fs.existsSync(publicPath)) return {};

  return {
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt ? String(data.heroImageAlt) : "",
    heroImageCaption: data.heroImageCaption ? String(data.heroImageCaption) : undefined,
  };
}
