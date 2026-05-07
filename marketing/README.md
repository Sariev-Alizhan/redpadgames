# RedPad Games — Marketing Assets

This directory holds curated marketing assets and briefs for AI-assisted
content creation (Instagram, Twitter, news pickups).

## Contents

```
marketing/
├── README.md                     ← you are here
├── INSTAGRAM_BRIEF.md            ← drop into Claude / ChatGPT to generate posts
└── assets/
    ├── brand/
    │   └── redpad-logo.png       ← official transparent wordmark
    ├── games/
    │   ├── dustland-keyart.jpg   ← cinematic eclipse hero
    │   ├── dustland-cover.jpg    ← Steam library hero (wide)
    │   ├── screenshot-01.jpg ... screenshot-18.jpg (selected Steam captures)
    │   ├── wartide-keyart.jpg    ← shaman key art
    │   └── wartide-bear-concept.png
    ├── team/
    │   ├── team-vildan-fazylov.jpg
    │   └── team-yevgeniy-neverov.webp
    ├── news/
    │   └── tencent-signing.jpg   ← official invitation card, May 7 2026
    └── partners/
        ├── aws.svg
        ├── tencent-cloud.svg
        ├── nvidia.svg
        ├── steam.svg
        └── epic-games.svg
```

## Asset URL pattern (for AI agents)

All assets are served from GitHub raw:

```
https://raw.githubusercontent.com/Sariev-Alizhan/redpadgames/main/marketing/assets/<path>
```

## How to use the brief

1. Open `INSTAGRAM_BRIEF.md`
2. Copy its full contents
3. Paste into a fresh Claude / ChatGPT conversation as the system message
4. Ask: *"Generate posts 01 through 10 from §6, render slide visuals
   following §8 visual rules, return in the format from §10."*

The brief is self-contained — no context follow-ups required.
