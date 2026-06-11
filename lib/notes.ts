import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const notesDirectory = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  topics: string[];
  draft: boolean;
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
  const fullPath = path.join(notesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  if (data.draft === true) return null;

  const required = ["title", "description", "publishedAt"] as const;
  for (const key of required) {
    if (!data[key]) {
      throw new Error(`Missing required frontmatter field \"${key}\" in ${fileName}`);
    }
  }

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    draft: false,
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
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const fullPath = path.join(notesDirectory, `${safeSlug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.draft === true) return null;

  const processed = await remark().use(html, { sanitize: true }).process(content);

  return {
    slug: safeSlug,
    title: String(data.title),
    description: String(data.description),
    publishedAt: String(data.publishedAt),
    updatedAt: data.updatedAt ? String(data.updatedAt) : undefined,
    topics: Array.isArray(data.topics) ? data.topics.map(String) : [],
    draft: false,
    html: processed.toString(),
  };
}
