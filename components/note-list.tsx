import Link from "next/link";
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
          <h2>The first post is still in progress.</h2>
          <p>
            When it is ready, it will appear here. I would rather publish
            something useful than fill the page with demonstration content.
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
          <Link href={`/notes/${note.slug}`}>
            <span className="note-list__index">{String(index + 1).padStart(2, "0")}</span>
            <span className="note-list__body">
              <span className="note-list__topics">{note.topics.join(" · ")}</span>
              <strong>{note.title}</strong>
              <span>{note.description}</span>
            </span>
            <time dateTime={note.publishedAt}>
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(note.publishedAt))}
            </time>
          </Link>
        </li>
      ))}
    </ol>
  );
}
