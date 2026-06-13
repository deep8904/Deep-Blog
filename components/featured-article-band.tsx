import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function FeaturedArticleBand({ note }: { note: NoteMeta }) {
  return (
    <Link className="featured-entry featured-entry--text" href={`/notes/${note.slug}`}>
      <span className="featured-entry__copy">
        <span className="entry-meta">
          <span>{formatDate(note.publishedAt)}</span>
          <span>{note.readingTime} min read</span>
        </span>
        <span className="entry-index">Latest writing</span>
        <strong>{note.title}</strong>
        <span className="entry-description">{note.description}</span>
        <span className="entry-action">Read essay <i aria-hidden="true">-&gt;</i></span>
      </span>
    </Link>
  );
}

export function ArticleRow({ note, index = 0 }: { note: NoteMeta; index?: number }) {
  return (
    <Link className="article-entry" href={`/notes/${note.slug}`}>
      <span className="article-entry__number">{String(index + 1).padStart(2, "0")}</span>
      <span className="article-entry__copy">
        <span className="entry-meta">
          <span>{formatDate(note.publishedAt)}</span>
          <span>{note.readingTime} min read</span>
        </span>
        <strong>{note.title}</strong>
        <span>{note.description}</span>
        <small>{note.topics.join(" / ")}</small>
      </span>
    </Link>
  );
}
