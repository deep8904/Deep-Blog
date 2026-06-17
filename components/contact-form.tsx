"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function submitContactForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormState("sending");
    setStatusMessage("Sending your note...");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        website: formData.get("website"),
      }),
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setFormState("sent");
      setStatusMessage("Thanks. Your note was sent.");
      return;
    }

    const result = await response?.json().catch(() => null);
    setFormState("error");
    setStatusMessage(result?.error ?? "Something went wrong. Please try again.");
  }

  return (
    <form className="contact-form" onSubmit={submitContactForm}>
      <div className="contact-form__field">
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required />
      </div>

      <div className="contact-form__field contact-form__field--wide">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" rows={7} minLength={10} maxLength={2000} required />
      </div>

      <div className="contact-form__trap" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="contact-form__actions">
        <button className="primary-button" type="submit" disabled={formState === "sending"}>
          <span>{formState === "sending" ? "Sending" : "Send note"}</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className={`contact-form__status contact-form__status--${formState}`} aria-live="polite">
          {statusMessage || "I will read it directly in email."}
        </p>
      </div>
    </form>
  );
}
