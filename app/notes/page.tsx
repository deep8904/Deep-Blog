import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllPublishedWriting } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Published writing by Deep Chadamiya about projects, games, technology, and what he is learning.",
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
  const writing = getAllPublishedWriting();
  const count = String(writing.length).padStart(2, "0");

  return (
    <div className="inner-page writing-page">
      <section className="page-hero writing-hero" aria-labelledby="writing-title">
        <div className="section-label writing-label"><span>WR</span><p>PUBLISHED WRITING</p></div>
        <div className="writing-title-row">
          <h1 id="writing-title">
            <span className="line"><span>{writing.length ? "Writing with" : "No writing"}</span></span>
            <span className="line"><span>{writing.length ? "a clear point." : "published yet."}</span></span>
          </h1>
          <div className="writing-total"><span>PUBLISHED</span><strong>{count}</strong></div>
        </div>
        <p className="page-intro">
          {writing.length
            ? "A small set of pieces that have been edited enough to share. Each one starts from something real: a project, a game, a scene, a decision, or a question that kept returning."
            : "This page stays empty until a real piece is ready. No samples, generated titles, or placeholder dates."}
        </p>
      </section>

      {writing.length ? (
        <section className="writing-list-section" aria-labelledby="entry-list-title">
          <Reveal>
            <div className="writing-list-heading">
              <p id="entry-list-title">[ PUBLISHED WRITING ]</p>
              <span>{count} TOTAL</span>
            </div>
            <ol className="writing-list">
              {writing.map((item, index) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="writing-entry-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="writing-entry-copy">
                      <span className="latest-meta">
                        <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
                        <span>{item.readingTime} min read</span>
                        <span>{item.topic}</span>
                      </span>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </span>
                    <span className="writing-entry-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>
      ) : (
        <section className="writing-console" aria-labelledby="console-title">
          <Reveal>
            <div className="console-header"><span>WRITING</span><span>LOCAL</span></div>
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

      <section className="publishing-note-section" aria-labelledby="publishing-note-title">
        <Reveal>
          <div className="section-label"><span>01</span><p>WHAT BELONGS HERE</p></div>
          <div className="publishing-note-copy">
            <h2 id="publishing-note-title">I publish when a note can give a reader more than a timeline.</h2>
            <ol>
              <li><span>01</span><div><strong>A concrete start</strong><p>A build, event, photograph, game system, or decision gives the note something real to stand on.</p></div></li>
              <li><span>02</span><div><strong>A useful turn</strong><p>The middle should show what changed: a mistaken assumption, a sharper tradeoff, or a better question.</p></div></li>
              <li><span>03</span><div><strong>A remembered point</strong><p>The ending should make clear why the note was worth saving, even if the idea is still unfinished.</p></div></li>
            </ol>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
