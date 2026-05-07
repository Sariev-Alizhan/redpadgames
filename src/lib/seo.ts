import type { Metadata } from "next";

// Source-of-truth for absolute URLs in metadata (canonical, OG image, sitemap).
// Vercel deployments expose VERCEL_PROJECT_PRODUCTION_URL — used so social
// previews resolve correctly even before the custom redpad.games domain is
// wired up. Override with NEXT_PUBLIC_SITE_URL when redpad.games points at
// Vercel (Settings → Domains).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

const siteName = "RedPad Games";
const description =
  "RedPad Games — a four-flag game studio building Dustland and the next generation of multiplayer experiences. Almaty · Zurich · Delaware · Cayman.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Game studio. Almaty · Zurich · Delaware · Cayman.`,
    template: `%s · ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: siteName,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: "@redpadgames",
    creator: "@redpadgames",
    // Explicit images so X serves the same OG card as Facebook / LinkedIn.
    images: [`${siteUrl}/opengraph-image.jpg`],
  },
  robots: { index: true, follow: true },
};
