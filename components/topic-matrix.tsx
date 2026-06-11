const topics = [
  ["01", "Software", "Products, systems, and the technical choices that survive real use."],
  ["02", "Interface design", "The small decisions that make a screen easier to understand."],
  ["03", "Games", "Worlds, rules, feedback, collaboration, and the shape of play."],
  ["04", "Photography", "Frames, light, timing, and the habit of looking more carefully."],
] as const;

export function TopicMatrix() {
  return (
    <div className="topic-matrix">
      {topics.map(([number, title, description]) => (
        <article key={title}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </div>
  );
}

export function NotebookSignal() {
  return (
    <div className="notebook-signal" aria-hidden="true">
      <svg viewBox="0 0 420 260" role="img">
        <path d="M48 208V58h106v56h84V32h134v176H48Z" />
        <path d="M48 114h106M154 114v94M238 114h134M238 32v176" />
        <path d="M84 176h56l30-32h54l34 40h74" />
        <circle cx="84" cy="176" r="7" />
        <circle cx="170" cy="144" r="7" />
        <circle cx="258" cy="184" r="7" />
        <circle cx="332" cy="184" r="7" />
      </svg>
    </div>
  );
}
