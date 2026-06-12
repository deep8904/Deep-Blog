import { SubjectRotator } from "@/components/subject-rotator";

export function HomeVisual() {
  return (
    <div className="home-hero__visual">
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-object" aria-hidden="true"><span /><span /><span /></div>
      <div className="home-hero__visual-copy">
        <p>Deep Chadamiya / Personal journal</p>
        <h1 id="home-title">
          <span className="mask-line"><span>Build things.</span></span>
          <span className="mask-line"><span>Notice details.</span></span>
          <span className="mask-line"><span>Write them down.</span></span>
        </h1>
        <div className="home-hero__tags"><span>Software</span><span>UI / UX</span><span>Games</span><span>Photography</span></div>
      </div>
      <div className="home-hero__subject">Field notes on <SubjectRotator /></div>
    </div>
  );
}
