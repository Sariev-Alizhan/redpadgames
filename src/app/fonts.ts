import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";

// Single Inter instance backs both body copy and display headlines —
// `--font-display` is aliased to `--font-sans` in tokens.css so existing
// `font-display` utilities keep working while we run one font load.
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

// Italic-only — used for the accent words ("two suns", "the dust").
export const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});
