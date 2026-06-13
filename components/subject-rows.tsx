import { Reveal } from "@/components/reveal";

const rows = [
  ["01", "Software", "Products, systems, and lessons that appear after something ships."],
  ["02", "Interfaces", "The details that make technology understandable or frustrating."],
  ["03", "Games", "Interaction, teamwork, playtesting, and learning through constraints."],
  ["04", "Photography", "Framing, observation, and paying closer attention."],
] as const;

export function SubjectRows() {
  return <div className="subject-list">{rows.map(([number, title, description], index) => <Reveal className="subject-row" delay={index * 70} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><i aria-hidden="true">-&gt;</i></Reveal>)}</div>;
}
