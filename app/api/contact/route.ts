import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "pateldeep8904@gmail.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Loose Thread <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const MAX_MESSAGE_LENGTH = 2000;
const requestLog = new Map<string, number[]>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "Please wait a moment before sending another note." }, { status: 429 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a name, email, and message." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = cleanText(payload.name);
  const email = cleanText(payload.email).toLowerCase();
  const message = cleanMessage(payload.message);
  const validationError = validateMessage(name, email, message);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Loose Thread contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: renderEmailHtml(name, email, message),
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Message could not be sent right now." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function cleanText(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function cleanMessage(value: unknown) {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").replace(/\n{4,}/g, "\n\n\n").trim() : "";
}

function validateMessage(name: string, email: string, message: string) {
  if (name.length < 2 || name.length > 80) return "Use your name, between 2 and 80 characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return "Use a valid email address.";
  if (message.length < 10) return "Write a little more before sending.";
  if (message.length > MAX_MESSAGE_LENGTH) return `Keep the message under ${MAX_MESSAGE_LENGTH} characters.`;
  return "";
}

function renderEmailHtml(name: string, email: string, message: string) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #191C21;">
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr style="border: 0; border-top: 1px solid #D1CFC7;" />
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recentRequests = (requestLog.get(clientIp) ?? []).filter((time) => time > windowStart);

  if (recentRequests.length >= 3) {
    requestLog.set(clientIp, recentRequests);
    return true;
  }

  requestLog.set(clientIp, [...recentRequests, now]);
  return false;
}
