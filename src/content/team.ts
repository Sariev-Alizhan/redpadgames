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
  { name: "Vildan Fazylov", role: "Founder & CEO" },
  { name: "Yevgeniy Neverov", role: "Founder & GPO" },
];

export const team: TeamMember[] = [
  { name: "Anatoliy Makeyev", role: "Tech Lead" },
  { name: "Arkadiy Kabulov", role: "Lead Game Designer" },
  { name: "Marina Kniazeva", role: "Lead 3D Model Artist" },
  { name: "Dmitrii Pavlov", role: "Lead Level Designer" },
  { name: "Brandon Benson", role: "PR Director" },
  { name: "Vitaliy Novosselov", role: "Developer" },
  { name: "Darya Bandura", role: "Developer" },
  { name: "Alexey Savchenko", role: "3D Modeler" },
  { name: "Alexander Nevenchannyy", role: "Marketer" },
  { name: "Azamat Tokpanov", role: "Game Designer" },
  { name: "Iskander Nurbekov", role: "Game Designer" },
  { name: "Temirkhan Abylkassymov", role: "Economist" },
  { name: "Vladimir Kisselev", role: "Level Designer" },
  { name: "Ilya Odincov", role: "Manager" },
  { name: "Olzhas Nurbekov", role: "Project Manager" },
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
