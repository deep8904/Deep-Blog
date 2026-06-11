import type { Metadata } from "next";
import { InteractiveField } from "@/components/interactive-field";
import { NoteList } from "@/components/note-list";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "Essays and notes by Deep Chadamiya about software, design, games, and photography.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="page-intro page-intro--split">
        <div>
          <p className="kicker">The archive / {String(notes.length).padStart(2, "0")}</p>
          <h1>
            Notes, essays,
            <span>and things I needed to understand.</span>
          </h1>
          <p className="page-lede">
            This page will hold writing from real projects, observations, and
            questions. There are no demonstration posts here—the first entry will
            appear when it is finished.
          </p>
        </div>
        <InteractiveField compact />
      </section>

      <section className="archive section-grid" aria-labelledby="archive-title">
        <p className="section-number">ALL / WRITING</p>
        <div>
          <h2 className="sr-only" id="archive-title">
            All published notes
          </h2>
          <NoteList notes={notes} />
        </div>
      </section>
    </>
  );
}
