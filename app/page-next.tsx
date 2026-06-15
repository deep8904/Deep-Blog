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
          <div className="section-label"><span>01</span><p>THE PREMISE</p></div>
          <div className="premise-heading">
            <h2 id="premise-title">A public record of thinking, building, and changing my mind.</h2>
            <p>The useful part of an idea is often the trail behind it: what started it, what challenged it, and what remained after revision.</p>
          </div>
          <div className="principle-strip">
            <article><span>01 / NOTICE</span><h3>Pay attention before forming an opinion.</h3></article>
            <article><span>02 / BUILD</span><h3>Turn a loose idea into something that can be tested.</h3></article>
            <article><span>03 / RECONSIDER</span><h3>Stay open to changing direction when the work asks for it.</h3></article>
          </div>
        </Reveal>
      </section>
      <section className="archive-feature" aria-labelledby="archive-feature-title">
        <Reveal className="archive-feature-grid">
          <div className="archive-count" aria-hidden="true">{count}</div>
          <div className="archive-feature-copy">
            <div className="eyebrow"><span>[ ARCHIVE ]</span><span>{latest ? "OPEN" : "EMPTY"}</span></div>
            <h2 id="archive-feature-title">{latest ? "Writing on record." : "Nothing published yet."}</h2>
            {latest ? <><h3>{latest.title}</h3><p>{latest.description}</p><Link className="text-link" href={`/notes/${latest.slug}`}>Read the latest entry <span aria-hidden="true">→</span></Link></> : <><p>The archive stays empty until the first piece is ready to earn its place here.</p><Link className="text-link" href="/notes">Open the archive <span aria-hidden="true">→</span></Link></>}
          </div>
        </Reveal>
      </section>
      <section className="about-preview" aria-labelledby="about-preview-title">
        <Reveal>
          <div className="section-label"><span>02</span><p>ABOUT THE WRITER</p></div>
          <div className="about-statement">
            <h2 id="about-preview-title">I’m Deep, a software engineer and UI/UX designer who also works through ideas with a camera and games.</h2>
            <div><p>I write about building software, designing interfaces, photography, and the path that is pulling me toward game UI/UX and game design.</p><Link className="text-link" href="/about">More about this site <span aria-hidden="true">→</span></Link></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
