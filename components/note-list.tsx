import Link from "next/link";
import type { NoteMeta } from "@/lib/notes";

export function NoteList({ notes }: { notes: NoteMeta[] }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <p className="kicker">Archive status</p>
          <h2>Nothing here yet.</h2>
          <p>
            I’m working on the first post now. When it is ready, it will appear
            here. Until then, this space stays honest.
          </p>
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
