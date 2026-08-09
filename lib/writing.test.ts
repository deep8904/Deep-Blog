import { describe, expect, it } from "vitest";
import { getAllPublishedWriting } from "@/lib/writing";

describe("published writing aggregation", () => {
  it("combines legacy notes and pipeline articles newest first", () => {
    const writing = getAllPublishedWriting();
    const publishedTimes = writing.map((item) => new Date(item.publishedAt).getTime());

    expect(writing).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          kind: "article",
          href: "/blog/github-copilot-usage-metrics-agent-app-activity",
        }),
        expect.objectContaining({
          kind: "note",
          href: "/notes/three-days-one-castle-next-wave",
        }),
        expect.objectContaining({
          kind: "note",
          href: "/notes/why-gta-rps-best-screens-are-a-design-masterclass",
        }),
      ]),
    );
    expect(publishedTimes).toEqual([...publishedTimes].sort((a, b) => b - a));
  });
});
