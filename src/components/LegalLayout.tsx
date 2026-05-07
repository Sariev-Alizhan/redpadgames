import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface LegalLayoutProps {
  title: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}

/**
 * Shared chrome for legal pages — Privacy, Cookie, Terms. Long-form prose
 * with a constrained measure (max-w-prose) so lines stay readable. Last-
 * updated date is rendered as <time> for crawlers.
 */
export function LegalLayout({ title, updated, intro, children }: LegalLayoutProps) {
  return (
    <main className="relative bg-bg pb-32 pt-32 md:pt-40">
      <Container width="narrow">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          Legal
        </p>
        <h1 className="mt-6 font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,7vw,5.5rem)]">
          {title}
        </h1>
        <p className="mt-4 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
          Last updated: <time dateTime={updated}>{updated}</time>
        </p>
        {intro ? (
          <p className="mt-8 max-w-2xl text-body-lg text-text-muted">
            {intro}
          </p>
        ) : null}

        <div
          className="mt-12 max-w-2xl space-y-6 text-body-md text-text-muted [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-heading-md [&_h2]:tracking-tight [&_h2]:text-text [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-heading-sm [&_h3]:tracking-tight [&_h3]:text-text [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-accent-hot [&_strong]:text-text [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_code]:rounded [&_code]:bg-bg-elevated [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-body-sm"
        >
          {children}
        </div>

        <div className="mt-20 flex flex-wrap items-center gap-6 border-t border-divider/40 pt-8 font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          <Link href="/privacy-policy" className="transition-colors hover:text-accent">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="transition-colors hover:text-accent">
            Cookies
          </Link>
          <Link href="/contacts" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </div>
      </Container>
    </main>
  );
}
