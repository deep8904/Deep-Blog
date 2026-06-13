import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

const PORTRAIT = "data:image/webp;base64,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";

export const metadata: Metadata = {
  title: "About",
  description: "About Deep Chadamiya and why he publishes Draft State.",
};

const interests = [
  ["01", "Software", "Products, systems, and the lessons that appear after something ships."],
  ["02", "Interface design", "The choices that make technology understandable and useful."],
  ["03", "Games", "Interaction, collaboration, playtesting, and learning through constraints."],
  ["04", "Photography", "Using a camera as a reason to slow down and notice more."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <Reveal className="about-hero__title">
          <span className="section-code">About / Deep Chadamiya</span>
          <h1 id="about-title">About</h1>
        </Reveal>
        <Reveal className="about-hero__statement" delay={80}>
          <p>I am a software engineer based in Phoenix who keeps wandering into interface design, games, photography, and the systems behind creative work.</p>
        </Reveal>
      </section>

      <section className="profile-grid">
        <Reveal className="profile-grid__visual">
          <img src={PORTRAIT} alt="Deep Chadamiya standing outdoors near a bridge and mountain landscape" />
        </Reveal>

        <Reveal className="profile-grid__copy" delay={100}>
          <span className="section-code">Why I write</span>
          <p>Project lessons disappear quickly. Writing gives me a way to slow them down, question the first explanation, and keep the useful details after the work is over.</p>
          <p>Draft State is not a portfolio of polished outcomes. It is a record of decisions, mistakes, observations, and ideas that are still developing.</p>
        </Reveal>
      </section>

      <section className="about-list-section" aria-labelledby="interests-title">
        <Reveal className="section-heading">
          <div>
            <span className="section-code">What I write about</span>
            <h2 id="interests-title">Four subjects, one notebook</h2>
          </div>
        </Reveal>
        <div className="about-list">
          {interests.map(([number, title, description], index) => (
            <Reveal className="about-list__row" delay={index * 60} key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <i aria-hidden="true">-&gt;</i>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
