import Link from "next/link";
import { FeaturedArticleBand } from "@/components/featured-article-band";
import { Reveal } from "@/components/reveal";
import { SubjectRotator } from "@/components/subject-rotator";
import { getAllNotes } from "@/lib/notes";

const subjects = [
  ["01", "Software", "Products, systems, and the lessons that only appear after something ships."],
  ["02", "Interfaces", "The small decisions that make technology understandable or frustrating."],
  ["03", "Games", "Interaction, worlds, teamwork, playtesting, and learning through constraints."],
  ["04", "Photography", "Framing, observation, and using a camera to pay closer attention."],
] as const;

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero__visual">
          <div className="visual-grid" aria-hidden="true" />
          <div className="visual-object" aria-hidden="true"><span /><span /><span /></div>
          <div className="home-hero__visual-copy">
            <p>Deep Chadamiya / Personal journal</p>
            <h1 id="home-title">
              <span className="mask-line"><span>Build things.</span></span>
              <span className="mask-line"><span>Notice details.</span></span>
              <span className="mask-line"><span>Write them down.</span></span>
            </h1>
            <div className="home-hero__tags"><span>Software</span><span>UI / UX</span><span>Games</span><span>Photography</span></div>
          </div>
          <div className="home-hero__subject">Field notes on <SubjectRotator /></div>
        </div>

        <aside className="home-hero__stats" aria-label="Site overview">
          <div className="stat-panel"><span>01</span><strong>{String(notes.length).padStart(2, "0")}</strong><small>Published note{notes.length === 1 ? "" : "s"}</small></div>
          <div className="stat-panel"><span>02</span><strong>04</strong><small>Recurring subjects</small></div>
          <div className="stat-panel stat-panel--accent"><span>03</span><strong>PHX</strong><small>Based in Arizona</small></div>
        </aside>
      </section>

      <div className="marquee" aria-label="Topics in the journal">
        <div className="marquee__track">
          {[0, 1].map((copy) => (
            <div className="marquee__group" key={copy} aria-hidden={copy === 1}>
              <span>Software</span><i /><span>Interface design</span><i /><span>Games</span><i /><span>Photography</span><i /><span>Developer communities</span><i />
            </div>
          ))}
        </div>
      </div>

      <section className="type-banner" aria-labelledby="type-banner-title">
        <Reveal className="type-banner__content">
          <h2 id="type-banner-title"><span>Make</span><b>-&gt;</b><span>Observe</span><em>Write</em></h2>
        </Reveal>
      </section>

      <section className="intro-grid" aria-labelledby="intro-title">
        <Reveal className="intro-grid__index">
          <span className="section-code">01 / Notebook</span>
          <div className="index-mark" aria-hidden="true"><span /><span /><span /></div>
          <ul>{subjects.map(([, title]) => <li key={title}>{title}</li>)}</ul>
        </Reveal>
        <Reveal className="intro-grid__copy" delay={120}>
          <h2 id="intro-title">A personal archive for the decisions, mistakes, and details that are easy to forget.</h2>
          <p>I work in software, care about interface details, enjoy building game ideas, and usually have a camera nearby. Writing helps me understand what changed between the first idea and the thing that actually got made.</p>
          <div className="intro-grid__actions"><Link className="primary-button" href="/notes">Browse writing</Link><Link className="text-button" href="/about">About Deep</Link></div>
        </Reveal>
      </section>

      {latestNote ? (
        <section className="featured-work" aria-labelledby="featured-title">
          <Reveal className="section-heading">
            <div><span className="section-code">02 / Featured writing</span><h2 id="featured-title">Latest from the archive</h2></div>
            <span className="section-arrow" aria-hidden="true">down-right</span>
          </Reveal>
          <Reveal delay={120}><FeaturedArticleBand note={latestNote} /></Reveal>
        </section>
      ) : null}

      <section className="subject-section" aria-labelledby="subjects-title">
        <Reveal className="section-heading">
          <div><span className="section-code">03 / Channels</span><h2 id="subjects-title">What tends to show up here</h2></div>
          <Link className="text-button" href="/about">Read more about Deep</Link>
        </Reveal>
        <div className="subject-list">
          {subjects.map(([number, title, description], index) => (
            <Reveal className="subject-row" delay={index * 70} key={title}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true">-&gt;</i>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="writing-callout">
        <Reveal>
          <span className="section-code">Archive / {String(notes.length).padStart(2, "0")}</span>
          <h2>Only real published writing. No demonstration posts.</h2>
          <Link className="light-button" href="/notes">Open the archive</Link>
        </Reveal>
      </section>
    </>
  );
}
