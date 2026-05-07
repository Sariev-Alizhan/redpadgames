import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import GsapInit from "@/components/GsapInit";
import { SharedCanvas } from "@/components/three/SharedCanvas";
import { SceneControllerProvider } from "@/components/three/SceneController";
import { baseMetadata } from "@/lib/seo";
import { sans, mono } from "./fonts";
import {
  CookieBanner,
  Cursor,
  GrainOverlay,
  LoadingScreen,
  MusicPlayer,
} from "@/components/effects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Resource hints — DNS-prefetch + preconnect to the asset
            domains we actually hit during the critical render path so the
            browser opens TCP/TLS in parallel with HTML parsing. */}
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className="bg-bg text-text font-sans min-h-full">
        {/* Skip-link for keyboard users — only visible when focused. Lets
            screen-reader / Tab-key users jump past the fixed Navbar straight
            to page content. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-caption focus:uppercase focus:tracking-[0.2em] focus:text-text"
        >
          Skip to content
        </a>
        <SceneControllerProvider>
          <SmoothScrollProvider>
            <GsapInit />
            <SharedCanvas />
            <Navbar />
            <div id="main-content" className="relative z-10">{children}</div>
            <Footer />
          </SmoothScrollProvider>
        </SceneControllerProvider>
        <GrainOverlay />
        <Cursor />
        <MusicPlayer />
        <CookieBanner />
        <LoadingScreen />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
