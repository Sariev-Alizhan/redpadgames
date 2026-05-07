import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/**
 * RedPad Games lockup. Defaults to icon + wordmark; pass `withWordmark={false}`
 * for tight contexts (mobile nav, square avatars).
 */
export function Logo({
  href = "/",
  size = 40,
  withWordmark = true,
  className,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/brand/redpad-logo.png"
        alt="RedPad Games"
        width={size}
        height={size}
        priority
        className="rounded-md"
      />
      {withWordmark ? (
        <span className="font-display text-base font-bold uppercase tracking-[0.2em] text-text">
          RedPad
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
