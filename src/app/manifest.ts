import type { MetadataRoute } from "next";

/**
 * Web App Manifest. Lets users 'Add to Home Screen' on iOS Safari and
 * Android Chrome. The site is then launched standalone (no browser chrome)
 * with the RedPad icon and our brand color as the system theme.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RedPad Games",
    short_name: "RedPad",
    description:
      "RedPad Games — independent game studio. Dustland, Wartide Worlds, the next generation of multiplayer worlds.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    orientation: "any",
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/brand/redpad-logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
