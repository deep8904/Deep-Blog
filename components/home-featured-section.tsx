import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { NoteMeta } from "@/lib/notes";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export function HomeFeaturedSection({ note }: { note: NoteMeta }) {
  return (
    <section className="featured-work" aria-labelledby="featured-title">
      <Reveal className="section-heading">
        <div>
          <span className="section-code">Latest writing</span>
          <h2 id="featured-title">From the journal</h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <Link className="featured-entry" href={`/notes/${note.slug}`}>
          <span className="featured-entry__copy">
            <span className="entry-meta">
              <span>{formatDate(note.publishedAt)}</span>
              <span>{note.readingTime} min read</span>
            </span>
            <span className="entry-index">Xbox Game Camp Arizona</span>
            <strong>{note.title}</strong>
            <span className="entry-description">{note.description}</span>
            <span className="entry-action">Read essay <i aria-hidden="true">-&gt;</i></span>
          </span>

          <span className="featured-entry__visual">
            <Image
              src="/images/xbox-game-camp/exterior.webp"
              alt="The Xbox Game Camp Arizona event displayed on the exterior of an Arizona State University building"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <span className="visual-caption">Xbox Game Camp Arizona</span>
          </span>
        </Link>
      </Reveal>
    </section>
  );
}
