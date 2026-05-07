import Link from "next/link";
import { homeSections } from "@/content/home-sections";
import { AnnouncementBar } from "@/components/ui/AnnouncementBar";
import {
  HeroSection,
  StudioStatementSection,
  DustlandSection,
} from "@/components/sections";

// Tencent Cloud partnership announce: 2026-05-07, signed in Dubai.
// Cloud-infrastructure deal — not publishing or investment.
// Auto-hide window: 14 days. Bar disappears after 2026-05-21 00:00 UTC
// regardless of dismissal state (set by `expiresAt` on AnnouncementBar).
const TENCENT_CLOUD_ANNOUNCE_EXPIRES_AT = "2026-05-21T00:00:00Z";

export default function HomePage() {
  // Sections still rendered as placeholder cards (everything not yet built).
  const remaining = homeSections.filter(
    (s) =>
      s.id !== "announcement" &&
      s.id !== "hero" &&
      s.id !== "studio-statement" &&
      s.id !== "dustland",
  );

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
      <DustlandSection />

      {remaining.map((s) => (
        <section
          key={s.id}
          id={s.id}
          aria-label={s.label}
          className="relative flex min-h-screen flex-col items-center justify-center border-b border-divider px-8 py-24"
        >
          <p className="mb-4 font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
            {s.no} · {s.id} {s.has3D ? "· 3D" : ""}
          </p>
          <h2 className="mb-6 max-w-3xl text-center font-display text-display-sm tracking-tight text-text md:text-display-md">
            {s.label}
          </h2>
          <p className="max-w-xl text-center text-body-md text-text-muted">{s.brief}</p>

          {/* "Read full release" anchor, only on the partners stub.
              When 5f rebuilds Partners properly, this moves into the section component. */}
          {s.id === "partners" ? (
            <Link
              href="/press/tencent-cloud-partnership-2026-05"
              className="mt-8 font-mono text-caption uppercase tracking-[0.25em] text-accent underline underline-offset-[6px] hover:no-underline"
            >
              Read full release →
            </Link>
          ) : null}
        </section>
      ))}
    </main>
  );
}
