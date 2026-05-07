import {
  HeroSection,
  StudioStatementSection,
  GamesSection,
  DustlandRoadmapSection,
  TestResultsSection,
  PartnersMarqueeSection,
  TeamSection,
  FootprintSection,
} from "@/components/sections";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <StudioStatementSection />
      <GamesSection />
      <DustlandRoadmapSection />
      <TestResultsSection />
      <PartnersMarqueeSection />
      <TeamSection />
      <FootprintSection />
      <CTASection />
    </main>
  );
}
