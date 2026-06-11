import Link from "next/link";
import { FeaturedArticleBand } from "@/components/featured-article-band";
import { MotionReveal } from "@/components/motion-reveal";
import { NoteList } from "@/components/note-list";
import { NotebookSignal, TopicMatrix } from "@/components/topic-matrix";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <MotionReveal className="hero__copy">
          <p className="eyebrow">Deep Chadamiya — software, design, games, and photography</p>
          <h1 id="hero-title">
            I write about what I build, what changes, and what I notice along the way.
          </h1>
        </MotionReveal>
        <MotionReveal className="hero__aside" delay={0.08}>
          <p>
            A personal notebook for projects, interface decisions, technical
            lessons, games, photography, and ideas that become clearer once I
            write them down.
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
            <h2>Latest from the notebook</h2>
          </div>
          <FeaturedArticleBand note={latestNote} />
        </MotionReveal>
      ) : null}

      <section className="home-bento" aria-labelledby="home-bento-title">
        <div className="bento-panel bento-panel--topics">
          <div className="section-heading">
            <p className="section-label">Notebook index</p>
            <h2 id="home-bento-title">What tends to show up here</h2>
          </div>
          <TopicMatrix />
        </div>

        <aside className="bento-panel bento-panel--about" aria-labelledby="about-preview-title">
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

        <aside className="bento-panel bento-panel--status">
          <p className="section-label">Currently exploring</p>
          <strong>
            Game UX, developer communities, and how ideas change once a team
            starts building them.
          </strong>
        </aside>

        <aside className="bento-panel bento-panel--signal">
          <NotebookSignal />
        </aside>
      </section>

      <section id="latest" className="writing-preview" aria-labelledby="latest-title">
        <div className="writing-preview__header">
          <div>
            <p className="section-label">
              Writing · {String(notes.length).padStart(2, "0")} published
            </p>
            <h2 id="latest-title">Latest from the notebook</h2>
          </div>
          <Link className="text-link" href="/notes">
            Open writing
          </Link>
        </div>
        <NoteList notes={notes.slice(0, 4)} emptyContext="home" />
      </section>
    </>
  );
}
