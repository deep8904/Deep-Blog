import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latest = notes[0];
  const count = String(notes.length).padStart(2, "0");

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span>[ PERSONAL FIELD NOTES ]</span><span>EST. 2026</span></div>
          <h1 id="hero-title" className="hero-title"><span className="line"><span>Ideas rarely arrive</span></span><span className="line"><span>finished.</span></span></h1>
          <p className="hero-intro">Loose Thread is my notebook for software, product design, games, photography, and the questions that remain after the work is done.</p>
          <div className="hero-actions"><a className="primary-button" href="#premise"><span>Read the premise</span><span aria-hidden="true">↘</span></a></div>
        </div>
        <aside className="protocol-panel" aria-label="Journal status">
          <div className="panel-topline"><span>JOURNAL STATUS</span><span>{count} ENTRIES</span></div>
          <div className="panel-main"><div className="draft-mark" aria-hidden="true">{count}</div><div><p className="panel-label">CURRENT</p><h2>{latest?.title ?? "First entry in progress."}</h2><p>{latest?.description ?? "The first piece is being collected and shaped before publication."}</p></div></div>
          <ol className="stage-list"><li className="is-complete"><span>01</span><strong>Observe</strong><em>Ongoing</em></li><li className="is-current"><span>02</span><strong>Build</strong><em>Active</em></li><li><span>03</span><strong>Write</strong><em>Next</em></li></ol>
          <div className="panel-footer"><span><i className="status-dot" aria-hidden="true" /> Notebook active</span><span>2026</span></div>
        </aside>
      </section>

      <section className="premise-section" id="premise" aria-labelledby="premise-title"><Reveal><div className="section-label"><span>01</span><p>THE PREMISE</p></div><div className="premise-heading"><h2 id="premise-title">A public record of thinking, building, and changing my mind.</h2><p>The useful part of an idea is the trail: what started it, what challenged it, and what survived revision.</p></div><div className="principle-strip"><article><span>01 / OBSERVE</span><h3>Pay attention before forming an opinion.</h3></article><article><span>02 / BUILD</span><h3>Turn vague ideas into something testable.</h3></article><article><span>03 / RECONSIDER</span><h3>Leave room to change direction.</h3></article></div></Reveal></section>

      <section className="archive-feature" aria-labelledby="archive-feature-title"><Reveal className="archive-feature-grid"><div className="archive-count" aria-hidden="true">{count}</div><div className="archive-feature-copy"><div className="eyebrow"><span>[ ARCHIVE ]</span><span>{latest ? "OPEN" : "EMPTY"}</span></div><h2 id="archive-feature-title">{latest ? "Writing on record." : "Nothing published—yet."}</h2>{latest ? <><h3>{latest.title}</h3><p>{latest.description}</p><Link className="text-link" href={`/notes/${latest.slug}`}>Read the latest entry <span aria-hidden="true">→</span></Link></> : <><p>The archive stays empty until the first piece is ready.</p><Link className="text-link" href="/notes">Open the archive <span aria-hidden="true">→</span></Link></>}</div></Reveal></section>

      <section className="about-preview" aria-labelledby="about-preview-title"><Reveal><div className="section-label"><span>02</span><p>ABOUT THE WRITER</p></div><div className="about-statement"><h2 id="about-preview-title">I’m Deep—a software engineer with a design habit and a camera usually nearby.</h2><div><p>I write about engineering, interfaces, game development, visual storytelling, and turning ideas into something real.</p><Link className="text-link" href="/about">More about this site <span aria-hidden="true">→</span></Link></div></div></Reveal></section>
    </>
  );
}
