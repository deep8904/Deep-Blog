export function HomeMarquee() {
  const items = ["Software", "Interface design", "Games", "Photography", "Developer communities"];
  return (
    <div className="marquee" aria-label="Topics in the journal">
      <div className="marquee__track">
        {[0, 1].map((copy) => <div className="marquee__group" key={copy} aria-hidden={copy === 1}>{items.map((item) => <span key={item}>{item}<i /></span>)}</div>)}
      </div>
    </div>
  );
}
