import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-bg px-6 py-24 text-center">
      {/* Backdrop accent — matches the CTA section's red wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(225, 29, 46, 0.18), transparent 70%)",
        }}
      />

      <p className="font-mono text-caption uppercase tracking-[0.3em] text-text-faint">
        Error · 404
      </p>

      <h1 className="mt-6 font-display font-black tracking-[-0.05em] text-text leading-[0.9] text-[clamp(4rem,18vw,16rem)]">
        404
      </h1>

      <p className="mt-6 max-w-xl font-display text-text leading-tight text-[clamp(1.5rem,3vw,2.5rem)] font-bold tracking-tight">
        You&apos;ve wandered{" "}
        <span className="text-accent">
          beyond the dust
        </span>
        .
      </p>

      <p className="mt-4 max-w-md text-body-md text-text-muted">
        The page you&apos;re looking for never made it back from the wasteland.
        Try one of these instead.
      </p>

      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:gap-4">
        <ButtonLink href="/" variant="primary" size="lg" className="w-full sm:w-auto">
          Back to home
        </ButtonLink>
        <ButtonLink
          href="/games/dustland"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
        >
          Enter Dustland
        </ButtonLink>
      </div>

      <ul className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
        <li>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
        </li>
        <li>
          <Link href="/games" className="transition-colors hover:text-accent">
            Games
          </Link>
        </li>
        <li>
          <Link href="/news" className="transition-colors hover:text-accent">
            News
          </Link>
        </li>
        <li>
          <Link href="/careers" className="transition-colors hover:text-accent">
            Careers
          </Link>
        </li>
      </ul>
    </main>
  );
}
