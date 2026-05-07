import type { Metadata, Viewport } from "next";
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
  ScrollProgress,
} from "@/components/effects";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = baseMetadata;

/**
 * Cross-OS viewport. `viewportFit: "cover"` lets us bleed under iPhone
 * notch / dynamic island. `themeColor` sets the iOS Safari status bar
 * tint and the Android Chrome address bar — light-on-dark to match the
 * site. `colorScheme: "dark"` tells form controls + scrollbars to render
 * dark by default.
 */
export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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

        {/* iOS Safari add-to-home-screen behavior. Without these, iOS
            launches the site in Safari chrome instead of standalone. */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="RedPad" />

        {/* Windows / Edge tile color when pinned to Start. */}
        <meta name="msapplication-TileColor" content="#0a0a0b" />
        <meta name="msapplication-tap-highlight" content="no" />
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
        <ScrollProgress />
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
