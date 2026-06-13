import { HomeStats } from "@/components/home-stats";
import { HomeVisual } from "@/components/home-visual";

export function RecreateHomeHero({ publishedCount }: { publishedCount: number }) {
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <HomeVisual />
      <HomeStats publishedCount={publishedCount} />
    </section>
  );
}
