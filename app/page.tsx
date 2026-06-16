import Link from "next/link";
import { HomeTriptychHero } from "@/components/home-triptych-hero";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latest = notes[0];
  const count = String(notes.length).padStart(2, "0");

  return (
    <>
      <HomeTriptychHero publishedCount={notes.length} />
      <section className="premise-section" id="premise" aria-labelledby="premise-title">
        <Reveal>
          <div className="section-label"><span>01</span><p>WHY THIS EXISTS</p></div>
          <div className="premise-heading">
            <h2 id="premise-title">I want a place where unfinished thinking has enough room to become useful.</h2>
            <p>I am not trying to turn every idea into a polished conclusion. I am trying to keep a clear record of the moment, the constraint, the revision, and the part I want to remember when the next project begins.</p>
          </div>
          <div className="principle-strip">
            <article><span>01 / NOTICE</span><h3>Start from a real scene, decision, build, or question.</h3></article>
            <article><span>02 / TEST</span><h3>Let the work push back before deciding what I think.</h3></article>
            <article><span>03 / KEEP</span><h3>Save the lesson that still feels useful after revision.</h3></article>
          </div>
        </Reveal>
      </section>
      <section className="writing-feature" aria-labelledby="writing-feature-title">
        <Reveal className="writing-feature-grid">
          <div className="writing-count" aria-hidden="true">{count}</div>
          <div className="writing-feature-copy">
            <div className="eyebrow"><span>[ WRITING ]</span><span>{latest ? "PUBLISHED" : "QUIET"}</span></div>
            <h2 id="writing-feature-title">{latest ? "The newest note I can stand behind." : "Nothing published yet."}</h2>
            {latest ? <><h3>{latest.title}</h3><p>{latest.description}</p><Link className="text-link" href={`/notes/${latest.slug}`}>Read the note <span aria-hidden="true">→</span></Link></> : <><p>This page stays quiet until a real note is ready. No sample posts, filler titles, or pretend schedule.</p><Link className="text-link" href="/notes">Open writing <span aria-hidden="true">→</span></Link></>}
          </div>
        </Reveal>
      </section>
      <section className="about-preview" aria-labelledby="about-preview-title">
        <Reveal>
          <div className="section-label"><span>02</span><p>ABOUT DEEP</p></div>
          <div className="about-statement">
            <h2 id="about-preview-title">I’m Deep. I learn by making things, studying play, taking photographs, and writing down what changed.</h2>
            <div><p>This site is where I keep the useful trail: the choice I made, the mistake I almost missed, the scene that made me look twice, and the question that still needs time.</p><Link className="text-link" href="/about">More about this site <span aria-hidden="true">→</span></Link></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
