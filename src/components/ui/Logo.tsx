import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  withWordmark?: boolean;
  className?: string;
  /** Tone the wordmark to a softer color (used in muted contexts). */
  variant?: "default" | "muted";
}

/**
 * Pure-typographic RedPad Games lockup. No raster — keeps the dark site clean,
 * no white box, no logo-on-logo color clash. The mark is a small accent square
 * with an inset slash (R-mark feel) followed by the wordmark.
 *
 * Why typographic: the studio's heritage logo carries a white background that
 * fights the brand's dark site, and the team's pedigree (EVE / WoW / Metro)
 * reads better as confident type than a raster mark. Premium gaming studios
 * (Larian, FromSoftware, Bungie, CDPR) all rely on heavy uppercase wordmarks.
 */
export function Logo({
  href = "/",
  withWordmark = true,
  className,
  variant = "default",
}: LogoProps) {
  const wordmarkColor = variant === "muted" ? "text-text-muted" : "text-text";

  const content = (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark />
      {withWordmark ? (
        <span
          className={cn(
            "font-display font-black uppercase leading-none",
            "text-[0.9rem] tracking-[0.14em] sm:text-base sm:tracking-[0.16em]",
            wordmarkColor,
          )}
        >
          RedPad <span className="text-accent">Games</span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label="RedPad Games — home" className="inline-flex">
      {content}
    </Link>
  );
}

/** Small geometric mark — solid red square with a notched corner.
 *  No gradients, no rounded edges; reads as an esports/AAA-studio bug. */
function LogoMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="size-7 shrink-0"
      aria-hidden
      role="presentation"
    >
      <defs>
        <clipPath id="redpad-logo-notch">
          <path d="M0 0 H32 V20 L20 32 H0 Z" />
        </clipPath>
      </defs>
      <rect
        x="0"
        y="0"
        width="32"
        height="32"
        fill="var(--color-accent)"
        clipPath="url(#redpad-logo-notch)"
      />
      {/* Inset diagonal slash for the R-mark identity */}
      <path
        d="M9 22 L22 9"
        stroke="var(--color-bg)"
        strokeWidth="3"
        strokeLinecap="square"
      />
    </svg>
  );
}
