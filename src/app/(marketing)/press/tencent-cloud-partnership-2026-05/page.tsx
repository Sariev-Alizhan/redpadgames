import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RedPad Games × Tencent Cloud — Strategic Cloud Partnership",
  description:
    "Press: RedPad Games and Tencent Cloud sign a strategic cloud-infrastructure partnership. Dubai, May 7, 2026.",
  robots: { index: true, follow: true },
};

/**
 * Stub press-release page for the Tencent Cloud cloud-infra partnership
 * (signed in Dubai, 2026-05-07). Final joint copy is pending comms approval
 * — see docs/copy-questions.md item #1. Tone is matter-of-fact: this is
 * an operational infra deal, not a publishing or investment partnership.
 */
export default function TencentCloudPartnershipPressPage() {
  return (
    <main className="mx-auto max-w-3xl px-8 py-32">
      <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
        /press · 2026-05-07 · Dubai
      </p>
      <h1 className="mt-3 font-display text-display-sm tracking-tight md:text-display-md">
        RedPad Games × Tencent Cloud — Strategic Cloud Partnership
      </h1>
      <p className="mt-8 text-body-lg text-text-muted">
        Dubai — May 7, 2026. RedPad Games today signed a strategic cloud-infrastructure
        partnership with Tencent Cloud. The agreement extends RedPad&rsquo;s existing
        AWS footprint with Tencent Cloud capacity across China, APAC and MENA, providing
        regional infrastructure depth for upcoming releases and the live operation of
        Dustland.
      </p>
      <p className="mt-6 text-body-md text-text-muted">
        Final release copy is pending joint comms approval and will be published on this
        page when ready.
      </p>
      <p className="mt-6 text-body-md text-text-muted">
        Media inquiries:{" "}
        <a
          href="mailto:ceo@redpad.games"
          className="text-text underline underline-offset-4 hover:no-underline"
        >
          ceo@redpad.games
        </a>
        .
      </p>
      <Link
        href="/#partners"
        className="mt-12 inline-block font-mono text-caption uppercase tracking-[0.25em] text-accent underline underline-offset-[6px] hover:no-underline"
      >
        ← Back to partners
      </Link>
    </main>
  );
}
