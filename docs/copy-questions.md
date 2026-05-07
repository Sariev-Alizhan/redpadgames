# Copy Questions — items in the page that need final text from the client

Tracks every "to confirm" surface as it gets shipped. Pair with `docs/open-questions.md` (the broader content/asset gaps).

---

## Section 5a — Announcement bar (Tencent Cloud)

| # | Surface | Current placeholder | Needed |
|---|---|---|---|
| 1 | Sticky bar headline | "RedPad Games × Tencent Cloud — strategic cloud partnership, signed May 7, 2026, Dubai." | Working draft: *"RedPad Games × Tencent Cloud — strategic cloud partnership, signed in Dubai."* Still pending official joint-comms wording. Tone is matter-of-fact (no exclamation marks, not celebratory) because this is a cloud-infrastructure deal — not publishing or investment. |
| 2 | "Read more" target | Smooth-scrolls to `#partners` on the home page; also a "Read full release →" anchor links to `/press/tencent-cloud-partnership-2026-05`. | Confirm both stay, or collapse to one once the partners section is fully built. |
| 3 | Press cycle window | Bar is `dismissible` AND auto-hides after `2026-05-21T00:00Z`. | Storage key `rp-tencent-cloud-2026-05-07`. Two weeks is the working assumption. |
| 4 | Logos on the partners panel | RedPad Games logo: **confirmed** at `/assets/source/logo/redpad_logo.jpeg` (663 KB JPEG; vector still TBD per `open-questions.md` #4). Tencent Cloud logo: **pending vector** from Tencent Cloud comms. | Do **not** extract a Tencent Cloud logo from any signing-ceremony invitation or marketing image — wait for an official-channel asset. |

---

## Section 5b — Hero

| # | Surface | Current placeholder | Needed |
|---|---|---|---|
| 5 | Hero headline | *"Do what others are afraid of."* — pulled verbatim from LinkedIn tagline (brief.md voice quote #1, marked "hero candidate"). | Confirm this stays the hero. If a sharper studio-positioning line emerges from comms, swap. |
| 6 | Hero subhead | *"A 70-strong studio across Almaty, Zurich and the UAE. We build multiplayer worlds — Dustland is the first."* — composed from brief Company Facts. | Approve the wording. Especially: confirm we describe the UAE presence as a "cluster"/"studio across" vs. a fully separate entity (slide 4 lists CH/KZ/DE/KY only — see open-questions #10). |
| 7 | Hero pre-headline pill | "Sovereign Studio · Est. 2017" | Approve. Could become "Founded 2017 · Almaty" or whatever the comms team prefers. |
| 8 | Operational footprint row | HQ Zurich · DEV Almaty · CLUSTER UAE · TEAM 70+ | Confirm the three-city framing on the hero matches what we want partners to read first (the legal 4-entity story shows up later on `/studio`). |
| 9 | Globe pin set | 3 pins: Almaty, Zurich, **Dubai** (`25.2048°N, 55.2708°E`). | **Closed 2026-05-07** — UAE pin confirmed as Dubai (signing-ceremony location). See "Closed" section below. |
| 10 | Mobile fallback image | Direction 02 hero-1 (mission-control globe Higgsfield generation). | Approve as the locked mobile hero image, or sign off on a re-roll. |
| 11 | Primary CTA target | "Explore Dustland" → `/games/dustland`. | Confirmed per Stage 5b spec; deferred external Steam link to that subpage. |
| 12 | Secondary CTA target | "Partner with us" → `/press`. | Confirm; could become `/contact` or a partnership form once the press page is shaped. |

---

## Section 5a/5b adjustments — applied 2026-05-07

| # | Change | Status |
|---|---|---|
| Adjusted #2 | Bar still smooth-scrolls to `#partners`. A "Read full release →" anchor sits on the partners stub linking to the press release. *Original slug `/press/redpad-tencent-partnership` was renamed to `/press/tencent-cloud-partnership-2026-05` on the Tencent-Cloud factual-correction pass; old route deleted.* | **Applied.** Final release copy still depends on item #1 (Tencent Cloud comms). |
| Adjusted #3 | Bar now auto-hides after `2026-05-21T00:00Z` regardless of dismissal state, in addition to the existing dismiss button. | **Applied.** |
| Adjusted #7 | Pre-headline pill changed to "Independent studio · Est. 2017". | **Applied.** |
| Adjusted #8 | Operational row now reads "Zurich HQ · Almaty Dev · UAE Cluster · 70+ specialists" (parallel structure). | **Applied.** |
| Adjusted #6 | Subhead reordered: "A 70-strong studio with HQ in Zurich, dev hub in Almaty, and cluster in the UAE. We build multiplayer worlds — Dustland leads our slate." | **Applied.** Final approval still on RedPad marketing. |

---

## Section 5c — We are RedPad

| # | Surface | Current placeholder | Needed |
|---|---|---|---|
| 13 | Pull quote | *"For us, gamers are not clients. They are our friends — our community."* — adapted from brief voice quote #3 (cleaned for grammar). | Confirm wording. The original site copy was "For us gamer ≠ clients. They are our friends, our community." — the cleaned version is a minor edit, not a meaning change. |
| 14 | Studio claim body | *"Founded 2017. Three operational hubs, one studio. Crews include veterans of EVE Online, World of Warcraft, Metro 2033, S.T.A.L.K.E.R., and World of Tanks."* | Confirm pedigree titles list (Slide 6 of the deck). Stock list: EVE / WoW / CoD / Metro / S.T.A.L.K.E.R. / WoT — we dropped Call of Duty MW3 to four titles for rhythm; reinstate if marketing wants. |
| 15 | Stat 1 | "9 Years · Since 2017" — calendar year math, will become wrong after 2026-12-31. | Hardcoded today; will need to refresh annually. Could be moved to a `currentYear - 2017` runtime calc. |
| 16 | Stat 2 | "70+ Specialists · And counting" | Confirm "70+". LinkedIn About says ~70 professionals; pitch deck Slide 6 also says 70. |
| 17 | Stat 3 | "3 Hubs · Zurich · Almaty · UAE" | Confirm whether to count 3 hubs (matching hero framing) or 4 (adding the Delaware/Cayman legal entities for transparency). Currently using 3 to match Stage 5b. |
| 18 | Stat 4 | "1 Game live · Dustland on Steam" | Confirm framing. Alternatives considered: "1 shipped, 1 in development" (counts Wartide Worlds, Q3 2026), or "13.6K beta participants" (more impressive number, pulled from brief Slide 11). |

---

## Closed

| # | Surface | Resolution | Closed on |
|---|---|---|---|
| 9 | UAE globe pin city | **Dubai** — `25.2048°N, 55.2708°E`. Confirmed by Tencent Cloud signing-ceremony location 2026-05-07. Coords already updated in `HeroGlobeScene.tsx`. | 2026-05-07 |

## Removed (audit log)

| Surface | Reason | Removed on |
|---|---|---|
| All Flump section / route / mascot / pillar / pin items, plus the original Section 5e plan | Flump is not a RedPad Games project — was incorrectly carried over from the Stage-1 brief. Studio's verified lineup is Dustland + Wartide Worlds. Code routes, copy questions, and IA entries deleted across the build; see `docs/brief.md` Scope correction note. | 2026-05-07 |

---

## Section 5d — Dustland deep-dive

| # | Surface | Current placeholder | Needed |
|---|---|---|---|
| 19 | Steam URL | `https://store.steampowered.com/app/1459630/Dustland/` (from brief). | Confirm canonical URL + that App ID 1459630 stays current through the press cycle. |
| 20 | Status pills | "Looter shooter · Extraction" / "PC · Steam" / "Early Access · Dec 2024" | Confirm pill copy. Alternative for #1: "MMO Action — Looter Shooter". |
| 21 | Lead paragraph | *"Forty years after the science catastrophe, the survivors live underground in the unfinished Yanmei seed bank. Every drop into the dust is a contract — and a chance to lose what you found."* — composed from brief.md → Games → Dustland → World. | CEO / marketing approval on the cinematic framing. |
| 22 | Pillar 1 | **Multi-season living world** — "Ten chapters of story. Four factions vying for the map. Each season recomposes the world." | Confirm. Pulled from brief: 10 story seasons, 4 factions. |
| 23 | Pillar 2 | **Extraction with weight** — "Every mission is real risk. Customize on the fly. Survive — or lose what you carried." | Confirm. Pulled from brief USP: extraction loop + mid-mission customization. |
| 24 | Pillar 3 | **One world, ten-year horizon** — "PC today. Consoles, mobile and VR ahead. Built to last a decade, not a launch quarter." | Confirm. Pulled from brief: planned platforms + 7+ year roadmap. The "10-year horizon" framing is a slight stretch from the deck's "7+ years" — confirm phrasing. |
| 25 | Trailer source | Currently using a single Higgsfield-generated Seedance 2.0 ambient loop (Direction 01 mood, hero-3 as start frame), saved to `/dustland/key-loop.mp4`. | Decide: keep the generated loop, OR substitute the official Dustland gameplay/launch trailer (`youtube.com/watch?v=RafZ1RX3xQ4` from brief's Social Pool). If the launch trailer, we need a downloadable mp4 master (YouTube embeds add chrome + consent costs). |
| 26 | YouTube clip license | Brief flags the YouTube/Instagram pool as not yet license-verified. | Confirm RedPad owns and can host the cuts before we embed any of them in production. |
| 27 | Background mood scope | The cinematic-apocalypse pocket (deeper black backdrop, red vignette edge, film grain overlay) is contained to the Dustland section only. Page returns to Sovereign Studio neutrality from 5e onward. | Confirm the contained-mood-pocket pattern; if marketing wants a longer "Direction 01 takeover" through a few sections, expand the scope. |
