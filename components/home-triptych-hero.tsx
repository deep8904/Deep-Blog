import Link from "next/link";

const panels = [
  {
    index: "01",
    label: "Software engineering",
    copy: "Building useful systems and learning from the decisions that survive launch.",
  },
  {
    index: "02",
    label: "UI/UX design",
    copy: "Designing clearer interfaces and better paths through complex products.",
  },
  {
    index: "03",
    label: "Games and photography",
    copy: "Studying interaction, play, framing, and the details that hold attention.",
  },
] as const;

export function HomeTriptychHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="triptych-v2" aria-labelledby="home-title">
      <div className="triptych-v2__meta">
        <span>[ PERSONAL FIELD NOTES ]</span>
        <span>PHOENIX / EST. 2026</span>
      </div>

      <div className="triptych-v2__stage">
        <h1 id="home-title">
          <span>Ideas rarely arrive</span>
          <strong>finished.</strong>
        </h1>

        <div className="triptych-v2__panels" aria-label="Areas I write about">
          {panels.map((panel) => (
            <article key={panel.index}>
              <span>{panel.index}</span>
              <div>
                <strong>{panel.label}</strong>
                <p>{panel.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="triptych-v2__footer">
        <p>
          Loose Thread is my notebook for software, interface design, games,
          photography, and the questions that remain after the work is done.
        </p>
        <div>
          <span><i aria-hidden="true" /> {String(publishedCount).padStart(2, "0")} published</span>
          <Link href="/notes">Read the writing</Link>
          <Link href="/about">About Deep</Link>
        </div>
      </div>
    </section>
  );
}
