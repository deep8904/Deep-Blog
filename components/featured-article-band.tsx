import Link from "next/link";
import { CastlePathDiagram } from "@/components/castle-path-diagram";
import type { NoteMeta } from "@/lib/notes";

type FeaturedArticleBandProps = {
  note: NoteMeta;
};

export function FeaturedArticleBand({ note }: FeaturedArticleBandProps) {
  const date = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(note.publishedAt));

  return (
    <Link className="featured-band" href={`/notes/${note.slug}`}>
      <span className="featured-band__content">
        <span className="featured-band__meta">
          <span>{date}</span>
          <span>{note.topics.join(" / ")}</span>
          <span>{note.readingTime} min read</span>
        </span>
        <span className="featured-band__main">
          <strong>{note.title}</strong>
          <span className="featured-band__arrow" aria-hidden="true">
            →
          </span>
        </span>
        <span className="featured-band__description">{note.description}</span>
      </span>
      <span className="featured-band__diagram">
        <CastlePathDiagram />
        <span>castle path / weekend build</span>
      </span>
    </Link>
  );
}

export function ArticleRow({ note, index = 0 }: FeaturedArticleBandProps & { index?: number }) {
  const date = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(note.publishedAt));

  return (
    <Link className="article-row" href={`/notes/${note.slug}`}>
      <span className="article-row__index">{String(index + 1).padStart(2, "0")}</span>
      <span className="article-row__visual">
        <CastlePathDiagram />
      </span>
      <span className="article-row__content">
        <span className="article-row__meta">
          <span>{date}</span>
          <span>{note.topics.join(" / ")}</span>
          <span>{note.readingTime} min read</span>
        </span>
        <strong>{note.title}</strong>
        <span>{note.description}</span>
      </span>
      <span className="article-row__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
