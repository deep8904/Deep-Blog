import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Archive",
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
  const count = String(notes.length).padStart(2, "0");

  return (
    <div className="inner-page archive-page">
      <section className="page-hero archive-hero" aria-labelledby="archive-title">
        <div className="section-label archive-label"><span>AR</span><p>ARCHIVE / PUBLICATION INDEX</p></div>
        <div className="archive-title-row">
          <h1 id="archive-title">
            <span className="line"><span>{notes.length ? "Entries on" : "No entries"}</span></span>
            <span className="line"><span>{notes.length ? "record." : "on record."}</span></span>
          </h1>
          <div className="archive-total"><span>TOTAL</span><strong>{count}</strong></div>
        </div>
        <p className="page-intro">
          {notes.length
            ? "A growing record of software, interfaces, games, photography, and the decisions that remained useful after the work was done."
            : "The archive is intentionally empty while the first piece is being written. No samples, generated titles, or placeholder dates."}
        </p>
      </section>

      {notes.length ? (
        <section className="archive-list-section" aria-labelledby="entry-list-title">
          <Reveal>
            <div className="archive-list-heading">
              <p id="entry-list-title">[ ALL ENTRIES ]</p>
              <span>{count} TOTAL</span>
            </div>
            <ol className="archive-list">
              {notes.map((note, index) => (
                <li key={note.slug}>
                  <Link href={`/notes/${note.slug}`}>
                    <span className="archive-entry-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="archive-entry-copy">
                      <span className="latest-meta">
                        <time dateTime={note.publishedAt}>{formatDate(note.publishedAt)}</time>
                        <span>{note.readingTime} min read</span>
                        <span>{note.topics[0] ?? "Writing"}</span>
                      </span>
                      <strong>{note.title}</strong>
                      <p>{note.description}</p>
                    </span>
                    <span className="archive-entry-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      ) : (
        <section className="archive-console" aria-labelledby="console-title">
          <Reveal>
            <div className="console-header"><span>ARCHIVE</span><span>LOCAL</span></div>
            <div className="console-body">
              <div className="console-zero" aria-hidden="true">00</div>
              <div className="console-message">
                <p className="panel-label">RESULT</p>
                <h2 id="console-title">Nothing to display.</h2>
                <p>The first entry will be added only after it is ready to stand on its own.</p>
              </div>
            </div>
            <div className="console-status"><span><i className="status-dot" aria-hidden="true" /> Draft in progress</span><span>Awaiting publication</span></div>
          </Reveal>
        </section>
      )}

      <section className="process-section" aria-labelledby="process-title">
        <Reveal>
          <div className="section-label"><span>01</span><p>BEFORE PUBLICATION</p></div>
          <div className="process-copy">
            <h2 id="process-title">The archive grows only when the work earns its place.</h2>
            <ol>
              <li><span>01</span><div><strong>Collect</strong><p>Capture the question, references, contradictions, and useful observations.</p></div></li>
              <li><span>02</span><div><strong>Shape</strong><p>Find the argument, remove repetition, and test whether the idea is actually useful.</p></div></li>
              <li><span>03</span><div><strong>Publish</strong><p>Release the piece with enough context to be understood and enough honesty to be revised.</p></div></li>
            </ol>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
