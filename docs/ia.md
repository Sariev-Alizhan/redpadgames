# Information Architecture — RedPad Games

*Direction 02 — Sovereign Studio. Date: 2026-05-07.*

## Site map

```
/                       Home — single long-scroll narrative
/games                  Overview of the portfolio (Dustland flagship + Wartide Worlds roadmap)
/games/dustland         Flagship deep-dive
/studio                 About, team, locations, corporate structure
/careers                Open roles + culture
/press                  Press kit, news, contact
/press/tencent-cloud-partnership-2026-05  Cloud partnership press release
```

The Tencent Cloud partnership announcement is **not a separate page** — it owns a sticky banner across all routes (until the press cycle ends, ~2 weeks) and gets a dedicated press-release card under `/press`.

## Routing notes

- All marketing pages live under the `(marketing)` route group so future authenticated/dashboard routes can live in a sibling `(app)` group without colliding.
- No nested `layout.tsx` under `(marketing)` for now — sub-pages use the root layout. A `(marketing)/layout.tsx` will be added in Stage 4 for shared header/footer chrome.
- Static rendering for everything in v1 (no `searchParams`, no per-request data). Press / news will move to MDX in `src/content/` later.

## Home page — sections in scroll order

| # | ID | Section | Purpose | Scroll behavior | 3D | Primary content source |
|---|---|---|---|---|---|---|
| 00 | `announcement` | Tencent Cloud banner | Convert press / partner traffic instantly. | **Sticky top.** Stays visible across the whole scroll; collapses to a thin bar after 8 scrolled vh. | No | Tencent Cloud press release (awaiting joint comms) |
| 01 | `hero` | Mission Control | Establish studio gravity in 6 s — globe with 3 city nodes + red arcs, headline, dual CTA. | Pinned for first viewport; camera dollies + globe rotates as scroll progresses 0–8 %. | **Yes** — globe scene #1 in `SharedCanvas` | `home-sections.ts` + Direction 02 hero generations |
| 02 | `studio-statement` | We are RedPad | Studio claim + KPIs (founded 2017, 70 people, 3 hubs, 1 game live). | Reveals on scroll, KPIs roll up odometer-style on enter. | No (DOM only) | Brief.md → Company Facts |
| 03 | `dustland` | Games — Dustland | Single-flagship deep-dive, cinematic-apocalypse mood pocket. Status pills, three USP pillars, Steam CTA. | Camera continues dollying; ShardCluster scene replaces globe at same on-screen position. | **Yes** — `dustland-inset` scene in `SharedCanvas` | `/games/dustland` data + Higgsfield Direction 01 video loop |
| 04 | `partners` | Partners | Two cloud-infra pillars (AWS + Tencent Cloud) + standard logo wall. Neutral framing, peer-to-peer infra. | Palette inversion: pearl-on-obsidian breath beat between dark sections. | No | Slide 25 partners + Tencent Cloud signing 2026-05-07 |
| 05 | `team` | The Team | Photo collage, locations, leadership pedigree. | Parallax photo grid; map of cities with red arc-draw. | Lightweight (2D SVG arcs, optional WebGL layer) | Brief.md → Team |
| 06 | `news` | News & Devlogs | Latest 3 posts. | Card grid, no scroll choreography. | No | MDX (later) — Dustland EA, Tencent Cloud, latest devlog |
| 07 | `careers` | Careers preview | Convert recruits. CTA → `/careers`. | Static panel. | No | Awaiting client roles feed |
| 08 | `footer` | Contact, socials, legal | Last conversion surface. | Static. | No | Brief.md → Contact |

## 3D budget per section

Total triangle budget ≤ 60 K across the page. Allocation:

- Hero globe: ~30 K (geometry, line arcs, city pin meshes)
- Dustland inset (ShardCluster + ParticleField): ~5 K, mounted only while Dustland section is in view.
- Team-section arc map: 2D SVG primary, optional WebGL upgrade (no triangle cost in fallback).
- Particles: ≤ 2,000 instanced sprites, used as ambient atmosphere.

## Single shared canvas, scroll-driven scene swap

`SharedCanvas` is mounted once in `app/layout.tsx`, fixed behind the DOM. DOM sections own scroll position, and a scroll-progress signal (Lenis → `ScrollTrigger`) tells the canvas which **scene primitive** to render. Logical scenes:

- `hero-globe` (sections 01 + 02 — camera dollies through both)
- `dustland-inset` (section 03)
- `team-arcs` (section 05, optional)
- `studio-globe` (`/studio` page only)
- `idle` (sections 04, 06, 07, 08)

Stage 5 implements scene swap via a small state machine driven by `IntersectionObserver` on each section's outer container, plus a Suspense boundary per scene.

## Per-page (sub-page) IA stubs

### `/games`
H1: "Games". Content: Dustland flagship card (status badge, EA price, Steam CTA) + Wartide Worlds roadmap entry (Q3 2026 target). Single-flagship lineup; do not imply additional games beyond what's verifiable in source materials.

### `/games/dustland`
Hero key art (Direction 02 hero-3 candidate or fresh Soul Cinema generation). Sections: World, Gameplay, Factions, Roadmap, Press wall (Massively OP, etc.), Steam CTA, system requirements, languages.

### `/studio`
Founder story (Vildan Fazylov), leadership board, corporate-structure globe (separate from hero — denser data viz), pedigree logos, manifesto pull-quote ("do what others are afraid of"), 4-city map.

### `/careers`
Open roles list (data source TBD). City filter, role filter. Apply CTA per role.

### `/press`
Pinned: Tencent Cloud partnership press release at `/press/tencent-cloud-partnership-2026-05`. Below: news archive. Side panel: downloadable press kit (logos, screenshots, fact sheet), media contact (`ceo@redpad.games`, Telegram).

## Mobile IA notes

- Sticky announcement bar collapses to a one-line marquee on small screens.
- Hero globe replaced with a 2D SVG world map; red arcs animate on intersection.
- Dustland 3D inset replaced with poster image; video loop still plays.
- Section snap-scroll disabled on mobile to favor native scroll feel.

## SEO

- One canonical metadata base in `src/lib/seo.ts`. Per-page `generateMetadata` adds title + description + OG image.
- OG images per direction generated via `next/og` route handler in Stage 4 — for now, a static fallback at `/opengraph-image.png` (TBD).

## Open IA questions (depend on `docs/open-questions.md`)

- Tencent Cloud press cycle window — controls how long the sticky announcement stays (currently 14 days, expires 2026-05-21).
- Vacancies feed — `/careers` cannot ship without it.
- Press kit — `/press` cannot ship without it.
