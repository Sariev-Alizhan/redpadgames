import { Inter, JetBrains_Mono } from "next/font/google";

// One Inter face powers everything: body, display headlines (heavy weights),
// and accent words (italic). Removing Instrument Serif because the editorial
// italic was reading 'lifestyle / tour-company', not gaming studio. Single
// family across the site = unified, premium-gaming feel.
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});
