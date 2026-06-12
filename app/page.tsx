import Link from "next/link";
import { FeaturedArticleBand } from "@/components/featured-article-band";
import { MaskedHeading, MotionReveal } from "@/components/motion-reveal";
import { SubjectRotator } from "@/components/subject-rotator";
import { NotebookSignal, TopicMatrix } from "@/components/topic-matrix";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__guide-line" aria-hidden="true" />
        <MotionReveal className="hero__copy">
          <p className="eyebrow">Deep Chadamiya — software, interface design, games, and photography</p>
          <MaskedHeading id="hero-title">
            {"I build things,\nthen write about\nwhat changed my mind."}
          </MaskedHeading>
        </MotionReveal>
        <MotionReveal className="hero__aside" delay={0.08}>
          <div className="hero__subject">
            <span>field notes on</span>
            <SubjectRotator />
          </div>
          <p>
            A personal notebook for projects, technical lessons, game design,
            photography, and the details worth returning to.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            {latestNote ? (
              <Link className="button-link" href={`/notes/${latestNote.slug}`}>
                Read the latest essay
              </Link>
            ) : null}
            <Link className="text-link" href="/notes">
              Browse all writing
            </Link>
          </div>
        </MotionReveal>
      </section>

      {latestNote ? (
        <MotionReveal className="featured-section" delay={0.12}>
          <div className="section-heading">
            <p className="section-label">Featured writing</p>
            <h2>The first field note from a real weekend build.</h2>
          </div>
          <FeaturedArticleBand note={latestNote} />
        </MotionReveal>
      ) : null}

      <section className="home-field" aria-labelledby="home-field-title">
        <div className="field-panel field-panel--topics">
          <div className="section-heading">
            <p className="section-label">Notebook index</p>
            <h2 id="home-field-title">What tends to show up here</h2>
          </div>
          <TopicMatrix />
        </div>

        <aside className="field-panel field-panel--about" aria-labelledby="about-preview-title">
          <p className="section-label">About Deep</p>
          <h2 id="about-preview-title">Code, design, games, and the details around them.</h2>
          <p>
            I work in software, care about interface details, enjoy building game
            ideas, and usually have a camera nearby.
          </p>
          <Link className="text-link" href="/about">
            About Deep
          </Link>
        </aside>

        <aside className="field-panel field-panel--status">
          <p className="section-label">Currently exploring</p>
          <strong>
            Game UX, developer communities, and how ideas change once a team
            starts building them.
          </strong>
        </aside>

        <aside className="field-panel field-panel--signal">
          <NotebookSignal />
        </aside>
      </section>

      <section id="latest" className="writing-preview" aria-labelledby="latest-title">
        <div className="writing-preview__header">
          <div>
            <p className="section-label">
              Writing · {String(notes.length).padStart(2, "0")} published
            </p>
            <h2 id="latest-title">The archive stays real.</h2>
          </div>
          <Link className="text-link" href="/notes">
            Open writing
          </Link>
        </div>
        <p className="writing-preview__note">
          This page only shows published pieces from real projects and observations.
          More writing will appear here when the next post is ready.
        </p>
      </section>
    </>
  );
}
