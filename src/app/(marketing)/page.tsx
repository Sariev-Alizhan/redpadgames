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
import { OrganizationJsonLd } from "@/components/JsonLd";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

export default function HomePage() {
  return (
    <main className="relative">
      <OrganizationJsonLd siteUrl={SITE_URL} />
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
