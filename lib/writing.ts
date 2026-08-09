import { getAllBlogArticles } from "@/lib/blog";
import { getAllNotes } from "@/lib/notes";

export type PublishedWriting = {
  kind: "article" | "note";
  slug: string;
  href: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: number;
  topic: string;
};

export function getAllPublishedWriting(): PublishedWriting[] {
  const notes: PublishedWriting[] = getAllNotes().map((note) => ({
    kind: "note",
    slug: note.slug,
    href: `/notes/${note.slug}`,
    title: note.title,
    description: note.description,
    publishedAt: note.publishedAt,
    readingTime: note.readingTime,
    topic: note.topics[0] ?? "Writing",
  }));
  const articles: PublishedWriting[] = getAllBlogArticles().map((article) => ({
    kind: "article",
    slug: article.slug,
    href: `/blog/${article.slug}`,
    title: article.title,
    description: article.description,
    publishedAt: article.publishedAt,
    readingTime: article.readingTime,
    topic: article.category,
  }));

  return [...notes, ...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
