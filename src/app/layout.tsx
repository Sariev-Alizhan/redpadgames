import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GsapInit from "@/components/GsapInit";
import { SharedCanvas } from "@/components/three/SharedCanvas";
import { SceneControllerProvider } from "@/components/three/SceneController";
import { baseMetadata } from "@/lib/seo";
import { sans, mono, serif } from "./fonts";
import { Cursor, GrainOverlay } from "@/components/effects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-text font-sans min-h-full">
        <SceneControllerProvider>
          <SmoothScrollProvider>
            <GsapInit />
            <SharedCanvas />
            <Navbar />
            <div className="relative z-10">{children}</div>
            <Footer />
          </SmoothScrollProvider>
        </SceneControllerProvider>
        <GrainOverlay />
        <Cursor />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
