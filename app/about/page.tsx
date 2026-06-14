import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = { title: "About", description: "About this journal." };

const subjects = [
  ["01", "Software", "Products, systems, and lessons after launch."],
  ["02", "Interfaces", "Making complicated technology feel clear."],
  ["03", "Games", "Collaboration, playtesting, and constraints."],
  ["04", "Photography", "Slowing down long enough to notice."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="ip-page-hero" aria-labelledby="about-title">
        <div className="ip-page-hero__ambient" aria-hidden="true" />
        <div className="ip-shell">
          <div className="ip-page-hero__topline"><span className="ip-node-status"><i />Identity record active</span><span className="ip-label">Personal journal / 2026</span></div>
          <div className="ip-page-hero__grid">
            <Reveal><span className="ip-label">Operator identity</span><h1 id="about-title">Making, noticing, documenting.</h1></Reveal>
            <Reveal className="ip-page-hero__card" delay={100}><span className="ip-label">Current focus</span><strong>Software and design</strong><p>Code, interface design, games, photography, and creative systems.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="ip-section"><div className="ip-shell ip-profile">
        <Reveal className="ip-profile__portrait"><span className="ip-media-label">Portrait / Identity node</span></Reveal>
        <Reveal className="ip-profile__content" delay={100}><span className="ip-label">Why I write</span><h2>Keeping the useful parts of unfinished work.</h2><p>Writing slows down project lessons and keeps the details after the work is over.</p><p>This journal records decisions, mistakes, observations, and ideas that are still developing.</p></Reveal>
      </div></section>
      <section className="ip-section ip-section--surface"><div className="ip-shell ip-subject-list">
        {subjects.map(([number, title, description], index) => <Reveal className="ip-subject-row" delay={index * 70} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><i>-&gt;</i></Reveal>)}
      </div></section>
    </>
  );
}
