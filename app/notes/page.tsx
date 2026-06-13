import type { Metadata } from "next";
import { NoteList } from "@/components/note-list";
import { Reveal } from "@/components/reveal";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Deep Chadamiya about software, design, games, and photography.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="archive-hero" aria-labelledby="writing-title">
        <div className="protocol-rail" aria-hidden="true" />
        <Reveal className="archive-hero__index">
          <span className="protocol-label">Archive / {String(notes.length).padStart(2, "0")} published</span>
          <h1 id="writing-title">Writing</h1>
        </Reveal>
        <Reveal className="archive-hero__copy" delay={100}>
          <p>Essays and working notes about software, interface design, games, collaboration, photography, and the decisions that changed how I think.</p>
          <div className="archive-hero__status"><span /><small>Archive online</small></div>
        </Reveal>
        <div className="protocol-rail" aria-hidden="true" />
      </section>

      <section className="archive-list" aria-labelledby="archive-title">
        <div className="section-heading">
          <div><span className="protocol-label">Index / All entries</span><h2 id="archive-title">Published archive</h2></div>
          <span className="protocol-label">{String(notes.length).padStart(2, "0")} total</span>
        </div>
        <NoteList notes={notes} emptyContext="notes" />
      </section>
    </>
  );
}
