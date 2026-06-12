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

function JournalDiagram() {
  return (
    <span className="journal-diagram" aria-hidden="true">
      <span className="journal-diagram__axis journal-diagram__axis--x" />
      <span className="journal-diagram__axis journal-diagram__axis--y" />
      <span className="journal-diagram__node journal-diagram__node--one" />
      <span className="journal-diagram__node journal-diagram__node--two" />
      <span className="journal-diagram__node journal-diagram__node--three" />
      <span className="journal-diagram__path" />
      <span className="journal-diagram__label">3 days / 1 castle / 4 people</span>
    </span>
  );
}

export function FeaturedArticleBand({ note }: { note: NoteMeta }) {
  return (
    <Link className="feature-card" href={`/notes/${note.slug}`}>
      <span className="feature-card__header">
        <span>{formatDate(note.publishedAt)}</span>
        <span>{note.topics.join(" / ")}</span>
        <span>{note.readingTime} min read</span>
      </span>
      <span className="feature-card__title-row">
        <strong>{note.title}</strong>
        <span className="feature-card__arrow" aria-hidden="true">-&gt;</span>
      </span>
      <span className="feature-card__visual"><JournalDiagram /></span>
      <span className="feature-card__footer">
        <span>{note.description}</span>
        <span>Open essay</span>
      </span>
    </Link>
  );
}

export function ArticleRow({ note, index = 0 }: { note: NoteMeta; index?: number }) {
  return (
    <Link className="article-row" href={`/notes/${note.slug}`}>
      <span className="article-row__index">{String(index + 1).padStart(2, "0")}</span>
      <span className="article-row__visual"><JournalDiagram /></span>
      <span className="article-row__content">
        <span className="article-row__meta"><span>{formatDate(note.publishedAt)}</span><span>{note.readingTime} min</span></span>
        <strong>{note.title}</strong>
        <span>{note.description}</span>
        <span className="article-row__topics">{note.topics.join(" / ")}</span>
      </span>
      <span className="article-row__arrow" aria-hidden="true">-&gt;</span>
    </Link>
  );
}
