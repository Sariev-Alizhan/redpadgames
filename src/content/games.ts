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
    tagline: "Survive the dust. Outlast the others.",
    description:
      "An immersive multiplayer survival shooter set in a layered post-apocalyptic world. Dynamic temperature zones, faction goals, and shifting map states make every session unique. Designed to scale from session shooter to full MMO.",
    status: "early-access",
    releaseLabel: "Early Access · December 2024",
    platforms: ["PC", "Console", "Mobile", "VR"],
    cover: "/games/dustland-cover.jpg",
    gallery: [
      "/games/dustland/gallery-01.jpg",
      "/games/dustland/gallery-02.jpg",
      "/games/dustland/gallery-03.jpg",
      "/games/dustland/gallery-04.jpg",
    ],
  },
  {
    slug: "wartide-worlds",
    title: "Wartide Worlds",
    tagline: "War always has a reason.",
    description:
      "A cross-genre product that lets players seamlessly switch between strategic map control and first-person unit command. At the intersection of the most demanded and deepest genres in modern gaming.",
    status: "in-development",
    releaseLabel: "Q3 2026",
    platforms: ["PC", "Console"],
    cover: "/games/wartide-cover.jpg",
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
