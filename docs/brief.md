# RedPad Games — Website Redesign Brief (Stage 1: Discovery)

> **Deployment note:** while Tencent Cloud content is integrated in the build, the final cutover to the production `redpad.games` root domain is gated on official Tencent Cloud comms approval. Staging URL (`staging.redpad.games` or `*.vercel.app` preview) is fine until then.
>
> **Partner clarification:** the partner is **Tencent Cloud** (cloud infrastructure), not Tencent (publishing/investment). Tone everywhere is operational and peer-to-peer infra, not "acquired/funded by Tencent".
>
> **Scope correction (2026-05-07):** Flump references were removed in this pass — it is not a RedPad Games project. The studio's verifiable lineup from local source materials is **Dustland** (flagship, Early Access on Steam since Dec 2024) and **Wartide Worlds** (announced second project, Q3 2026 target). The homepage Games section is a single-flagship Dustland presentation; Wartide Worlds appears as a roadmap entry on `/games`, not its own homepage section.

*Date: 2026-05-07. Source rule: local materials override web on conflict. Confidence flags: **[V]** verified across sources, **[L]** local materials only, **[W]** web only, **[?]** to confirm, **[!!]** conflict.*

---

## Brand

### Logo
- Primary mark (master): `assets/source/logo/redpad_logo.jpeg` — high-res square. Composition: a tilted black-outlined trapezoid frame containing a stylized **black ink pen striking a red ink pad / brick** with a sharp white "shatter" splash. Wordmark to the right: **"RED"** in bright red, **"PAD GAMES"** in black, all-caps heavy sans-serif. The "©" sits on the top right of "GAMES".
- Same lockup is reused on every slide bottom-right corner (white-on-dark variant on dark slides).
- Vector / SVG version: **not in materials** [?] — request from client.
- Monochrome / inverted versions: **not in materials** [?].

### Palette (from slides + logo, eyeballed — not extracted from source files)
| Token | Hex (approx.) | Usage |
|---|---|---|
| Brand Red | `#E31B23` (to confirm) | Logo accent, all icon discs, diagonal corner slashes, callout headers |
| Ink Black | `#0A0A0A` | Body text, dark sections, panel backgrounds |
| Paper White | `#FFFFFF` | Default light background, body text on dark |
| Mid Gray | `#9A9A9A` (to confirm) | Subdued separators, captions |

Exact hex values: **to confirm** by sampling the original source files (PSD/AI/Figma not provided).

### Typography
- Headlines: heavy condensed sans-serif, uppercase, tight tracking. Looks like **Bebas Neue / Druk Wide / similar industrial display** [?].
- Body: justified blocks in a clean geometric sans-serif (could be Gotham / Montserrat / Inter weight 500–700) [?].
- The presentation deck and the live site both use **all-caps headlines** as a recurring rhythm.
- Web fonts currently used by redpad.games: **to confirm**.

### Visual motifs
- **Diagonal red strip** in bottom-left and top-right corners of every slide — signature graphic device, must carry into the new site as a hero/section accent.
- **Red circular icon discs** with white pictograms (calendar, monitor, hourglass, target, gamepad, etc.) — iconography style for feature lists.
- Sharp geometric shapes; the logo's tilted frame implies a 3D / parallax tilt motif.
- Photo style for portraits: **black-and-white photography inside a red circular ring** (CEO portrait on slide 26).
- Game art is gritty post-apocalyptic photoreal (Dustland) — orange/dust palette, harsh sunlight, masked figures.
- No textures or grunge overlays in deck UI itself — clean, high-contrast, almost editorial.

---

## Voice & Tone

### Verbatim quotes from materials
1. *"do what others are afraid of"* — LinkedIn tagline. **[Hero candidate.]**
2. *"We love games. We really love That's why we strive to do the best that is possible"* — current site hero (sic; awkward English).
3. *"For us gamer ≠ clients. They are our friends, our community"* — current site.
4. *"We are enthusiastically approaching new technologies, genres and therefore create a new"* — current site (incomplete sentence; needs rewrite).
5. *"Find your shadow between two suns."* — Dustland tagline on current site.
6. *"War always has a reason!"* — Wartide Worlds tagline.
7. *"After months of hard work, dedication, and countless sleepless nights, the Red Pad Games team is proud to hit 'Publish' and launch Dustland in early access on Steam."* — Dec 2024 release post (translated from RU).
8. *"Thanks to everyone who believed in us — this is only the beginning!"* — same release post.

