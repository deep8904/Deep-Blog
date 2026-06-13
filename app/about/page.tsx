import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Deep Chadamiya and why he publishes Draft State.",
};

const interests = [
  ["01", "Software", "Building products and learning what survives contact with real use."],
  ["02", "Interface design", "Studying the choices that make technology feel understandable."],
  ["03", "Games", "Thinking through systems, worlds, interaction, and collaboration."],
  ["04", "Photography", "Using a camera as a reason to pay closer attention."],
] as const;

const principles = [
  ["01", "Start with something that happened.", "A decision, failed attempt, screen, conversation, or moment worth examining."],
  ["02", "Be clear about what I do not know.", "The unfinished parts are often more useful than a confident conclusion."],
  ["03", "Make it worth revisiting.", "Edit for clarity, keep the useful detail, and publish only when the piece has earned its place."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <Reveal className="about-hero__title"><span className="section-code">About / Deep Chadamiya</span><h1 id="about-title">About</h1></Reveal>
        <Reveal className="about-hero__statement" delay={100}><p>I am a software engineer based in Phoenix, with a habit of following an idea beyond the edge of my job title.</p><div><span>Software</span><span>Interface design</span><span>Games</span><span>Photography</span></div></Reveal>
      </section>
      <section className="profile-grid">
        <Reveal className="profile-grid__visual"><div className="profile-monogram" aria-hidden="true">DC</div><span>PHX / AZ</span></Reveal>
        <Reveal className="profile-grid__copy" delay={120}><p>That usually leads me into interface design, game development, photography, or the systems behind how creative work gets made. I like understanding both the technical structure and the human experience around it.</p><p>I made Draft State because project lessons disappear quickly. Writing gives me a way to slow them down, question the first explanation, and leave behind something useful for my future self and possibly someone else.</p></Reveal>
      </section>
      <section className="about-list-section" aria-labelledby="interests-title">
        <Reveal className="section-heading"><div><span className="section-code">01 / Subjects</span><h2 id="interests-title">The subjects that keep pulling me back</h2></div></Reveal>
        <div className="about-list">{interests.map(([number,title,description],index)=><Reveal className="about-list__row" delay={index*70} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true">-&gt;</i></Reveal>)}</div>
      </section>
      <section className="principles-section" aria-labelledby="principles-title">
        <Reveal className="section-heading"><div><span className="section-code">02 / Writing rules</span><h2 id="principles-title">How a note earns its place</h2></div></Reveal>
        <div className="principles-grid">{principles.map(([number,title,description],index)=><Reveal className="principle" delay={index*80} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
      </section>
    </>
  );
}
