import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { getPublishedPhotos } from "@/lib/photography";

export const metadata: Metadata = {
  title: "Photography",
  description: "A Lightroom-synced photography showcase by Deep Chadamiya.",
};

export const dynamic = "force-dynamic";

function formatDate(value: string | null) {
  if (!value) return "Undated";
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(value));
}

export default async function PhotographyPage() {
  const photos = await getPublishedPhotos();
  const count = String(photos.length).padStart(2, "0");

  return (
    <div className="inner-page photography-page">
      <section className="photography-hero" aria-labelledby="photography-title">
        <div className="photography-section-inner">
          <div className="section-label photography-label"><span>PH</span><p>LIGHTROOM SHOWCASE</p></div>
          <div className="photography-hero__grid">
            <h1 id="photography-title">
              <span className="line"><span>Photographs from</span></span>
              <span className="line"><span>the looking practice.</span></span>
            </h1>
            <div className="photography-hero__meta">
              <span>SYNCED</span>
              <strong>{count}</strong>
              <p>Images are pulled from a Lightroom album after I choose what is ready to live here.</p>
            </div>
          </div>
        </div>
      </section>

      {photos.length ? (
        <section className="photo-grid-section" aria-labelledby="photo-grid-title">
          <Reveal>
            <div className="writing-list-heading">
              <p id="photo-grid-title">[ PUBLISHED PHOTOGRAPHS ]</p>
              <span>{count} TOTAL</span>
            </div>
            <div className="photo-grid">
              {photos.map((photo, index) => (
                <Link className="photo-card" href={`/photography/${photo.id}`} key={photo.id}>
                  <figure>
                    <img src={photo.imageUrl} alt={photo.displayAlt} loading={index < 3 ? "eager" : "lazy"} />
                    <figcaption>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{photo.displayTitle}</strong>
                        <p>{formatDate(photo.capture_date)} / {photo.cameraLabel}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="photography-empty" aria-labelledby="photography-empty-title">
          <div className="photography-section-inner">
            <p>[ AWAITING LIGHTROOM SYNC ]</p>
            <h2 id="photography-empty-title">No photographs are published yet.</h2>
            <p>Once a Lightroom album is connected and synced, selected photographs will appear here with captions and moderated comments.</p>
          </div>
        </section>
      )}
    </div>
  );
}
