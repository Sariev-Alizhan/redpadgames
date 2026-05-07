// RedPad Games — team roster.
// Source of truth: redpad.games/team (mirrored 2026-05).
// Two founders are split out so the Team section can lead with them.

export interface TeamMember {
  name: string;
  role: string;
  /** Optional portrait under /public/team/. Falls back to a typographic tile. */
  portrait?: string;
}

export const founders: TeamMember[] = [
  { name: "Vildan Fazylov", role: "Founder & CEO", portrait: "/team/team-vildan-fazylov.webp" },
  { name: "Yevgeniy Neverov", role: "Founder & GPO" },
];

export const team: TeamMember[] = [
  { name: "Anatoliy Makeyev", role: "Tech Lead", portrait: "/team/team-anatoliy-makeyev.webp" },
  { name: "Arkadiy Kabulov", role: "Lead Game Designer" },
  { name: "Marina Kniazeva", role: "Lead 3D Model Artist", portrait: "/team/team-marina-kniazeva.webp" },
  { name: "Dmitrii Pavlov", role: "Lead Level Designer", portrait: "/team/team-dmitrii-pavlov.webp" },
  { name: "Brandon Benson", role: "PR Director" },
  { name: "Vitaliy Novosselov", role: "Developer", portrait: "/team/team-vitaliy-novosselov.webp" },
  { name: "Darya Bandura", role: "Developer", portrait: "/team/team-darya-bandura.webp" },
  { name: "Alexey Savchenko", role: "3D Modeler", portrait: "/team/team-alexey-savchenko.webp" },
  { name: "Alexander Nevenchannyy", role: "Marketer", portrait: "/team/team-alexander-nevenchannyy.webp" },
  { name: "Azamat Tokpanov", role: "Game Designer", portrait: "/team/team-azamat-tokpanov.webp" },
  { name: "Iskander Nurbekov", role: "Game Designer", portrait: "/team/team-iskander-nurbekov.webp" },
  { name: "Temirkhan Abylkassymov", role: "Economist", portrait: "/team/team-temirkhan-abylkassymov.webp" },
  { name: "Vladimir Kisselev", role: "Level Designer", portrait: "/team/team-vladimir-kisselev.webp" },
  { name: "Ilya Odincov", role: "Manager", portrait: "/team/team-ilya-odincov.webp" },
  { name: "Olzhas Nurbekov", role: "Project Manager", portrait: "/team/team-olzhas-nurbekov.webp" },
];

/** Pedigree row — games members have shipped on. */
export const teamCredits = [
  "EVE Online",
  "World of Warcraft",
  "Call of Duty: MW3",
  "Metro Exodus",
  "S.T.A.L.K.E.R.",
  "World of Tanks",
];
