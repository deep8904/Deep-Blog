import type { Metadata } from "next";
import { NoteList } from "@/components/note-list";
import { getAllNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes by Deep Chadamiya about software, design, games, and photography.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <section className="writing-hero" aria-labelledby="writing-title">
        <p className="eyebrow">Writing</p>
        <h1 id="writing-title">Notes from projects, experiments, and everyday observations.</h1>
        <p>
          Longer essays and shorter notes will live here. I am working on the
          first piece now, so the archive is intentionally empty for the moment.
        </p>
      </section>

      <section className="archive" aria-labelledby="archive-title">
        <h2 className="sr-only" id="archive-title">
          All published writing
        </h2>
        <NoteList notes={notes} emptyContext="notes" />
      </section>
    </>
  );
}
