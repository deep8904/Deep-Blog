"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function PhotoCommentForm({ photoId }: { photoId: string }) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState("sending");
    setMessage("Sending your comment...");

    const response = await fetch("/api/photography/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        photoId,
        displayName: formData.get("displayName"),
        body: formData.get("body"),
        website: formData.get("website"),
      }),
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setFormState("sent");
      setMessage("Thanks. Your comment is waiting for review.");
      return;
    }

    const result = await response?.json().catch(() => null);
    setFormState("error");
    setMessage(result?.error ?? "Comment could not be sent right now.");
  }

  return (
    <form className="photo-comment-form" onSubmit={submitComment}>
      <div>
        <label htmlFor="comment-name">Name</label>
        <input id="comment-name" name="displayName" type="text" maxLength={80} required />
      </div>
      <div>
        <label htmlFor="comment-body">Comment</label>
        <textarea id="comment-body" name="body" rows={5} maxLength={1200} required />
      </div>
      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="comment-website">Website</label>
        <input id="comment-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="photo-comment-form__actions">
        <button className="primary-button" type="submit" disabled={formState === "sending"}>
          <span>{formState === "sending" ? "Sending" : "Send comment"}</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className={`photo-comment-form__status photo-comment-form__status--${formState}`} aria-live="polite">
          {message || "Comments appear after review."}
        </p>
      </div>
    </form>
  );
}
