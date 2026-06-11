import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Deep Chadamiya and why he publishes Draft State.",
};

const interests = [
  ["Software", "Building products and learning what survives contact with real use."],
  ["Design", "Studying the choices that make technology feel understandable."],
  ["Games", "Thinking through systems, worlds, interaction, and collaboration."],
  ["Photography", "Using a camera as a reason to pay closer attention."],
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <p className="kicker">About</p>
        <h1>
          Hi, I’m Deep.
          <span>I work between code, design, and stories.</span>
        </h1>
        <div className="about-hero__marker" aria-hidden="true">DEEP</div>
      </section>

      <section className="about-story section-grid">
        <p className="section-number">01 / ME</p>
        <div className="about-story__copy">
          <p className="lead-serif">
            I’m a software engineer based in Phoenix, with a habit of following an
            idea beyond the edge of my job title.
          </p>
          <div className="two-column-copy">
            <p>
              That usually leads me into interface design, game development,
              photography, or the systems behind how creative work gets made. I
              like understanding both the technical structure and the human
              experience around it.
            </p>
            <p>
              I made Draft State because project lessons disappear quickly. Writing
              gives me a way to slow them down, question the first explanation, and
              leave behind something useful for my future self—and possibly someone
              else.
            </p>
          </div>
        </div>
      </section>

      <section className="interest-section section-grid" aria-labelledby="interests-title">
        <p className="section-number">02 / SUBJECTS</p>
        <div>
          <h2 id="interests-title">The subjects that keep pulling me back.</h2>
          <div className="interest-grid">
            {interests.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles section-grid">
        <p className="section-number">03 / WRITING</p>
        <div className="principle-list">
          <article>
            <span>01</span>
            <h2>Start with something that happened.</h2>
            <p>A decision, a failed attempt, a screen, a conversation, or a moment worth examining.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Be clear about what I do not know.</h2>
            <p>The unfinished parts are often more useful than a confident conclusion.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Make it worth revisiting.</h2>
            <p>Edit for clarity, keep the useful detail, and publish only when the piece has earned its place.</p>
          </article>
        </div>
      </section>
    </>
  );
}
