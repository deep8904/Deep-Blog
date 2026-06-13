import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";

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
          <Image
            src="/images/about/deep.webp"
            alt="Deep Chadamiya standing outdoors near a bridge and mountain landscape"
            width={1050}
            height={1400}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
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
