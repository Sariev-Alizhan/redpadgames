import type { MetadataRoute } from "next";
import { games } from "@/content/games";
import { news } from "@/content/news";

// Mirrors src/lib/seo.ts — keep this in sync. Falls back to the Vercel
// production URL until the custom redpad.games domain is wired up.
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

/**
 * Generated sitemap. Static pages first, then SSG game + news routes.
 * Updated automatically when new news/games are added to content/.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/games`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  const gameRoutes: MetadataRoute.Sitemap = games.map((g) => ({
    url: `${SITE}/games/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((n) => ({
    url: `${SITE}/news/${n.slug}`,
    lastModified: n.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...gameRoutes, ...newsRoutes];
}
