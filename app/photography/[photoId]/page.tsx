import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoCommentForm } from "@/components/photo-comment-form";
import { getApprovedComments, getPublishedPhoto } from "@/lib/photography";
import { siteConfig } from "@/site.config";

type PhotoPageProps = {
  params: Promise<{ photoId: string }>;
};

export const dynamic = "force-dynamic";

function formatDate(value: string | null) {
  if (!value) return "Undated";
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export async function generateMetadata({ params }: PhotoPageProps): Promise<Metadata> {
  const { photoId } = await params;
  const photo = await getPublishedPhoto(photoId);
  if (!photo) return {};

  return {
    title: photo.displayTitle,
    description: photo.displayCaption,
    alternates: { canonical: `${siteConfig.url}/photography/${photo.id}` },
    openGraph: {
      title: photo.displayTitle,
      description: photo.displayCaption,
      images: [{ url: photo.imageUrl, alt: photo.displayAlt }],
    },
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { photoId } = await params;
  const photo = await getPublishedPhoto(photoId);
  if (!photo) notFound();

  const comments = await getApprovedComments(photo.id);

  return (
    <article className="photo-detail-page">
      <header className="article-topline photo-detail-topline">
        <Link href="/photography">← Back to photography</Link>
        <span><i className="status-dot" aria-hidden="true" /> Published photograph</span>
      </header>

      <figure className="photo-detail-figure">
        <img src={photo.imageUrl} alt={photo.displayAlt} />
      </figure>

      <section className="photo-detail-copy" aria-labelledby="photo-title">
        <div>
          <p className="article-kicker">[ PHOTOGRAPH / LIGHTROOM ]</p>
          <h1 id="photo-title">{photo.displayTitle}</h1>
          <p>{photo.displayCaption}</p>
        </div>
        <aside className="article-meta" aria-label="Photo metadata">
          <p>IMAGE DATA</p>
          <dl>
            <div><dt>Date</dt><dd>{formatDate(photo.capture_date)}</dd></div>
            <div><dt>Camera</dt><dd>{photo.cameraLabel}</dd></div>
            <div><dt>Size</dt><dd>{photo.width && photo.height ? `${photo.width} × ${photo.height}` : "Lightroom"}</dd></div>
          </dl>
        </aside>
      </section>

      <section className="photo-comments" aria-labelledby="photo-comments-title">
        <div className="photo-comments__list">
          <p className="article-kicker">[ COMMENTS ]</p>
          <h2 id="photo-comments-title">Comments after review.</h2>
          {comments.length ? (
            <ol>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.display_name}</strong>
                  <p>{comment.body}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p>No approved comments yet.</p>
          )}
        </div>
        <PhotoCommentForm photoId={photo.id} />
      </section>
    </article>
  );
}
