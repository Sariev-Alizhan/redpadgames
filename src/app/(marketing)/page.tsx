import { AnnouncementBar } from "@/components/ui/AnnouncementBar";
import {
  HeroSection,
  StudioStatementSection,
  GamesSection,
  DustlandSection,
  DustlandRoadmapSection,
  TestResultsSection,
  PartnersMarqueeSection,
  TeamSection,
  FootprintSection,
} from "@/components/sections";
import { CTASection } from "@/components/sections/CTASection";

// Tencent Cloud partnership announce: 2026-05-07, signed in Dubai.
// Cloud-infrastructure deal — not publishing or investment.
// Auto-hide window: 14 days. Bar disappears after 2026-05-21 00:00 UTC
// regardless of dismissal state (set by `expiresAt` on AnnouncementBar).
const TENCENT_CLOUD_ANNOUNCE_EXPIRES_AT = "2026-05-21T00:00:00Z";

export default function HomePage() {
  return (
    <main className="relative">
      <AnnouncementBar
        label="Now signed"
        body="RedPad Games × Tencent Cloud — strategic cloud partnership, signed May 7, 2026, Dubai."
        scrollToId="partners"
        dismissible
        dismissKey="rp-tencent-cloud-2026-05-07"
        expiresAt={TENCENT_CLOUD_ANNOUNCE_EXPIRES_AT}
      />

      <HeroSection />
      <StudioStatementSection />
      <GamesSection />
      <DustlandSection />
      <DustlandRoadmapSection />
      <TestResultsSection />
      <PartnersMarqueeSection />
      <TeamSection />
      <FootprintSection />
      <CTASection />
    </main>
  );
}
