import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Loose Thread and its author, Deep Chadamiya.",
};

const subjects = [
  ["01", "Software as a product decision", "Not just how a system works, but what its structure encourages people to do."],
  ["02", "Interfaces as explanations", "How hierarchy, language, motion, and restraint make complexity easier to understand."],
  ["03", "Games as designed systems", "Rules, feedback, collaboration, and the small decisions that create a playable experience."],
  ["04", "Photography as attention", "A practice of noticing framing, timing, atmosphere, and what usually passes unnoticed."],
] as const;

export default function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-hero" aria-labelledby="about-title">
        <div className="section-label"><span>ABOUT</span><p>THE PERSON + THE PURPOSE</p></div>
        <h1 id="about-title">
          <span className="line"><span>Work, observed</span></span>
          <span className="line"><span>from the inside.</span></span>
        </h1>
        <p className="page-intro">
          Loose Thread is a place to document what I am learning while I build—not a polished retrospective written after every uncertainty has disappeared.
        </p>
      </section>

      <section className="about-body">
        <Reveal className="about-body-grid">
          <div className="about-index">
            <p>[ PROFILE / 01 ]</p>
            <div className="identity-block">
              <span>NAME</span><strong>Deep Chadamiya</strong>
              <span>PRACTICE</span><strong>Software + design</strong>
              <span>MODE</span><strong>Always in progress</strong>
            </div>
          </div>
          <div className="long-copy">
            <h2>I build software, study interfaces, make photographs, and keep returning to games as a medium for systems and stories.</h2>
            <p>
              Those interests are usually treated as separate disciplines. In practice, they keep informing one another: engineering creates constraints, design makes those constraints understandable, and visual storytelling decides what deserves attention.
            </p>
            <p>
              This site is where I slow that process down. I write to examine decisions, record useful failures, and keep ideas from becoming vague memories.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="topic-ledger" aria-labelledby="ledger-title">
        <Reveal>
          <div className="section-label"><span>01</span><p>RECURRING SUBJECTS</p></div>
          <div className="ledger-list">
            {subjects.map(([number, title, description], index) => (
              <div key={title}>
                <span>{number}</span>
                <h2 id={index === 0 ? "ledger-title" : undefined}>{title}</h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="closing-note">
        <Reveal>
          <p>[ EDITORIAL RULE ]</p>
          <h2>Publish less. Think longer. Leave the revision visible.</h2>
          <Link className="primary-button" href="/notes"><span>View the archive</span><span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>
    </div>
  );
}
