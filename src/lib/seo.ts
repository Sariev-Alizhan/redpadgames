import type { Metadata } from "next";

const siteUrl = "https://redpad.games";
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
    site: "@RedpadGames",
  },
  robots: { index: true, follow: true },
};
