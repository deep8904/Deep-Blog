export function HomeStats({ publishedCount }: { publishedCount: number }) {
  return (
    <aside className="home-hero__stats" aria-label="Site overview">
      <div className="stat-panel"><span>01</span><strong>{String(publishedCount).padStart(2, "0")}</strong><small>Published notes</small></div>
      <div className="stat-panel"><span>02</span><strong>04</strong><small>Recurring subjects</small></div>
      <div className="stat-panel stat-panel--accent"><span>03</span><strong>PHX</strong><small>Based in Arizona</small></div>
    </aside>
  );
}
