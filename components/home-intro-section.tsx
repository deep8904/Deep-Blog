import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function HomeIntroSection() {
  return (
    <section className="intro-grid" aria-labelledby="intro-title">
      <Reveal className="intro-grid__index">
        <span className="section-code">01 / Notebook</span>
        <div className="index-mark" aria-hidden="true"><span /><span /><span /></div>
        <ul><li>Software</li><li>Interfaces</li><li>Games</li><li>Photography</li></ul>
      </Reveal>
      <Reveal className="intro-grid__copy" delay={120}>
        <h2 id="intro-title">A personal archive for the decisions, mistakes, and details that are easy to forget.</h2>
        <p>I work in software, care about interface details, enjoy building game ideas, and usually have a camera nearby. Writing helps me understand what changed between the first idea and the thing that actually got made.</p>
        <div className="intro-grid__actions">
          <Link className="primary-button" href="/notes">Browse writing</Link>
          <Link className="text-button" href="/about">About Deep</Link>
        </div>
      </Reveal>
    </section>
  );
}
