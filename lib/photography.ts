import { getPublicStorageUrl, hasPublicSupabaseConfig, supabaseRest } from "@/lib/supabase-rest";

export type Photo = {
  id: string;
  lightroom_asset_id: string;
  title: string | null;
  caption: string | null;
  alt_text: string | null;
  capture_date: string | null;
  width: number | null;
  height: number | null;
  dominant_color: string | null;
  camera_make: string | null;
  camera_model: string | null;
  lens: string | null;
  metadata: Record<string, unknown>;
  storage_bucket: string;
  storage_path: string;
  sort_order: number;
  published: boolean;
  synced_at: string;
  created_at: string;
  updated_at: string;
};

export type PhotoComment = {
  id: string;
  photo_id: string;
  display_name: string;
  body: string;
  status: "approved";
  created_at: string;
};

export type GalleryPhoto = Photo & {
  imageUrl: string;
  displayTitle: string;
  displayCaption: string;
  displayAlt: string;
  cameraLabel: string;
};

const photoSelect =
  "id,lightroom_asset_id,title,caption,alt_text,capture_date,width,height,dominant_color,camera_make,camera_model,lens,metadata,storage_bucket,storage_path,sort_order,published,synced_at,created_at,updated_at";

export async function getPublishedPhotos(): Promise<GalleryPhoto[]> {
  if (!hasPublicSupabaseConfig()) return [];

  const rows = await supabaseRest<Photo[]>(
    `photos?select=${photoSelect}&published=eq.true&order=sort_order.asc,capture_date.desc.nullslast,created_at.desc`,
  );

  return rows.map(formatPhoto);
}

export async function getPublishedPhoto(id: string): Promise<GalleryPhoto | null> {
  if (!hasPublicSupabaseConfig()) return null;

  const rows = await supabaseRest<Photo[]>(
    `photos?select=${photoSelect}&id=eq.${encodeURIComponent(id)}&published=eq.true&limit=1`,
  );

  return rows[0] ? formatPhoto(rows[0]) : null;
}

export async function getApprovedComments(photoId: string): Promise<PhotoComment[]> {
  if (!hasPublicSupabaseConfig()) return [];

  return supabaseRest<PhotoComment[]>(
    `photo_comments?select=id,photo_id,display_name,body,status,created_at&photo_id=eq.${encodeURIComponent(
      photoId,
    )}&status=eq.approved&order=created_at.desc`,
  );
}

function formatPhoto(photo: Photo): GalleryPhoto {
  const title = photo.title?.trim() || "Untitled photograph";
  const caption = photo.caption?.trim() || "A photograph from Deep's Lightroom archive.";
  const cameraParts = [photo.camera_make, photo.camera_model, photo.lens].filter(Boolean);

  return {
    ...photo,
    imageUrl: getPublicStorageUrl(photo.storage_bucket, photo.storage_path),
    displayTitle: title,
    displayCaption: caption,
    displayAlt: photo.alt_text?.trim() || caption,
    cameraLabel: cameraParts.length ? cameraParts.join(" / ") : "Lightroom",
  };
}
