import { NextResponse } from "next/server";
import { downloadLightroomRendition, getLightroomAlbumPhotos, hasLightroomConfig } from "@/lib/lightroom";
import { hasServiceSupabaseConfig, supabaseRest, uploadSupabaseObject } from "@/lib/supabase-rest";

export const runtime = "nodejs";

const ADMIN_SYNC_TOKEN = process.env.ADMIN_SYNC_TOKEN;
const STORAGE_BUCKET = "photography";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice("Bearer ".length) : "";

  if (!ADMIN_SYNC_TOKEN || token !== ADMIN_SYNC_TOKEN) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (!hasLightroomConfig() || !hasServiceSupabaseConfig()) {
    return NextResponse.json({ error: "Lightroom or Supabase sync is not configured." }, { status: 503 });
  }

  const url = new URL(request.url);
  const dryRun = url.searchParams.get("dryRun") === "true";
  const photos = await getLightroomAlbumPhotos();
  const synced: string[] = [];

  for (const [index, photo] of photos.entries()) {
    const extension = photo.renditionUrl.toLowerCase().includes(".webp") ? "webp" : "jpg";
    const storagePath = `${photo.lightroom_asset_id}.${extension}`;

    if (!dryRun) {
      const rendition = await downloadLightroomRendition(photo.renditionUrl);
      await uploadSupabaseObject(STORAGE_BUCKET, storagePath, rendition.bytes, rendition.contentType);
      await upsertPhoto({ ...photo, storage_path: storagePath, sort_order: index });
    }

    synced.push(photo.lightroom_asset_id);
  }

  return NextResponse.json({
    ok: true,
    dryRun,
    discovered: photos.length,
    synced: dryRun ? 0 : synced.length,
    assets: synced,
  });
}

async function upsertPhoto(photo: {
  lightroom_asset_id: string;
  title: string | null;
  caption: string | null;
  alt_text: string | null;
  capture_date: string | null;
  width: number | null;
  height: number | null;
  camera_make: string | null;
  camera_model: string | null;
  lens: string | null;
  metadata: Record<string, unknown>;
  storage_path: string;
  sort_order: number;
}) {
  await supabaseRest("photos?on_conflict=lightroom_asset_id", {
    method: "POST",
    serviceRole: true,
    prefer: "resolution=merge-duplicates",
    body: {
      ...photo,
      storage_bucket: STORAGE_BUCKET,
      published: true,
      synced_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  });
}
