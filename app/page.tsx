import Link from "next/link";
import { NoteList } from "@/components/note-list";
import { WorkingMargin } from "@/components/working-margin";
import { getAllNotes } from "@/lib/notes";

const subjects = [
  ["Software", "Notes from building products and learning what survives real use."],
  ["Interface design", "Small choices that make a screen easier to understand."],
  ["Games", "Systems, worlds, collaboration, and what play can teach."],
  ["Photography", "Frames, light, and the habit of looking a little longer."],
] as const;

export default function HomePage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Deep Chadamiya — software, design, games, and photography</p>
          <h1 id="hero-title">
            I write about the things I build and the details I notice along the way.
          </h1>
          <p className="hero__lede">
            This is my personal notebook for projects, design decisions, technical
            lessons, games, photography, and ideas that are easier to understand
            after I write them down.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <Link className="button-link" href="/notes">
              Browse the writing
            </Link>
            <Link className="text-link" href="/about">
              About Deep
            </Link>
          </div>
        </div>
        <aside className="hero__margin" aria-label="Writing process">
          <WorkingMargin />
        </aside>
      </section>

      <section className="topic-index" aria-labelledby="topics-title">
        <div className="section-label">Notebook index</div>
        <div>
          <h2 id="topics-title">What tends to show up here</h2>
          <div className="topic-index__grid">
            {subjects.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="status-note" aria-label="Current writing status">
        <p>First essay</p>
        <strong>Currently being written</strong>
        <span>The archive will open with a real post—not placeholder content.</span>
      </section>

      <section id="latest" className="writing-preview" aria-labelledby="latest-title">
        <div className="writing-preview__header">
          <div>
            <p className="section-label">Writing</p>
            <h2 id="latest-title">Latest from the notebook</h2>
          </div>
          <Link className="text-link" href="/notes">
            Open writing
          </Link>
        </div>
        <NoteList notes={notes.slice(0, 4)} emptyContext="home" />
      </section>

      <section className="about-preview" aria-labelledby="about-preview-title">
        <div>
          <p className="section-label">About</p>
          <h2 id="about-preview-title">Hi, I’m Deep.</h2>
        </div>
        <div className="about-preview__copy">
          <p>
            I work in software, care deeply about interface details, enjoy building
            game ideas, and usually have a camera nearby. Writing helps me connect
            those interests and understand the work more clearly.
          </p>
          <Link className="text-link" href="/about">
            More about me
          </Link>
        </div>
      </section>
    </>
  );
}
