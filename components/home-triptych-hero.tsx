import Link from "next/link";

const disciplines = [
  {
    index: "01",
    label: "Making",
    detail: "Small builds, rough prototypes, and the decisions that only appear once an idea has to work.",
  },
  {
    index: "02",
    label: "Games",
    detail: "Rules, feedback, levels, pacing, and the small cues that help a player understand what changed.",
  },
  {
    index: "03",
    label: "Looking",
    detail: "Photography, notes, and the details that make a scene, interface, or moment easier to read.",
  },
] as const;

export function HomeTriptychHero({ publishedCount }: { publishedCount: number }) {
  const count = String(publishedCount).padStart(2, "0");

  return (
    <section className="identity-hero" aria-labelledby="home-title">
      <div className="identity-hero__meta">
        <span>[ PERSONAL FIELD NOTES ]</span>
        <span>PHOENIX / EST. 2026</span>
      </div>

      <div className="identity-hero__main">
        <div className="identity-hero__copy">
          <div className="identity-hero__status">
            <i aria-hidden="true" />
            <span>Notebook active</span>
          </div>

          <h1 id="home-title">
            <span>I keep notes</span>
            <span>while ideas <em>change.</em></span>
          </h1>

          <p className="identity-hero__intro">
            Loose Thread is where I slow down after making something and write
            down what actually happened: the useful mistake, the better question,
            the photograph that changed how I saw a scene, or the game idea that
            became clearer only after it pushed back.
          </p>

          <div className="identity-hero__actions">
            <Link className="primary-button" href="/notes">
              <span>Read the writing</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="identity-hero__secondary" href="/about">
              About Deep
            </Link>
          </div>
        </div>

        <aside className="identity-hero__visual" aria-label="Loose Thread visual journal">
          <div className="identity-hero__image" role="img" aria-label="Loose Thread hero photograph" />
          <div className="identity-hero__visual-footer">
            <div>
              <span>PUBLISHED WRITING</span>
              <strong>{count} published {publishedCount === 1 ? "note" : "notes"}</strong>
            </div>
            <span className="identity-hero__version">LT / 01</span>
          </div>
        </aside>
      </div>

      <div className="identity-hero__disciplines" aria-label="Topics covered on Loose Thread">
        {disciplines.map((discipline) => (
          <article key={discipline.index}>
            <span>{discipline.index}</span>
            <div>
              <strong>{discipline.label}</strong>
              <p>{discipline.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
