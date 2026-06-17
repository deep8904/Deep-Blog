type LightroomAsset = {
  id?: string;
  asset_id?: string;
  title?: string;
  caption?: string;
  subtype?: string;
  created?: string;
  updated?: string;
  captureDate?: string;
  capture_date?: string;
  width?: number;
  height?: number;
  metadata?: Record<string, unknown>;
  _links?: Record<string, { href?: string }>;
};

type NormalizedLightroomPhoto = {
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
  renditionUrl: string;
};

const LIGHTROOM_API_BASE_URL = process.env.LIGHTROOM_API_BASE_URL ?? "https://image.adobe.io/lrService";
const LIGHTROOM_TOKEN_URL = process.env.LIGHTROOM_TOKEN_URL ?? "https://ims-na1.adobelogin.com/ims/token/v3";
const ADOBE_CLIENT_ID = process.env.ADOBE_CLIENT_ID;
const ADOBE_CLIENT_SECRET = process.env.ADOBE_CLIENT_SECRET;
const ADOBE_REFRESH_TOKEN = process.env.ADOBE_REFRESH_TOKEN;
const LIGHTROOM_ALBUM_ID = process.env.LIGHTROOM_ALBUM_ID;

export function hasLightroomConfig() {
  return Boolean(ADOBE_CLIENT_ID && ADOBE_CLIENT_SECRET && ADOBE_REFRESH_TOKEN && LIGHTROOM_ALBUM_ID);
}

export async function getLightroomAlbumPhotos() {
  if (!hasLightroomConfig()) {
    throw new Error("Missing Lightroom configuration");
  }

  const token = await getAdobeAccessToken();
  const assets = await getAlbumAssets(token);

  return assets
    .map(normalizeAsset)
    .filter((photo): photo is NormalizedLightroomPhoto => Boolean(photo?.lightroom_asset_id && photo.renditionUrl));
}

export async function downloadLightroomRendition(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Lightroom rendition download failed: ${response.status}`);
  }

  return {
    bytes: await response.arrayBuffer(),
    contentType: response.headers.get("content-type") ?? "image/jpeg",
  };
}

async function getAdobeAccessToken() {
  const response = await fetch(LIGHTROOM_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: ADOBE_CLIENT_ID ?? "",
      client_secret: ADOBE_CLIENT_SECRET ?? "",
      refresh_token: ADOBE_REFRESH_TOKEN ?? "",
    }),
  });

  if (!response.ok) {
    throw new Error(`Adobe token refresh failed: ${response.status}`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) throw new Error("Adobe token response did not include an access token");

  return data.access_token;
}

async function getAlbumAssets(token: string) {
  const url = `${LIGHTROOM_API_BASE_URL}/albums/${encodeURIComponent(LIGHTROOM_ALBUM_ID ?? "")}/assets`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "x-api-key": ADOBE_CLIENT_ID ?? "",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Lightroom album asset fetch failed: ${response.status}`);
  }

  const data = (await response.json()) as { resources?: LightroomAsset[]; assets?: LightroomAsset[] };
  return data.resources ?? data.assets ?? [];
}

function normalizeAsset(asset: LightroomAsset): NormalizedLightroomPhoto | null {
  const id = asset.id ?? asset.asset_id;
  if (!id) return null;

  const metadata = asset.metadata ?? {};
  const title = asset.title ?? stringMeta(metadata, "title");
  const caption = asset.caption ?? stringMeta(metadata, "caption") ?? stringMeta(metadata, "description");
  const captureDate = asset.captureDate ?? asset.capture_date ?? stringMeta(metadata, "captureDate") ?? null;
  const renditionUrl =
    asset._links?.rendition?.href ??
    asset._links?.download?.href ??
    asset._links?.self?.href ??
    stringMeta(metadata, "renditionUrl") ??
    "";

  return {
    lightroom_asset_id: id,
    title: title ?? null,
    caption: caption ?? null,
    alt_text: caption ?? title ?? null,
    capture_date: captureDate,
    width: asset.width ?? numberMeta(metadata, "width"),
    height: asset.height ?? numberMeta(metadata, "height"),
    camera_make: stringMeta(metadata, "cameraMake") ?? stringMeta(metadata, "make") ?? null,
    camera_model: stringMeta(metadata, "cameraModel") ?? stringMeta(metadata, "model") ?? null,
    lens: stringMeta(metadata, "lens") ?? null,
    metadata,
    renditionUrl,
  };
}

function stringMeta(metadata: Record<string, unknown>, key: string) {
  const value = metadata[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function numberMeta(metadata: Record<string, unknown>, key: string) {
  const value = metadata[key];
  return typeof value === "number" ? value : null;
}
