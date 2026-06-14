import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Deep Chadamiya about software, design, games, and photography.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function NotesPage() {
  const notes = getAllNotes();
  return (
    <>
      <section className="ip-page-hero" aria-labelledby="writing-title">
        <div className="ip-page-hero__ambient" aria-hidden="true" />
        <div className="ip-shell">
          <div className="ip-page-hero__topline">
            <span className="ip-node-status"><i aria-hidden="true" />Archive online</span>
            <span className="ip-label">{String(notes.length).padStart(2, "0")} published transmissions</span>
          </div>
          <div className="ip-page-hero__grid">
            <Reveal>
              <span className="ip-label">Writing protocol / Index</span>
              <h1 id="writing-title">Published signals.</h1>
            </Reveal>
            <Reveal className="ip-page-hero__card" delay={100}>
              <span className="ip-label">Archive state</span>
              <strong>{String(notes.length).padStart(2, "0")}</strong>
              <p>Essays and working notes about software, interface design, games, collaboration, photography, and the decisions that changed how I think.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="ip-section" aria-labelledby="archive-title">
        <div className="ip-shell">
          <Reveal className="ip-section-heading">
            <div><span className="ip-label">Archive directory</span><h2 id="archive-title">All entries</h2></div>
            <span className="ip-label">{String(notes.length).padStart(2, "0")} total</span>
          </Reveal>
          <ol className="ip-entry-list">
            {notes.map((note, index) => (
              <li key={note.slug}>
                <Reveal delay={index * 70}>
                  <Link className="ip-entry-row" href={`/notes/${note.slug}`}>
                    <span className="ip-entry-row__index">{String(index + 1).padStart(3, "0")}</span>
                    <span className="ip-entry-row__content">
                      <span className="ip-entry-row__meta">
                        <time dateTime={note.publishedAt}>{formatDate(note.publishedAt)}</time>
                        <span>{note.readingTime} min read</span>
                        <span>{note.topics[0] ?? "Journal"}</span>
                      </span>
                      <strong>{note.title}</strong>
                      <p>{note.description}</p>
                    </span>
                    <span className="ip-entry-row__arrow" aria-hidden="true">-&gt;</span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
