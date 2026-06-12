import { Reveal } from "@/components/reveal";

export function HomeTypeBanner() {
  return (
    <section className="type-banner" aria-labelledby="type-banner-title">
      <Reveal className="type-banner__content">
        <h2 id="type-banner-title">
          <span>Make</span>
          <b aria-hidden="true">-&gt;</b>
          <span>Observe</span>
          <em>Write</em>
        </h2>
      </Reveal>
    </section>
  );
}
