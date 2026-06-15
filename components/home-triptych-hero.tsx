import Link from "next/link";

const panels = [
  {
    index: "01-A",
    label: "Software engineering",
    copy: "Building reliable systems and learning from the decisions that survive release.",
  },
  {
    index: "02-B",
    label: "UI/UX design",
    copy: "Designing clearer interfaces and more thoughtful paths through complex products.",
  },
  {
    index: "03-C",
    label: "Games + photography",
    copy: "Studying interaction, play, framing, and the details that guide attention.",
  },
] as const;

export function HomeTriptychHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="aether-hero" aria-labelledby="home-title">
      <div className="aether-hero__meta">
        <span>LOOSE THREAD / PERSONAL FIELD NOTES</span>
        <span>PHOENIX / EST. 2026</span>
      </div>

      <div className="aether-hero__stage">
        <div className="aether-hero__panels" aria-label="Areas I write about">
          {panels.map((panel, panelIndex) => (
            <article className={`aether-panel aether-panel--${panelIndex + 1}`} key={panel.index}>
              <span className="aether-panel__index">{panel.index}</span>
              <div className="aether-panel__copy">
                <strong>{panel.label}</strong>
                <p>{panel.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="aether-hero__title-lockup">
          <p>Ideas rarely arrive finished.</p>
          <h1 id="home-title"><span>LOOSE</span><span>THREAD</span></h1>
        </div>

        <div className="aether-hero__signals" aria-hidden="true">
          <span>BUILD / DESIGN / PLAY</span>
          <span>{String(publishedCount).padStart(2, "0")} ENTRIES</span>
        </div>
      </div>

      <div className="aether-hero__footer">
        <p>
          A personal notebook about software, interface design, games,
          photography, and the questions that remain after the work is done.
        </p>
        <nav aria-label="Hero links">
          <span><i aria-hidden="true" /> Journal active</span>
          <Link href="/notes">Read the writing</Link>
          <Link href="/about">About Deep</Link>
        </nav>
      </div>
    </section>
  );
}
