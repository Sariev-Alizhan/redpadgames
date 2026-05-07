// RedPad Games — game slate, public test results, and Dustland roadmap.

export type GameStatus = "early-access" | "in-development" | "announced";

export interface Game {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: GameStatus;
  releaseLabel: string;
  platforms: string[];
  cover: string;
  gallery?: string[];
}

export const games: Game[] = [
  {
    slug: "dustland",
    title: "Dustland",
    tagline: "Find your shadow between two suns.",
    description:
      "MMO action survival in a post-apocalyptic world where a lunar nuclear test put a second sun in Earth's sky. Three factions, 5 weapon types with custom assembly, 50+ missions, 350+ items, and a 64 km² wasteland of over 100 authored locations. Live in Steam Early Access.",
    status: "early-access",
    releaseLabel: "Early Access · 9 December 2024",
    platforms: ["PC (live)", "PlayStation (planned)", "Xbox (planned)", "Mobile (planned)"],
    cover: "/games/dustland/cover.jpg",
    gallery: [
      "/games/dustland/gameplay-1.jpg",
      "/games/dustland/gameplay-2.jpg",
      "/games/dustland/gameplay-3.jpg",
      "/games/dustland/gameplay-4.jpg",
      "/games/dustland/gameplay-5.jpg",
      "/games/dustland/gameplay-6.jpg",
    ],
  },
  {
    slug: "wartide-worlds",
    title: "Wartide Worlds",
    tagline: "War always has a reason!",
    description:
      "MMORTS / FPS hybrid with RPG mechanics. Players switch between strategic map control and first-person unit command, and travel between historical eras — Iron Age through space exploration — through temporal anomalies. Every unit is a named personality with its own loadout, skills, and history.",
    status: "in-development",
    releaseLabel: "In development",
    platforms: ["PC", "PlayStation", "Xbox", "Mobile"],
    cover: "/games/wartide-worlds/cover.jpg",
  },
];

/** Public Dustland test results — credibility numbers for the home page. */
export const dustlandTestResults = {
  participants: 13_600,
  retentionD1: 0.65,
  retentionD3: 0.34,
  cpa: 8.3,
};

export const dustlandRoadmap = [
  {
    period: "December 2024",
    title: "Early Access launch",
    description: "PC release.",
  },
  {
    period: "Summer 2025",
    title: "Co-op & narrative",
    description: "Cooperative missions, voice chat, and story campaigns.",
  },
  {
    period: "Winter 2026",
    title: "RPG systems",
    description: "New RPG elements, recurring in-game events, map expansion.",
  },
];
