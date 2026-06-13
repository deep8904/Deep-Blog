import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ArchiveCallout({ count }: { count: number }) {
  return <section className="writing-callout"><Reveal><span className="section-code">Archive / {String(count).padStart(2, "0")}</span><h2>Only real published writing. No demonstration posts.</h2><Link className="light-button" href="/notes">Open the archive</Link></Reveal></section>;
}
