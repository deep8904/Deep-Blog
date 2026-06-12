import Link from "next/link";
import { ArticleRow } from "@/components/featured-article-band";
import type { NoteMeta } from "@/lib/notes";

type NoteListProps = {
  notes: NoteMeta[];
  emptyContext?: "home" | "notes";
};

export function NoteList({ notes, emptyContext = "notes" }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <div className={`empty-state empty-state--${emptyContext}`}>
        <div>
          <p className="section-label">Archive status</p>
          <h2>No published writing is available.</h2>
          <p>
            Drafts are kept private until they are ready.
          </p>
          {emptyContext === "notes" ? (
            <Link className="text-link" href="/">
              Back to home
            </Link>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <ol className="note-list">
      {notes.map((note, index) => (
        <li key={note.slug}>
          <ArticleRow note={note} index={index} />
        </li>
      ))}
    </ol>
  );
}
