import {
  HeroSection,
  StudioStatementSection,
  GamesSection,
  DustlandRoadmapSection,
  TestResultsSection,
  PartnersMarqueeSection,
  TeamSection,
  FootprintSection,
  NewsTeaserSection,
} from "@/components/sections";
import { CTASection } from "@/components/sections/CTASection";
import type { Metadata } from "next";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { absolute: "RedPad Games — We build worlds." },
  description:
    "RedPad Games — independent game studio, Zurich HQ, Almaty dev. Dustland (live in Steam Early Access) and Wartide Worlds (in development). ~70 specialists across four hubs.",
  alternates: { canonical: "/" },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

export default function HomePage() {
  return (
    <main className="relative">
      <OrganizationJsonLd siteUrl={SITE_URL} />
      <WebSiteJsonLd siteUrl={SITE_URL} />
      <HeroSection />
      <StudioStatementSection />
      <GamesSection />
      <DustlandRoadmapSection />
      <TestResultsSection />
      <PartnersMarqueeSection />
      <TeamSection />
      <FootprintSection />
      <NewsTeaserSection />
      <CTASection />
    </main>
  );
}
