import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Deep Chadamiya, a software engineer and UI/UX designer exploring game UI/UX and game design.",
};

const subjects = [
  ["01", "Software engineering", "Building reliable products, solving technical problems, and learning from the decisions behind each system."],
  ["02", "UI/UX design", "Creating clear interfaces, thoughtful flows, and interactions that help people understand what to do next."],
  ["03", "Game UI/UX and game design", "Studying how menus, feedback, controls, environments, and rules shape a player’s experience."],
  ["04", "Photography", "Using framing, timing, hierarchy, and mood to notice details that are easy to miss."],
] as const;

export default function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-hero" aria-labelledby="about-title">
        <div className="section-label"><span>ABOUT</span><p>THE PERSON + THE PRACTICE</p></div>
        <h1 id="about-title">
          <span className="line"><span>Engineering, interfaces,</span></span>
          <span className="line"><span>and a growing focus on games.</span></span>
        </h1>
        <p className="page-intro">Loose Thread documents what I learn while building software, designing interfaces, taking photographs, and studying how games create clear and memorable experiences.</p>
      </section>

      <section className="about-body">
        <Reveal className="about-body-grid">
          <div className="about-index">
            <p>[ PROFILE / 01 ]</p>
            <div className="identity-block">
              <span>NAME</span><strong>Deep Chadamiya</strong>
              <span>PRACTICE</span><strong>Software engineering + UI/UX</strong>
              <span>DIRECTION</span><strong>Game UI/UX + game design</strong>
            </div>
          </div>
          <div className="long-copy">
            <h2>I am a software engineer and UI/UX designer. Photography helps me study attention, and games are where my interests in systems, interaction, and visual design increasingly meet.</h2>
            <p>I enjoy solving technical problems, shaping clear interfaces, and understanding how people move through a product. Photography sharpens the same instincts through framing, timing, hierarchy, and mood.</p>
            <p>I also enjoy playing games, which is leading me deeper into game UI/UX and game design. I want to understand how menus, feedback, environments, controls, and rules work together to guide a player.</p>
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
          <p>[ CURRENT DIRECTION ]</p>
          <h2>Build useful software. Design clearer experiences. Learn how games bring both together.</h2>
          <Link className="primary-button" href="/notes"><span>View the archive</span><span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>
    </div>
  );
}
