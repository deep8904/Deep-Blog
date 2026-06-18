import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "About Deep Chadamiya and the ideas behind Loose Thread.",
};

const subjects = [
  ["01", "Making", "Turning a loose idea into something testable, then noticing where the real constraints appear."],
  ["02", "Games", "Studying how rules, feedback, levels, pacing, and failure teach a player what matters."],
  ["03", "Looking", "Using framing, timing, hierarchy, and mood to notice details I would otherwise move past."],
  ["04", "Writing", "Keeping a clearer record of what happened so the lesson does not disappear after the work ends."],
] as const;

export default function AboutPage() {
  return (
    <div className="inner-page">
      <section className="page-hero about-page-hero" aria-labelledby="about-title">
        <div className="section-label"><span>ABOUT</span><p>THE PERSON + THE PRACTICE</p></div>
        <h1 id="about-title">
          <span className="line"><span>I’m Deep.</span></span>
          <span className="line"><span>This is where I keep the trail.</span></span>
        </h1>
        <p className="page-intro">Loose Thread documents what I learn while making things, studying games, looking closely, and trying to understand why some decisions stay useful after the work is done.</p>
      </section>

      <section className="about-body about-body--portrait">
        <Reveal className="about-portrait-grid">
          <figure className="about-portrait" aria-label="Portrait of Deep Chadamiya">
            <div className="about-portrait__image" role="img" aria-label="Deep Chadamiya portrait" />
            <figcaption>
              <span>PORTRAIT / DEEP</span>
              <span>PHOENIX, ARIZONA</span>
            </figcaption>
          </figure>

          <div className="about-profile-copy">
            <div className="about-index">
              <p>[ PROFILE / 01 ]</p>
              <div className="identity-block">
                <span>NAME</span><strong>Deep Chadamiya</strong>
                <span>PRACTICE</span><strong>Making, images, notes</strong>
                <span>DIRECTION</span><strong>Games, interaction, clearer thinking</strong>
              </div>
            </div>

            <div className="long-copy">
              <h2>I use this site to slow down after the work and notice what the work was trying to teach me.</h2>
              <p>I am drawn to the space where making, playing, and looking closely overlap. A prototype teaches through resistance. An image teaches through attention. A game teaches through rules, feedback, pacing, and the feeling of trying again.</p>
              <p>The notes here are my attempt to keep those lessons from becoming vague. I want to write from real moments: a weekend build, a design choice, a confusing interaction, a scene I kept thinking about, or a question that keeps returning after the obvious answer is gone.</p>
            </div>
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

      <section className="closing-note" id="contact">
        <Reveal>
          <div className="contact-section">
            <div className="contact-section__copy">
              <p>[ CONTACT ]</p>
              <h2>Send me a note if something here connects with what you are making, playing, or trying to understand.</h2>
              <Link className="secondary-button" href="/notes"><span>Read the writing</span><span aria-hidden="true">→</span></Link>
            </div>
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