### Recurring keywords (across deck + site + LinkedIn)
- **AAA, MMO, multiplayer, post-apocalyptic, immersive, ecosystem, fintech, GameFi/Web3, ambitious, AAA-tier team, scaling, ecosystem, factions, dynamic, persistent, season-based, premium-distribution, battle pass, partnership, founders' veterans of EVE Online / WoW / CoD / Metro / S.T.A.L.K.E.R. / WoT.**

### Tone direction
Confident, ambitious, slightly insurgent ("do what others are afraid of"). Studio sees itself as a **flagship of the Kazakh gaming industry** and an emerging AAA challenger. The current English copy on redpad.games is **broken / non-native** — the redesign must rewrite all hero/voice copy in clean, native English.

---

## Company Facts

| Fact | Value | Source / Confidence |
|---|---|---|
| Founded | **2017** | LinkedIn [V] |
| Founder & CEO | **Vildan Fazylov** | Slide 26 (presentation), slide 6 leadership board [V — overrides user brief]. **[!! Conflict with user-provided context which named "Yevgeniy Neverov" as founder. Treating local materials as authoritative.]** |
| HQ (legal) | Zurich, Switzerland — **Red Pad Games AG** | Slide 4, LinkedIn [V] |
| Development hub | Almaty, Kazakhstan — **R-Games** | Slide 4 [V] |
| US entity | **Desert Software House Inc.**, Delaware | Slide 4 [L] |
| Operational / marketplace entity | Cayman Islands | Slide 4 [L] |
| UAE cluster | Mentioned in user brief [W/user] | Not in deck — [?] |
| Team size | **70 professionals** | Slide 6 + LinkedIn About [V] |
| LinkedIn employee bracket | 51–200 | LinkedIn [V] |
| LinkedIn followers | 696 | LinkedIn [V] |
| Specialties (LinkedIn) | PC games · Unreal Engine · AWS · Game Development · MMO · Cybersport · Multiplayer · Multiplatform | LinkedIn [V] |
| Roadmap claim | "3 large cross-platform products over the next 5 years" | LinkedIn [V] |

### Partners (logo wall, Slide 25)
**Binance, Xsolla, NVIDIA, TTM Group, AWS, ZLODEI, Steam (Valve), UNIGEM, Skyrocket Fund, QuillAudits, Rayking Game, Allcorrect, Crowe.**

Slide 2 body copy additionally names **AWS, Epic Games, NVIDIA** as strategic partners. **Epic Games is NOT in the slide-25 logo wall** — flag as inconsistency [!!].

**Tencent Cloud** — strategic cloud infrastructure partnership signed May 7, 2026, Dubai. Cloud-infra deal, **not** publishing or investment. Pairs with AWS as the second cloud-infra pillar (China / APAC / MENA reach). Logo, quote and joint statement still pending Tencent Cloud comms.

