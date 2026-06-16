import Link from "next/link";

const disciplines = [
  {
    index: "01",
    label: "Software engineering",
    detail: "Systems, products, and the decisions that carry an idea into release.",
  },
  {
    index: "02",
    label: "UI/UX design",
    detail: "Clear interfaces, thoughtful flows, and useful interactions.",
  },
  {
    index: "03",
    label: "Games + photography",
    detail: "Play, feedback, framing, and the details that shape attention.",
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
            <span>Ideas rarely</span>
            <span>arrive <em>finished.</em></span>
          </h1>

          <p className="identity-hero__intro">
            Loose Thread is a personal record of building software, designing
            interfaces, exploring games, and learning to see more carefully
            through photography.
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
              <span>CURRENT RECORD</span>
              <strong>{count} published {publishedCount === 1 ? "entry" : "entries"}</strong>
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
