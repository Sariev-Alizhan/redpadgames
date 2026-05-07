// News articles. Top of the list = most recent. The first item that has
// `featured: true` is highlighted on the home news teaser.

export type NewsCategory = "Studio" | "Game" | "Partnership" | "Press";

export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date — used for sort + display. */
  date: string;
  category: NewsCategory;
  cover: string;
  /** Full article body (markdown-style paragraphs separated by blank lines). */
  body: string;
  /** Optional: signed dedication / personal note rendered after the body. */
  dedication?: { from: string; to: string; message: string };
  featured?: boolean;
}

export const news: NewsArticle[] = [
  {
    slug: "redpad-tencent-cloud-partnership",
    title: "RedPad Games × Tencent Cloud — Strategic Partnership Signed in Dubai",
    excerpt:
      "May 7, 2026 — RedPad Games and Tencent Cloud sign a long-term cloud-infrastructure partnership at a ceremony in Dubai. The deal extends Dustland's reach across APAC and MENA and underpins the studio's next slate.",
    date: "2026-05-07",
    category: "Partnership",
    cover: "/news/tencent-signing.jpg",
    featured: true,
    body: `Dubai, UAE — at 12:00 PM local time on May 7, 2026, RedPad Games AG and Tencent Cloud counterparts signed a strategic cloud-infrastructure partnership at an Agreement Signing Ceremony in Dubai. The agreement secures regional capacity across APAC and MENA for Dustland's live operations, the Wartide Worlds development clusters, and the RPGC marketplace.

For RedPad, the partnership is the largest infrastructure step since the studio's incorporation in Zurich in 2020. It joins existing peer infrastructure relationships with AWS and brings the studio's cloud footprint to four production regions.

For players, the practical effect is lower latency in the regions where Dustland's player base is growing fastest — and the headroom to scale to a full MMO when the season-three feature set ships in winter 2026.

"Tencent Cloud is the right partner for the next chapter," CEO Vildan Fazylov said. "Their reach in the regions we want to grow is unmatched, and the technical bench they're putting on Dustland matches the ambition of the title."

This is a cloud-services agreement; it is not a publishing or investment deal. RedPad Games remains independently owned and self-published.`,
    dedication: {
      from: "Alizhan Sariyev",
      to: "Vildan Fazylov",
      message:
        "Поздравляю с подписанием. Это большой шаг для индустрии в нашем регионе и для всей команды RedPad. — Congratulations on the signing. A big step for the studio and the region.",
    },
  },
  {
    slug: "dustland-winter-2026-roadmap",
    title: "Dustland — Winter 2026 Roadmap",
    excerpt:
      "New RPG layer, recurring in-game events, and a major map expansion. The full third-season feature set, dated.",
    date: "2026-04-01",
    category: "Game",
    cover: "/games/dustland/gameplay-3.jpg",
    body: `The third season of Dustland lands this winter. Three pillars: a deep RPG layer (talents, persistent character progression, faction reputation), recurring in-game events that rotate weekly, and a major map expansion north into the cooled-out Drylands corridor.

Co-op missions added in summer 2025 stay; the new RPG layer composes on top. Existing characters carry over.

Closed test for the new content opens in early November. Apply via dustlandbeta.redpad.games.`,
  },
  {
    slug: "meet-the-founders-vildan-fazylov",
    title: "Meet the Visionary Innovators Behind RedPad — Vildan Fazylov",
    excerpt:
      "RedPad's founders set off on a strategic goal to bring AAA-quality multiplayer worlds to gamers worldwide. CEO Vildan Fazylov on the studio's first decade.",
    date: "2026-03-12",
    category: "Studio",
    cover: "/studio/workspace.jpg",
    body: `Vildan Fazylov is RedPad Games' founder and CEO — a programming engineer with credits on AAA titles including EVE Online, who conceived the studio's first slate in 2017. He launched Wartide Worlds on Kickstarter in 2019 and now leads RedPad's AAA-MMO ambitions including Dustland.

He plays both narrative keeper and the technical / business architect bridging programming, B2B partnerships, and game design.

"We don't optimize for the calmest path. We optimize for the worlds we'd want to play in ten years."

Co-founder and General Product Officer Yevgeniy Neverov joined Vildan full-time in 2019 to build Wartide. Ten-plus years across IT and marketing — account management, project management, and cross-industry product roles from beauty to fitness to automotive — now applied to RedPad's full slate.

The studio counts seventy specialists across Zurich (HQ, incorporated 2020), Almaty (development), Delaware (US operations), and Grand Cayman (marketplace operations).`,
  },
  {
    slug: "dustland-server-load-test",
    title: "Dustland Server Stress Test — 40,000+ Players Across the Wasteland",
    excerpt:
      "RedPad's first public Dustland stress test in 2023 brought more than forty thousand participants under load. Results informed every server architecture decision since.",
    date: "2026-02-04",
    category: "Game",
    cover: "/games/dustland/gameplay-1.jpg",
    body: `RedPad Games' first publicly announced Dustland server-load test ran on 2 February 2023 and drew 40,000+ participants. The test exercised server stability, world-state synchronization, vehicle physics, and combat under sustained concurrent load.

Findings directly shaped the multi-region cloud architecture that runs Dustland in early access today — and informed the partnership and capacity planning that the studio is announcing this week.

Closed-test internal metrics from the next-stage round (D1 retention, D3 retention, CPA) underwrote the season-three roadmap and remain proprietary to the studio.`,
  },
];

// `news` is non-empty by construction, so the find/fallback is always defined
// at runtime. The non-null assertion keeps consumers strict-typed.
export const featuredArticle: NewsArticle =
  news.find((n) => n.featured) ?? news[0]!;
