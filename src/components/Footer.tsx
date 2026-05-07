import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { footprint } from "@/content/footprint";

const COL_STUDIO = [
  { href: "/about", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contacts", label: "Contacts" },
] as const;

const COL_GAMES = [
  { href: "/games/dustland", label: "Dustland" },
  { href: "/games/wartide-worlds", label: "Wartide Worlds" },
  { href: "/token", label: "RPGC Token" },
] as const;

const COL_SUPPORT = [
  { href: "/support", label: "Help Center" },
  { href: "/faq", label: "FAQ" },
  { href: "/forum", label: "Forum" },
] as const;

const COL_LEGAL = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/cookie", label: "Cookies" },
] as const;

export function Footer() {
  return (
    <footer className="relative bg-bg border-t border-divider px-6 pb-8 pt-20 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* Brand + community */}
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-body-md text-text-muted">
            We build multiplayer worlds others won&apos;t dare to ship.
          </p>
          <div className="mt-8">
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint mb-4">
              Join our community
            </p>
            <SocialIcons />
          </div>
        </div>

        <FooterColumn title="Studio" links={COL_STUDIO} className="md:col-span-2" />
        <FooterColumn title="Games" links={COL_GAMES} className="md:col-span-2" />
        <FooterColumn title="Support" links={COL_SUPPORT} className="md:col-span-2" />
        <FooterColumn title="Legal" links={COL_LEGAL} className="md:col-span-2" />
      </div>

      {/* Locations strip */}
      <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-divider/40 pt-8 font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
        {footprint.map((entity) => (
          <span key={entity.city} className="flex items-center gap-2">
            <span aria-hidden className="size-1 rounded-full bg-accent" />
            {entity.city} {entity.role.split(" · ")[0]}
          </span>
        ))}
      </div>

      {/* Outline wordmark — overflow-hidden lets it bleed off the edges
          on narrow viewports without horizontal scroll. */}
      <div
        aria-hidden
        className="mt-20 select-none overflow-hidden pointer-events-none"
      >
        <p
          className="font-display font-black tracking-tighter text-transparent leading-none whitespace-nowrap text-[clamp(3rem,18vw,20rem)]"
          style={{ WebkitTextStroke: "1px var(--color-divider)" }}
        >
          REDPAD GAMES
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-body-sm text-text-faint">
        <p>© 2017–2026 RedPad Games AG</p>
        <p>Designed in Zurich · Built in Almaty</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  className,
}: {
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="mb-6 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
        {title}
      </h4>
      <ul className="space-y-3 text-body-md text-text-muted">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              data-cursor="hover"
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
