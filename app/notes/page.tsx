import type { Metadata } from "next";
import { NoteList } from "@/components/note-list";
import { ScrollReveal } from "@/components/scroll-reveal";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Deep Chadamiya about software, design, games, and photography.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="page-hero page-hero--writing" aria-labelledby="writing-title">
        <div className="page-hero__coordinates" aria-hidden="true"><span>ARCHIVE / WRITING</span><span>{String(notes.length).padStart(2, "0")} LIVE</span></div>
        <ScrollReveal><p className="journal-label">Writing archive</p><h1 id="writing-title">Writing</h1></ScrollReveal>
        <ScrollReveal className="page-hero__lede" delay={100}>
          <p>Notes from projects, experiments, games, design work, and the things I notice while making them.</p>
          <span className="status-chip"><i className="status-light" />Archive active</span>
        </ScrollReveal>
      </section>
      <section className="archive-section" aria-labelledby="archive-title">
        <div className="archive-section__header"><p className="journal-label">Published entries</p><h2 id="archive-title" className="sr-only">All published writing</h2><span>{String(notes.length).padStart(2, "0")} total</span></div>
        <NoteList notes={notes} emptyContext="notes" />
      </section>
    </>
  );
}
