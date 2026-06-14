import type { CSSProperties } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

const subjects = [
  { index: "01", title: "Software", description: "Systems, products, and the decisions that survive launch." },
  { index: "02", title: "Interfaces", description: "How small design choices make complicated tools feel clear." },
  { index: "03", title: "Games", description: "Playtesting, collaboration, constraints, and learning in motion." },
  { index: "04", title: "Photography", description: "Using a camera as a reason to slow down and notice more." },
] as const;

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];
  const visualStyle = latestNote?.heroImage
    ? ({ "--ip-entry-image": `url("${latestNote.heroImage}")` } as CSSProperties)
    : undefined;

  return (
    <>
      <section className="ip-hero" aria-labelledby="home-title">
        <div className="ip-hero__ambient" aria-hidden="true" />
        <div className="ip-shell ip-hero__shell">
          <div className="ip-hero__topline">
            <span className="ip-node-status"><i aria-hidden="true" />Connected node / Online ver. 1.0.5</span>
            <span className="ip-label">Instance identity / Draft State</span>
          </div>

          <div className="ip-hero__grid">
            <Reveal className="ip-hero__copy">
              <span className="ip-label">Personal publishing protocol</span>
              <h1 id="home-title"><span>Deploy your</span><strong>thinking.</strong></h1>
              <p>
                Draft State is a living record of software, interface design,
                games, photography, and the decisions that remain useful after
                the work is finished.
              </p>
              <div className="ip-actions">
                <Link className="ip-button" href="/notes">Initialize reading</Link>
                <Link className="ip-button ip-button--secondary" href="/about">View identity</Link>
              </div>
            </Reveal>

            <Reveal className="ip-credential" delay={120}>
              <div className="ip-credential__head">
                <span className="ip-label">Instance identity</span>
                <span>V1.0.5</span>
              </div>
              <div className="ip-credential__field" aria-hidden="true">
                <span className="ip-ring ip-ring--one" />
                <span className="ip-ring ip-ring--two" />
                <span className="ip-ring ip-ring--three" />
                <span className="ip-orbit ip-orbit--one" />
                <span className="ip-orbit ip-orbit--two" />
                <strong>DS</strong>
              </div>
              <div className="ip-credential__foot">
                <div><span className="ip-label">Credential owner</span><strong>Deep Chadamiya</strong></div>
                <span className="ip-verified"><i aria-hidden="true" />Validated</span>
              </div>
            </Reveal>
          </div>

          <div className="ip-metrics" aria-label="Journal status">
            <Reveal delay={80}><span>01</span><div><small>Published entries</small><strong>{String(notes.length).padStart(2, "0")}</strong></div><em>Validated</em></Reveal>
            <Reveal delay={140}><span>02</span><div><small>Primary node</small><strong>PHX</strong></div><em>Online</em></Reveal>
            <Reveal delay={200}><span>03</span><div><small>Protocol state</small><strong>LIVE</strong></div><em>Ongoing</em></Reveal>
          </div>
        </div>
      </section>

      {latestNote ? (
        <section className="ip-section" aria-labelledby="latest-title">
          <div className="ip-shell">
            <Reveal className="ip-section-heading">
              <div><span className="ip-label">Latest transmission / 001</span><h2 id="latest-title">From the journal</h2></div>
              <Link href="/notes">Open full archive -&gt;</Link>
            </Reveal>

            <Reveal delay={100}>
              <Link className="ip-featured" href={`/notes/${latestNote.slug}`}>
                <span className="ip-featured__content">
                  <span className="ip-featured__meta">
                    <time dateTime={latestNote.publishedAt}>{formatDate(latestNote.publishedAt)}</time>
                    <span>{latestNote.readingTime} min read</span>
                    <span>{latestNote.topics[0] ?? "Journal"}</span>
                  </span>
                  <strong>{latestNote.title}</strong>
                  <p>{latestNote.description}</p>
                  <span className="ip-featured__action">Read entry <i aria-hidden="true">-&gt;</i></span>
                </span>
                <span className={`ip-featured__visual${latestNote.heroImage ? " has-image" : ""}`} style={visualStyle}>
                  <span className="ip-featured__diagram" aria-hidden="true"><i /><i /><i /><strong>001</strong></span>
                  <span className="ip-media-label">{latestNote.heroImage ? "Entry image" : "Media node / awaiting image"}</span>
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="ip-section ip-section--surface" aria-labelledby="subjects-title">
        <div className="ip-shell">
          <Reveal className="ip-section-heading">
            <div><span className="ip-label">Active channels / 04</span><h2 id="subjects-title">What enters the archive</h2></div>
          </Reveal>
          <div className="ip-subject-list">
            {subjects.map((subject, index) => (
              <Reveal className="ip-subject-row" delay={index * 70} key={subject.title}>
                <span>{subject.index}</span><h3>{subject.title}</h3><p>{subject.description}</p><i aria-hidden="true">-&gt;</i>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ip-closing" aria-labelledby="closing-title">
        <div className="ip-closing__ambient" aria-hidden="true" />
        <div className="ip-shell">
          <Reveal>
            <span className="ip-label">Archive purpose / Ongoing</span>
            <h2 id="closing-title">Keep the useful parts of unfinished work.</h2>
            <p>This is not a feed of polished outcomes. It is a record of decisions, mistakes, observations, and ideas that are still developing.</p>
            <Link className="ip-button" href="/about">Open identity record</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
