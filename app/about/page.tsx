import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";

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

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about" aria-labelledby="about-title">
        <div className="page-hero__coordinates" aria-hidden="true"><span>ABOUT / DEEP</span><span>PHX / AZ</span></div>
        <ScrollReveal><p className="journal-label">About Deep</p><h1 id="about-title">About</h1></ScrollReveal>
        <ScrollReveal className="about-intro" delay={100}>
          <p>I am a software engineer based in Phoenix, with a habit of following an idea beyond the edge of my job title.</p>
          <div className="about-intro__facts"><span><i className="status-light" />Phoenix, Arizona</span><span>Software / UX / Games / Photography</span></div>
        </ScrollReveal>
      </section>

      <section className="about-record">
        <ScrollReveal className="about-record__screen"><div className="about-record__monogram" aria-hidden="true">DC</div></ScrollReveal>
        <ScrollReveal className="about-record__copy" delay={100}>
          <p>That usually leads me into interface design, game development, photography, or the systems behind how creative work gets made. I like understanding both the technical structure and the human experience around it.</p>
          <p>I made Draft State because project lessons disappear quickly. Writing gives me a way to slow them down, question the first explanation, and leave behind something useful for my future self and possibly someone else.</p>
        </ScrollReveal>
      </section>

      <section className="about-section" aria-labelledby="interests-title">
        <div className="section-intro"><p className="journal-label">Working channels / 04</p><h2 id="interests-title">The subjects that keep pulling me back.</h2></div>
        <div className="interest-list">
          {interests.map(([number, title, description], index) => (
            <ScrollReveal className="interest-list__row" key={title} delay={index * 65}><span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true" /></ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
