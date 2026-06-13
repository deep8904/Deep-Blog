import { HomeFeaturedCard } from "@/components/home-featured-card";
import { HomeIntroSection } from "@/components/home-intro-section";
import { RecreateHomeHero } from "@/components/recreate-home-hero";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes();
  const latestNote = notes[0];

  return (
    <>
      <RecreateHomeHero publishedCount={notes.length} />
      {latestNote ? <HomeFeaturedCard note={latestNote} /> : null}
      <HomeIntroSection />
    </>
  );
}
