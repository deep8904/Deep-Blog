import type { CSSProperties } from "react";
import Link from "next/link";

const imageMode: "single" | "separate" = "single";
const sharedImage = "/images/home/hero-triptych.jpg";
const separateImages = [
  "/images/home/hero-01.jpg",
  "/images/home/hero-02.jpg",
  "/images/home/hero-03.jpg",
] as const;

const panels = [
  {
    index: "01-A.",
    label: "Software engineering",
    copy: "Building useful systems and learning from the decisions that survive launch.",
    position: "0%",
  },
  {
    index: "02-B.",
    label: "UI/UX design",
    copy: "Designing clearer interfaces and better paths through complex products.",
    position: "50%",
  },
  {
    index: "03-C.",
    label: "Games and photography",
    copy: "Studying interaction, play, framing, and the details that hold attention.",
    position: "100%",
  },
] as const;

export function HomeTriptychHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="aether-hero" aria-labelledby="home-title">
      <div className="aether-rail aether-rail--top" aria-hidden="true">
        <span>LOOSE / THREAD</span>
        <i />
        <span>SOFTWARE</span>
        <span>INTERFACES</span>
        <span>GAMES</span>
        <span>PHOTOGRAPHY</span>
        <i />
        <span>EST. 2026</span>
      </div>

      <div className="aether-stage">
        <div className="aether-panels" aria-label="Areas I write about">
          {panels.map((panel, panelIndex) => {
            const panelImage = imageMode === "single" ? sharedImage : separateImages[panelIndex];
            const panelStyle = {
              "--panel-image": `url("${panelImage}")`,
              "--panel-size": imageMode === "single" ? "300% 100%" : "cover",
              "--panel-position": imageMode === "single" ? panel.position : "center",
            } as CSSProperties;

            return (
              <article className="aether-panel" key={panel.index} style={panelStyle}>
                <span className="aether-panel__index">{panel.index}</span>
                <div className="aether-panel__copy">
                  <strong>{panel.label}</strong>
                  <p>{panel.copy}</p>
                </div>
              </article>
            );
          })}
        </div>

        <h1 className="aether-title" id="home-title">
          <span className="aether-title__line"><span>LOOSE</span></span>
          <span className="aether-title__line"><span>THREAD</span></span>
        </h1>

        <div className="aether-stage__meta aether-stage__meta--left">
          <span>PERSONAL FIELD NOTES</span>
          <strong>IDEAS RARELY ARRIVE FINISHED.</strong>
        </div>

        <div className="aether-stage__meta aether-stage__meta--right">
          <span>PHOENIX / ARIZONA</span>
          <strong>{String(publishedCount).padStart(2, "0")} PUBLISHED</strong>
        </div>
      </div>

      <div className="aether-rail aether-rail--bottom">
        <span className="aether-rail__status"><b aria-hidden="true" /> NOTEBOOK ACTIVE</span>
        <i />
        <Link href="/notes">READ THE WRITING</Link>
        <Link href="/about">ABOUT DEEP</Link>
        <i />
        <span>ONE IMAGE / THREE FRAMES</span>
      </div>
    </section>
  );
}
