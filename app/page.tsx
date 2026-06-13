import { ArchiveCallout } from "@/components/archive-callout";
import { HomeFeaturedSection } from "@/components/home-featured-section";
import { HomeIntroSection } from "@/components/home-intro-section";
import { HomeMarquee } from "@/components/home-marquee";
import { HomeSubjectsSection } from "@/components/home-subjects-section";
import { HomeTypeBanner } from "@/components/home-type-banner";
import { RecreateHomeHero } from "@/components/recreate-home-hero";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <RecreateHomeHero publishedCount={notes.length} />
      <HomeMarquee />
      <HomeTypeBanner />
      <HomeIntroSection />
      {latestNote ? <HomeFeaturedSection note={latestNote} /> : null}
      <HomeSubjectsSection />
      <ArchiveCallout count={notes.length} />
    </>
  );
}
