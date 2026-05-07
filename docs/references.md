# Reference Research — Premium Game Studio + Awwwards 3D / Games

*Date: 2026-05-07. Sources: WebFetch (where the host allowed scraping) + visible structural notes. Hoyoverse and parts of Larian returned 403 / blocked content; those entries are flagged accordingly.*

---

## Hoyoverse — `hoyoverse.com`

⚠️ **Both fetches returned blocked / empty content.** The host appears to gate against unauthenticated scrapers. Notes below are based on prior, openly documented patterns of the site (verifiable manually) — **treat as observational, not freshly fetched**.

- **Hero treatment**: Full-bleed cinematic key art rotator (Genshin / Honkai / ZZZ), each slide is a near-static painted illustration with subtle parallax dust / light particles, not video.
- **Scroll**: Section-snap with deliberate easing (~700–900 ms). Each game IP gets its own dedicated panel with bespoke painted backdrop + curated character render.
- **Typography**: Custom display face for IP titles (often calligraphic/ornamental for Genshin; cleaner geometric for ZZZ); body in a clean humanist sans (Source Han / Inter / Mihoyo's own).
- **Motion**: Painterly. Particles, gentle camera drift, hover scaling on cards. No "kinetic" or terminal-style UI — feels closer to a film studio reel.
- **Palette**: Hero rotator drives palette per IP — purple/teal (Genshin), neon yellow/pink (ZZZ), high-contrast blue (Honkai). Studio chrome is mostly neutral cool grays + white.
- **What to borrow**: (1) IP-driven color shifts per section that feel curated, not random; (2) painted-not-photo hero style as a quality differentiator; (3) restrained motion budget — each effect is small but pixel-perfect.

## Kojima Productions — `kojimaproductions.jp`

- **Hero**: Full-width, single dominant cinematic image (Death Stranding 2 cover). Device-specific image swaps. Almost still — the prestige comes from photographic quality, not motion.
- **Scroll**: Long, modular, calm. Card-based news/products. Generous whitespace.
- **Typography**: Bold aspirational headlines ("PUSHING THE BOUNDARIES OF INNOVATION") + minimal body in neutral sans.
- **Palette**: Dark/light toggle, predominantly dark backgrounds with the cinematic imagery doing the color work.
- **Navigation**: Strict eight-item top bar (HOME / NEWS / PRODUCTS / ANIMATION / CAREERS / COMPANY / STORE / PRESS) with multi-language switcher.
- **What to borrow**: (1) restraint — single great image > flashy motion; (2) auteur framing ("From Sapiens to Ludens") elevates studio above its products; (3) careers visible from main nav signals scale; (4) modular news cards age well.

## Larian Studios — `larian.com`

⚠️ **Direct fetch returned 403.** Notes here are based on publicly known site structure.

- **Hero**: Strong central illustrated key art (Baldur's Gate 3 boxshot / characters), with parallax depth and slow camera-on-still pan.
- **Scroll**: Storytelling sections — quotes from press, awards mosaic, dev-diary previews, then a "join us" / careers push.
- **Typography**: Display uses fantasy-edged custom; body in a strong humanist sans.
- **Palette**: Dark with a single dominant warm accent (gold / firelight) — does for Larian what red could do for RedPad.
- **What to borrow**: (1) press-quote wall as social proof; (2) "we make our own games, not your games" tone; (3) awards counters ("200+ awards") used as conversion devices.

## Riot Games — `riotgames.com`

- **Hero**: Patch-driven banner (currently "Patch 7.5: Zoe") — shows the studio is a living, shipping operation.
- **Layout**: Card-based portfolio grid. **Multiple flagship IPs treated as equal** (LoL, VALORANT, TFT, LoR, Wild Rift, 2XKO, Riftbound) — no single IP dominates.
- **Scroll**: Horizontal carousels for IP browsing.
- **Typography**: Custom Riot display face + neo-grotesk body.
- **Palette**: Dark theme; each game's card carries its own color identity inside a unified frame.
- **What to borrow**: (1) "what's shipping right now" banner format (use for Tencent Cloud partnership); (2) consistent platform badge system; (3) careers prominent. *(Note: Riot's portfolio-as-equal-tiles pattern is not adopted on the home — RedPad's verified lineup is single-flagship Dustland + a Wartide Worlds roadmap entry on the `/games` overview page.)*

## Awwwards — 3D Category (recent SOTD, May 2026)

| Site | URL | Note |
|---|---|---|
| ASTRODITHER | astrodither.robertborghesi.is | SOTD 2026-05-05 + Developer Award. Interactive 3D portfolio, "immersive visual narratives". |
| Where Worlds Take Shape | paodao.fr | SOTD 2026-05-03 + Developer Award. Strong world-building 3D demonstration. |
| Razorpay Sprint 26 | razorpay.com/sprint/26 | "Immersive and visually stunning". Editorial scroll-storytelling for a corporate event. |
| Nube | espaciolanube.com | Bold interactive 3D elements. |
| La Revoltosa | larevoltosa.es | Immersive 3D interactions. |
| Floema | floema.com/en | Honorable Mention 2026-04-26. Captivating 3D visuals. |
| Sidewave | sidewave.it | Interactive 3D engagement. |
| BICIDEA | biccamera.com/bc/c/bicidea | Immersive 3D product visualization. |

**Lessons (synthesized)**: SOTD-tier 3D in 2026 favors (a) **scroll-driven 3D scenes** rather than free-roam, (b) **glassy / refractive materials** + soft volumetric light, (c) **deliberate, finite 3D moments** anchoring otherwise-clean editorial layouts, (d) **typography as a co-star** — strong serif or display pairings cut through the 3D, (e) **load-time discipline** — most leverage compressed glTF + Draco + selective lazy-loading.

## Awwwards — Games Category (recent)

| Site | URL | Note |
|---|---|---|
| T11 | t11.com | SOTD 2026-05-06. (Listed without thumb description.) |
| Looking for Parking | lookingforparkingthegame.com | Open for voting — small-game charm. |
| 5051 — Punk Band | band5051.com | Music/entertainment crossover. |
| Critter Spin | critterspin.com | Voting phase. |
| Where Worlds Take Shape | paodao.fr | SOTD 2026-05-03 — also crosses into 3D. |

**Lessons**: Awwwards-tier "games" entries are split between **single-game promos** (which win on art direction + theme cohesion) and **studio sites** (which win on editorial discipline + portfolio gravity). RedPad sits **closer to the first bucket than originally scoped**: Dustland is the verified flagship, with Wartide Worlds as a roadmap mention. The win condition is editorial cohesion across Dustland / Wartide / Tencent Cloud partnership / Studio + a single signature 3D moment, not a maximalist 3D playground.

---

## Synthesis — what we're stealing

1. **Hoyoverse**: painted hero quality + per-section curated palette shifts.
2. **Kojima**: single-image restraint, auteur tone, modular news.
3. **Larian**: press-quote wall, awards counters, dominant warm-accent palette.
4. **Riot**: equal-weight portfolio cards, "shipping now" banner format.
5. **Awwwards 3D**: deliberate finite 3D moments anchoring editorial layouts; glassy materials; typography as co-star.
6. **Awwwards Games**: editorial discipline > 3D maximalism.

These five lessons plus the brand's own studio voice ("do what others are afraid of") feed the three directions in `directions/`.
