import Link from "next/link";
import { InteractiveField } from "@/components/interactive-field";
import { NoteList } from "@/components/note-list";
import { getAllNotes } from "@/lib/notes";

const subjects = [
  ["Software", "What it takes to turn an idea into something people can use."],
  ["Interfaces", "The small decisions that make a screen feel clear—or confusing."],
  ["Games", "Systems, worlds, collaboration, and what play can teach."],
  ["Photography", "Attention, framing, and the habit of looking a little longer."],
] as const;

export default function HomePage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <article className="hero-copy panel panel--paper">
          <div className="hero-copy__topline">
            <p className="kicker">A personal blog by Deep Chadamiya</p>
            <span className="edition">Independent / ongoing</span>
          </div>

          <h1 id="hero-title">
            I make things.
            <span>Then I write to understand them.</span>
          </h1>

          <div className="hero-copy__bottom">
            <p>
              I’m a software engineer who keeps wandering into interface design,
              games, and photography. Draft State is where I keep the decisions,
              mistakes, and observations worth returning to.
            </p>
            <Link className="text-link" href="#latest">
              Visit the archive <span aria-hidden="true">↘</span>
            </Link>
          </div>
        </article>

        <article className="panel panel--visual">
          <InteractiveField />
        </article>

        <article className="panel panel--status">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            On the desk
          </div>
          <div>
            <p className="status-large">The first essay is taking shape.</p>
            <p className="status-copy">
              No launch post and no filler. The archive opens when the writing is
              ready.
            </p>
          </div>
          <span className="tile-code">CURRENT / WRITING</span>
        </article>

        <article className="panel panel--subjects">
          <p className="kicker">What I write about</p>
          <div className="subject-stack">
            {subjects.map(([title, description]) => (
              <div key={title}>
                <span>{title}</span>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="intro-section section-grid" aria-labelledby="intro-title">
        <p className="section-number">01 / WHY</p>
        <div>
          <h2 id="intro-title">
            The work moves fast.
            <span>I want the lessons to stay.</span>
          </h2>
          <div className="two-column-copy">
            <p>
              Some posts will be practical: a build decision, an interface problem,
              or a process that finally worked. Others will begin with a game, a
              photograph, or a question I could not stop thinking about.
            </p>
            <p>
              This is not a polished record of perfect decisions. It is a personal
              archive of what I tried, what changed my mind, and what I understand
              more clearly now.
            </p>
          </div>
        </div>
      </section>

      <section id="latest" className="latest section-grid" aria-labelledby="latest-title">
        <div className="section-rail">
          <p className="section-number">02 / WRITING</p>
          <Link className="micro-link" href="/notes">
            Open the archive ↗
          </Link>
        </div>
        <div>
          <div className="section-heading-row">
            <h2 id="latest-title">Latest notes</h2>
            <span>{String(notes.length).padStart(2, "0")} published</span>
          </div>
          <NoteList notes={notes.slice(0, 4)} />
        </div>
      </section>

      <section className="about-preview" aria-labelledby="about-preview-title">
        <article className="about-preview__copy">
          <p className="kicker">A little about me</p>
          <h2 id="about-preview-title">Hi, I’m Deep.</h2>
          <p>
            I work in software, care deeply about interface details, enjoy building
            game ideas, and usually have a camera nearby. Writing helps me connect
            those interests and understand the work more clearly.
          </p>
          <Link className="text-link" href="/about">
            More about me <span aria-hidden="true">↗</span>
          </Link>
        </article>
        <article className="about-preview__statement" aria-label="Writing principle">
          <span className="kicker">The rule</span>
          <p>Write from the work, not around it.</p>
          <span className="statement-mark" aria-hidden="true">✦</span>
        </article>
      </section>
    </>
  );
}
