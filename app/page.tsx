import Link from "next/link";
import { FeaturedArticleBand } from "@/components/featured-article-band";
import { IdentityHero } from "@/components/identity-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAllNotes } from "@/lib/notes";

const subjects = [
  ["01", "Software", "Building products and learning what survives contact with real use."],
  ["02", "Interfaces", "The decisions that make technology understandable or confusing."],
  ["03", "Games", "Systems, worlds, collaboration, and what play can teach."],
  ["04", "Photography", "Attention, framing, and the habit of looking a little longer."],
] as const;

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <IdentityHero latestHref={latestNote ? `/notes/${latestNote.slug}` : undefined} publishedCount={notes.length} />

      <div className="journal-marquee" aria-label="Topics covered on Draft State">
        <div className="journal-marquee__track">
          {[0, 1].map((copy) => (
            <div className="journal-marquee__group" key={copy} aria-hidden={copy === 1}>
              <span>Software</span><i /><span>Interface design</span><i /><span>Games</span><i /><span>Photography</span><i /><span>Personal field notes</span><i />
            </div>
          ))}
        </div>
      </div>

      {latestNote ? (
        <section className="home-section home-section--feature" aria-labelledby="featured-title">
          <ScrollReveal>
            <div className="section-intro">
              <p className="journal-label">Featured writing / 01</p>
              <h2 id="featured-title">A real project, documented while the details are still useful.</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}><FeaturedArticleBand note={latestNote} /></ScrollReveal>
        </section>
      ) : null}

      <section className="home-section home-section--statement" aria-labelledby="statement-title">
        <ScrollReveal className="statement-layout">
          <div className="statement-layout__label"><span className="journal-index">02</span><p>Why I write</p></div>
          <div>
            <h2 id="statement-title">Project lessons disappear quickly. Writing gives them somewhere to stay.</h2>
            <div className="statement-layout__copy">
              <p>Some notes start with a technical decision. Others begin with a game, a photograph, a conversation, or an idea that changed after a team started building it.</p>
              <p>This archive is not a record of perfect decisions. It is a place to keep what I tried, what failed, and what became clearer afterward.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="home-section home-section--subjects" aria-labelledby="subjects-title">
        <ScrollReveal>
          <div className="section-intro section-intro--split">
            <div><p className="journal-label">Notebook channels / 04</p><h2 id="subjects-title">What tends to show up here.</h2></div>
            <Link className="journal-link" href="/about">About Deep</Link>
          </div>
        </ScrollReveal>
        <div className="subject-grid">
          {subjects.map(([number, title, description], index) => (
            <ScrollReveal key={title} delay={index * 70} className="subject-grid__item">
              <span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true" />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="home-section home-section--closing">
        <ScrollReveal className="closing-panel">
          <span className="journal-label">Archive status</span>
          <p>{String(notes.length).padStart(2, "0")} published note{notes.length === 1 ? "" : "s"}. No demonstration content.</p>
          <Link className="journal-button journal-button--dark" href="/notes">Browse the writing</Link>
        </ScrollReveal>
      </section>
    </>
  );
}
