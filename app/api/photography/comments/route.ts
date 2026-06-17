import { NextResponse } from "next/server";
import { hasPublicSupabaseConfig, supabaseRest } from "@/lib/supabase-rest";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 80;
const MAX_COMMENT_LENGTH = 1200;
const requestLog = new Map<string, number[]>();

type CommentPayload = {
  photoId?: unknown;
  displayName?: unknown;
  body?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "Please wait a moment before sending another comment." }, { status: 429 });
  }

  let payload: CommentPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Send a name and comment." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const photoId = cleanText(payload.photoId);
  const displayName = cleanText(payload.displayName);
  const body = cleanComment(payload.body);
  const validationError = validateComment(photoId, displayName, body);

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  if (!hasPublicSupabaseConfig()) {
    return NextResponse.json({ error: "Comments are not configured yet." }, { status: 503 });
  }

  await supabaseRest("photo_comments", {
    method: "POST",
    body: {
      photo_id: photoId,
      display_name: displayName,
      body,
      status: "pending",
    },
  });

  return NextResponse.json({ ok: true });
}

function cleanText(value: unknown) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function cleanComment(value: unknown) {
  return typeof value === "string" ? value.replace(/\r\n/g, "\n").replace(/\n{4,}/g, "\n\n\n").trim() : "";
}

function validateComment(photoId: string, displayName: string, body: string) {
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(photoId)) {
    return "Choose a real photograph before commenting.";
  }
  if (displayName.length < 1 || displayName.length > MAX_NAME_LENGTH) return "Use a display name under 80 characters.";
  if (body.length < 3) return "Write a little more before sending.";
  if (body.length > MAX_COMMENT_LENGTH) return `Keep the comment under ${MAX_COMMENT_LENGTH} characters.`;
  return "";
}

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const windowStart = now - 60_000;
  const recentRequests = (requestLog.get(clientIp) ?? []).filter((time) => time > windowStart);

  if (recentRequests.length >= 5) {
    requestLog.set(clientIp, recentRequests);
    return true;
  }

  requestLog.set(clientIp, [...recentRequests, now]);
  return false;
}
