import Link from "next/link";
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
    </Link>
  );
}