### Awards / achievements
- Slide 3 claims "the studio has already received several awards for this innovative solution" (re: Dustland's fintech integration). **No specific awards named** in materials [?].
- Slide 14 cites Dustland beta KPIs: **13,600 beta participants, 65% D1 retention, 34% D3 retention, $8.3 CPA**. (Internal metric — verify before public use.)
- Steam status (web): **101 reviews, 69% positive, "Mixed"** as of fetch. Newer scrape suggests trend up to ~"Mostly Positive" at higher review counts — verify at publish time.
- doscar.kz/en/news/37 → confirmed to be the **Dustland Early Access launch announcement (09.12.2024)**, not an award profile [V]. The doscar.kz "award" angle in user brief needs clarification [?].

---

## Games

### Dustland — flagship
| Attribute | Value |
|---|---|
| Genre | Multiplayer third-person looter-shooter / extraction / survival, post-apocalyptic, evolving toward MMO |
| Engine | Unreal Engine [V] |
| Status | **Early Access on Steam since 9 December 2024** [V] |
| Platforms (live) | PC (Windows 10/11 64-bit) [V] |
| Platforms (planned) | PC, consoles, mobile, VR (Slide 3) [L] |
| Languages | English, Russian (full audio + subs) [V] |
| Price | 6 700 ₸ / ~$22.99 [V] |
| Steam reviews | 101 reviews, 69% positive, "Mixed" [V — fetched today] |
| Beta reach | 13,600 players (Slide 11) [L] |
| World | 40 years after a science catastrophe; permanent heatwave; mutated humans/animals; survivors in the unfinished "Yanmei" seed bank; ~3 km of dust-storm-ridden region; 4 factions; 10 story seasons planned [L] |
| USP | Mission-driven sessions with extraction risk; dynamic temperature zones; faction-driven world state; weapon customization found mid-mission; "watching a TV series" pacing across seasons [L] |
| Audience target | "2M+ MAU after launch" (Slide 3) [L] |
| Roadmap | Dec 2024 PC EA launch · Summer 2025 co-op missions + voice chat + story campaigns · Winter 2026 RPG progression + recurring events + map scaling (Slide 11) [L] |
| Monetization | Premium one-time purchase + content drops · cosmetic visual customization · seasonal Battle Pass (Slide 13) [L] |
| Tagline | "Find your shadow between two suns." [V] |
| **Conflict** | Slide 8 lists release as "август 2024" but Slide 11 roadmap and Steam both say "Декабрь 2024 / 9 Dec 2024" [!!] — Steam wins, slide 8 is stale. |

### Wartide Worlds — second / future project
| Attribute | Value |
|---|---|
| Concept | Hybrid RTS + FPS + RPG; switch between strategic command and individual unit POV depending on player goals (Slide 8) |
| Status | Planned release **Q3 2026** (Slide 8) [L] |
| Platforms (current site) | Android |
| Tagline | "War always has a reason!" |
| History | Originally Kickstartered in June 2019 (~$660K goal, did not fund) — predecessor "NV Games" era. Project survived rebrand and is back on the roadmap. [W background] |

### Other ecosystem references
Slide 17 ("Red Pad Games Ecosystem") names additional product clusters in a bubble map: **CUBE, Grim Dark MMORPG, P2P CCG, UGC Reward System, Game AD platform, Publishing services, an investment fund, an in-engine player marketplace, RTS-with-team-based-shooter, "Kazakh IT Hub" core**. These read as **strategy / vision, not shipping products** — confirm scope before featuring on site [?].

### Fintech sub-product (Slide 12)
**RPGS token P2P market**, personal wallets, **RPGC.IO** investor panel — RedPad Games Coin (RPGC) ecosystem. The Web3 / GameFi angle is heavily emphasized in the deck. Open question: **how loud should this be on a 2026 redesign?** Crypto framing can deter mainstream players, partners, press [?].

---

## Team / CEO

### Leadership board (Slide 6, transliterated)
1. **Vildan Fazylov** — CEO & Founder
2. **Denis Zminskiy** — Creative Producer
3. **Anastasia Bakisheva** — Supervisor of Production
4. **Vitaliy Novoselov** — Lead Client Developer
5. **Kirill Scherba** — CTO
6. **Kristina Bello** — role unclear from slide [?] (possibly CMO or HR)
7. **Tatyana Skatskaya** — CMO

### CEO assets
- **Slide 26 portrait**: Vildan Fazylov, black-and-white headshot (chin-on-fist pose), confident expression, plain dark shirt + watch, framed in a red ring. **Single CEO photo available.**
- The user brief said `./CEO/` would contain CEO photos / bio / quotes. **`./CEO/` is empty (0 files).** [!!]
- → Need: a high-res CEO photoshoot pack (multiple poses, multiple lighting conditions), short bio, 2–3 quotable lines.

### Team photos
- **No general team / studio / behind-the-scenes photos** in materials [?].
- The slide-6 leadership panel uses **tiny circular thumbnails only** — too low-res for a website team grid.
- → Need: proper headshots for the 7 leadership members at minimum.

### Pedigree branding (Slide 6)
Team includes veterans of **EVE Online, World of Warcraft, Call of Duty MW3, Metro 2033/Exodus, S.T.A.L.K.E.R., World of Tanks**. Pitch deck displays these game logos in a horizontal strip as social proof. Strong site asset — recreate as a logo wall in the About section.

### Contact
- `ceo@redpad.games`
- Telegram: `https://t.me/Ceo_rpg`
- (Both surfaced from Slide 26.)

---

## Audience & Site Goals

| # | Visitor type | Why they're here | Priority |
|---|---|---|---|
| 1 | **Press / partners / publishers** (enterprise-tier) | Verify scale, see flagship news, find a contact within 2 clicks | **5/5** — driven by the Tencent Cloud announcement timing |
| 2 | **Investors / strategic partners** | Validate team, IP portfolio, ecosystem scope, traction (Steam metrics, beta KPIs) | **4/5** |
| 3 | **Players** | Discover Dustland, jump to Steam, follow socials, watch trailer | **4/5** |
| 4 | **Talent / hires** | Open roles, culture signals, locations (Almaty / Zurich / UAE) | **3/5** — Careers must exist but doesn't need to be the spike |
| 5 | **Gaming press / reviewers** | Press kit, screenshots, logos, founder quotes, key dates | **3/5** |

---

## Mandatory Content

1. **Tencent Cloud partnership announcement** (cloud infrastructure, not publishing). Site-wide hero priority. Banner / above-the-fold module / dedicated press release. **(Priority 1.)** Tone: operational, peer-to-peer infra. [Awaits assets from Tencent Cloud comms.]
2. **Dustland as flagship** — hero key art, trailer embed, USP bullets, Steam CTA, roadmap, "play now" path.
3. **About / Studio** — founder story, team pedigree logo wall, 4-entity corporate map (CH / KZ / DE / KY), 70-person scale.
4. **Partners** — two cloud-infra pillars **(AWS + Tencent Cloud)** as a featured row, framed as peer infra partners (China / APAC / MENA reach via Tencent Cloud). Tencent Cloud is **not** the "biggest news" hero — it's one of two infra pillars. No imagery suggesting merger / acquisition; neutral logo card with quote-style caption. Plus the standard logo wall: Epic Games, NVIDIA, Binance, Xsolla, TTM, Steam, UNIGEM, Skyrocket Fund, QuillAudits, Rayking, Allcorrect, Crowe.
5. **Wartide Worlds** — secondary project page or roadmap mention (Q3 2026). Not promoted to its own homepage section; appears on `/games` overview only.
6. **Careers** — list of open roles. **No vacancy data in current materials** [?].
7. **News / Press** — Dustland EA launch, Tencent Cloud partnership, future updates.
8. **Contact** — `ceo@redpad.games`, Telegram, social grid, business inquiry form.
9. **Footer legal** — Privacy, Cookie, EULA (already linked on current site).

---

## Social Media Video Pool

⚠️ **YouTube and Instagram WebFetches returned no readable content this session** (Instagram blocks unauthenticated scraping; YouTube channel page returned only footer chrome). Below is the pool reconstructed from earlier research + the live site references. **All YouTube URLs need to be re-verified before embed.** [?]

| Platform | URL | What it shows | Verified? |
|---|---|---|---|
| YouTube | https://www.youtube.com/c/RedpadGames | Channel root | [W] |
| YouTube | https://www.youtube.com/watch?v=RafZ1RX3xQ4 | "Dustland — Gameplay trailer" | [W prior research] |
| YouTube | https://www.youtube.com/watch?v=KrKJT1goUIo | "DUSTLAND — Beta testing" (24 Nov 2022) | [W prior research] |
| YouTube short | https://youtu.be/mjWY0qYanuk | Dustland short pre-release tease | [W prior research] |
| YouTube | https://www.youtube.com/watch?v=8b6ztHqsb4w | Wartide Worlds historical teaser (Kickstarter era) | [W prior research] |
| Twitter / X (studio) | https://x.com/RedpadGames | Live posts | [W] |
| Twitter / X (Dustland) | https://x.com/dustlandmmo | Game-specific posts | [W] |
| Instagram | https://www.instagram.com/redpadgames/ | Game art + studio life | [W — content not accessible to fetch] |
| LinkedIn | https://www.linkedin.com/company/redpadgames/ | Corporate posts | [W] |
| Discord | https://discord.com/invite/rbh3eEV8Ka | Player community (~53 members) | [W prior research] |
| Steam Group | https://steamcommunity.com/groups/redpadgames | Player community | [W prior research] |
| Medium | https://redpadgames.medium.com | Long-form posts | [W] |
| TikTok / Twitch / Reddit | (linked in current site footer) | Activity unknown | [?] |

→ **Action item before Stage 2:** request a fresh export of every YouTube video (title, ID, runtime, description, upload date) and Instagram top-30 posts as a CSV. This pool is the source for both **on-site embeds** and **Higgsfield references**.

---

## Generative Production Plan (Higgsfield MCP)

Tools available (per session reminder): **Soul 2, Nano Banana 2, Marketing Studio** for stills · **Seedance 2.0, Kling 3.0** for video.

10 generation hypotheses — each is a sketch, not a final prompt:

1. **Hero key art — "Dustland Drifter"** *(Soul 2, 21:9 cinematic still)*
   *Lone masked extraction-runner silhouetted against a setting binary sun, sandstorm wall in mid-distance, atmospheric volumetric dust, hyper-real, 35 mm anamorphic, Hoyoverse-grade lighting, brand-red rim light on the figure.*

2. **Hero background loop — sand-storm parallax** *(Seedance 2.0, 8 s seamless loop)*
   *Slow camera dolly through a rolling sandstorm, occasional embers, ruined skyline silhouettes, color grade pushed cyan-shadows / red-highlights, infinite loop seam at center.*

3. **Studio identity reel — "Studio of Steel and Dust"** *(Kling 3.0, 12 s)*
   *Black backdrop. Red ink pen drops into a metallic ink pad — slow-mo, splash forms the RedPad logo trapezoid — cuts to four city plates: Almaty / Zurich / Delaware / Cayman, each with its red accent line.*

4. **Team pedigree mosaic** *(Nano Banana 2, multi-image grid)*
   *Editorial B&W environmental portraits of 7 leaders, each in a context that hints at their craft (designer at desk, tech lead at server rack, etc.), unified in red-ringed circular crops to mirror Slide 26 treatment.*

5. **3D background loop — "Ink and Dust"** *(Seedance 2.0, 10 s loop)*
   *Abstract scene: red ink trails coalescing into cracked desert ground, then dispersing back into ink — for use as section transition between Studio and Games.*

6. **Tencent Cloud partnership hero** *(Marketing Studio)*
   *Neutral editorial composition: two architectural blocks (RedPad + Tencent Cloud logo plate) on a horizon line, soft documentary lighting, no merger imagery. "Strategic Cloud Partnership 2026" supplied by typography, not in image.* [Blocked until Tencent Cloud comms ships the logo + clearance.]

7. **Faction banners (×4) — Dustland** *(Soul 2 series)*
   *Four heraldic-but-grimy faction crests, each in the red/black/dust palette, stitched onto fabric, weathered. Used as section dividers on the Dustland page.*

8. **3D texture pack — corroded metal & dust grain** *(Nano Banana 2 tileable PBR)*
   *Seamless 4K albedo + normal + roughness for use in the React Three Fiber hero plane — gives the 3D a tactile surface without bespoke modeling.*

9. **Loading / transition particle field** *(Seedance 2.0, 4 s)*
   *Red ember particles drifting upward against pure black, used between scroll-storytelling chapters; designed to alpha-mask cleanly into the next section.*

---

## Technical Ambitions (locked-in)

- **3D on hero + transitions** via **React Three Fiber + drei**.
- **Scroll-storytelling**: sections morph through 3D objects (logo trapezoid → desert dune → city skyline → handshake), parallax depth, particles.
- **Smooth scroll** via **Lenis**; cinematic camera moves between sections (`gsap.to(camera.position, …)` driven by scroll progress).
- **Dark theme** dominant; brand red as a precision accent, not a flood.
- **Mobile-first performance**: tier the 3D — low/mid/high — with detection (devicePixelRatio, navigator.deviceMemory, GPU heuristics). On low tiers, swap WebGL for poster-image fallbacks and reduced parallax.
- **`prefers-reduced-motion`** path: kill autoplay loops, replace with stills, drop scroll-pinned animations.
- **Accessibility**: WCAG AA contrast on red CTAs against black; focus rings; alt text on every key art; captions on embedded video.
- **Quality bar reference**: Hoyoverse, Kojima Productions, Larian Studios, Awwwards SOTD.
- **i18n**: ship in **English only** for v1. Architect copy as keyed strings (no hardcoded JSX text) so RU + KZ slot in cleanly later.

---

## Open Questions

(Reproduced separately at the end of this document for the client.)

---

## Inventory

### Local files processed
| Path | Size | Type | What it shows | Copied to |
|---|---|---|---|---|
| `RedPad Games Design/RedPad Games_logo.jpeg` | 663 KB | JPEG | Master logo lockup (red "RED", black "PAD GAMES", tilted black trapezoid + red ink-pad mark) | `assets/source/logo/redpad_logo.jpeg` |
| `RedPad Games Design/Слайд 2 v2.png` | 105 KB | PNG slide | Studio mission statement, mentions AWS / Epic Games / NVIDIA partners | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 3 v2.png` | 119 KB | PNG slide | Dustland summary box: Dec 2024 EA, target platforms (PC/console/mobile/VR), 7+ year roadmap, 2M+ MAU target | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 4 v2.png` | 217 KB | PNG slide | Corporate structure world map: CH holding (Red Pad Games AG), USA Desert Software House (Delaware), Cayman ops/marketplace, KZ R-Games | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 6 v2.png` | 254 KB | PNG slide | "Our Team" — 70-person team, AAA pedigree logos (EVE/WoW/CoD/Metro/STALKER/WoT), 7 leadership headshots | `assets/source/presentation/` + `team/slide06_team.png` |
| `RedPad Games Design/Слайд 8 v2.png` | 1.7 MB | PNG slide | "Our Projects" — Dustland (claims Aug 2024) + Wartide Worlds (Q3 2026) cards with screenshots | `assets/source/presentation/` + `games/slide08_dustland_wartide.png` |
| `RedPad Games Design/Слайд 9 v2.png` | 1.2 MB | PNG slide | Dustland concept — gameplay screenshots, mission/faction systems | `assets/source/presentation/` + `games/slide09_dustland_concept.png` |
| `RedPad Games Design/Слайд 10 v2.png` | 115 KB | PNG slide | Dustland USPs — competitions, dynamic temperature zones, customization, immersion, faction goals | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 11 v2.png` | 1.4 MB | PNG slide | Dustland roadmap (Dec 2024 / Summer 2025 / Winter 2026) + beta KPIs (13.6K, 65% D1, 34% D3, $8.3 CPA) | `assets/source/presentation/` + `games/slide11_dustland_roadmap.png` |
| `RedPad Games Design/Слайд 12 v2.png` | 606 KB | PNG slide | Fintech product — RPGS token P2P market, personal wallets, RPGC.IO investor panel | `assets/source/presentation/` + `games/slide12_fintech.png` |
| `RedPad Games Design/Слайд 13 v2.png` | 74 KB | PNG slide | Monetization — premium distribution + cosmetics + battle pass | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 14 v2 (Данные Steam за все время).png` | 415 KB | PNG slide | Competitor analysis — PUBG / Tarkov / SCUM benchmarks vs Dustland positioning | `assets/source/presentation/` + `games/slide14_competitors.png` |
| `RedPad Games Design/Слайд 15 v2.png` | 139 KB | PNG slide | Problem / Solution — market problems vs Web3 / metaverse / GaaS solutions | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 16 v2.png` | 78 KB | PNG slide | Future direction — iterative scaling, MMO transition, faction-based gameplay | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 17 v2.png` | 287 KB | PNG slide | "Next 10+ years" — full ecosystem bubble map, "Kazakh IT Hub" anchor | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 23.png` | 80 KB | PNG slide | Logo lockup glamour shot (large, centered) | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 25.png` | 326 KB | PNG slide | Partners logo wall — Binance, Xsolla, NVIDIA, TTM, AWS, ZLODEI, Steam, UNIGEM, Skyrocket Fund, QuillAudits, Rayking Game, Allcorrect, Crowe | `assets/source/presentation/` |
| `RedPad Games Design/Слайд 26.png` | 126 KB | PNG slide | Closing slide — Vildan Fazylov B&W headshot in red ring, contact (`ceo@redpad.games`, `t.me/Ceo_rpg`) | `assets/source/presentation/` + `team/slide26_ceo_vildan_fazylov.png` |
| `CEO/` | 0 files | — | **Empty folder.** | — |

### Web sources processed
| URL | Status | Yield |
|---|---|---|
| https://redpad.games | OK | Hero copy, nav, taglines, platform list, footer social grid |
| https://store.steampowered.com/app/1459630/Dustland/ | OK | Tags, system reqs, price, reviews (101 / 69% / Mixed) |
| https://www.linkedin.com/company/redpadgames/ | OK | "do what others are afraid of", 70-person About, founded 2017, 696 followers, specialties, "3 large cross-platform products in 5 years" |
| https://www.instagram.com/redpadgames/ | **No content extracted** — IG blocks unauthenticated fetch [?] |
| https://www.youtube.com/c/RedpadGames | **No content extracted** — only footer chrome returned [?] |
| https://doscar.kz/en/news/37 | OK | Dustland EA launch announcement, 09.12.2024, NOT a Doscar award profile |
