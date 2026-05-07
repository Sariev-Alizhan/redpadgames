import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  /** Pixel height of the logo image. Width auto-scales (logo is ~157:100). */
  height?: number;
  className?: string;
}

/**
 * Official RedPad Games lockup — transparent stacked "RED PAD" wordmark
 * sourced from redpad.games. Renders at 1:1 over the dark site, no white box.
 *
 * The asset is 110×70; we serve it via next/image with explicit dimensions so
 * Lighthouse doesn't penalize CLS when it lazy-decodes.
 */
export function Logo({ href = "/", height = 32, className }: LogoProps) {
  const width = Math.round(height * (110 / 70));

  const content = (
    <Image
      src="/brand/redpad-logo.png"
      alt="RedPad Games"
      width={width}
      height={height}
      priority
      className={cn("h-auto w-auto", className)}
      style={{ height, width }}
    />
  );

  if (!href) return content;
  return (
    <Link href={href} aria-label="RedPad Games — home" className="inline-flex">
      {content}
    </Link>
  );
}
