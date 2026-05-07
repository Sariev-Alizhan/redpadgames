// Home page section registry — drives both the page render order
// and the scroll-trigger waypoints for the SharedCanvas SceneRouter.

export type HomeSection = {
  id: string;
  no: string;
  label: string;
  brief: string;
  has3D: boolean;
};

export const homeSections: HomeSection[] = [
  {
    id: "announcement",
    no: "00",
    label: "Tencent Cloud Partnership Announcement",
    brief:
      "Sticky bar at the top of every page until the press-cycle window closes. RedPad × Tencent Cloud — strategic cloud partnership, signed in Dubai 2026-05-07.",
    has3D: false,
  },
  {
    id: "hero",
    no: "01",
    label: "Hero — Mission Control",
    brief:
      "Holographic globe with three operational pins (Almaty / Zurich / UAE). Studio-positioning headline and dual CTA.",
    has3D: true,
  },
  {
    id: "studio-statement",
    no: "02",
    label: "We are RedPad",
    brief:
      "Editorial pull-quote, pedigree, and four animated counters. Camera dollies back through the same scene.",
    has3D: false,
  },
  {
    id: "dustland",
    no: "03",
    label: "Games — Dustland",
    brief:
      "Cinematic-apocalypse mood pocket. Single-flagship treatment. Full-bleed video loop, three USP pillars, Steam CTA. ShardCluster scene replaces the globe at the same on-screen position.",
    has3D: true,
  },
  {
    id: "partners",
    no: "04",
    label: "Partners",
    brief:
      "Logo wall on a pearl-inverted panel. Cloud-infra pillars: AWS + Tencent Cloud (peer infra partners — China / APAC / MENA reach). Plus Epic Games, NVIDIA, and the rest.",
    has3D: false,
  },
  {
    id: "team",
    no: "05",
    label: "The Team",
    brief:
      "Photo collage, location pins, leadership board with pedigree logos (EVE / WoW / CoD / Metro / S.T.A.L.K.E.R. / WoT).",
    has3D: false,
  },
  {
    id: "news",
    no: "06",
    label: "News & Devlogs",
    brief:
      "Three latest posts. Dustland EA launch, Tencent Cloud partnership, latest devlog.",
    has3D: false,
  },
  {
    id: "careers",
    no: "07",
    label: "Careers",
    brief: "Open roles preview with location tags. CTA to /careers.",
    has3D: false,
  },
  {
    id: "footer",
    no: "08",
    label: "Footer — Contact, socials, legal",
    brief:
      "ceo@redpad.games, Telegram, social grid, business inquiry form, privacy/cookie/EULA.",
    has3D: false,
  },
];
