import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const LOCATIONS = ["Zurich HQ", "Almaty Dev", "Delaware US", "Grand Cayman"];

// Pages flagged `external: true` aren't built on this site yet — we point
// them at the corresponding redpad.games surface so the footer is fully
// functional. When we ship the local version, drop the `external` flag.
type FooterLink = { href: string; label: string; external?: boolean };

const COL_STUDIO: ReadonlyArray<FooterLink> = [
  { href: "/about", label: "About" },
  { href: "https://redpad.games/careers", label: "Careers", external: true },
  { href: "/news", label: "News" },
  { href: "/contacts", label: "Contacts" },
  { href: "/press-kit", label: "Press kit" },
];

const COL_GAMES: ReadonlyArray<FooterLink> = [
  { href: "/games/dustland", label: "Dustland" },
  { href: "/games/wartide-worlds", label: "Wartide Worlds" },
  { href: "/token", label: "RPGC Token" },
];

const COL_SUPPORT: ReadonlyArray<FooterLink> = [
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Contact" },
  { href: "https://discord.gg/rbh3eEV8Ka", label: "Discord", external: true },
];

const COL_LEGAL: ReadonlyArray<FooterLink> = [
  { href: "https://redpad.games/privacy-policy", label: "Privacy", external: true },
  { href: "https://redpad.games/cookie-policy", label: "Cookies", external: true },
];

export function Footer() {
  return (
    <footer className="relative bg-bg border-t border-divider px-6 pb-8 pt-20 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* Brand + community + newsletter */}
        <div className="space-y-10 md:col-span-4">
          <div>
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
          <NewsletterSignup />
        </div>

        <FooterColumn title="Studio" links={COL_STUDIO} className="md:col-span-2" />
        <FooterColumn title="Games" links={COL_GAMES} className="md:col-span-2" />
        <FooterColumn title="Support" links={COL_SUPPORT} className="md:col-span-2" />
        <FooterColumn title="Legal" links={COL_LEGAL} className="md:col-span-2" />
      </div>

      {/* Locations strip */}
      <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-divider/40 pt-8 font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
        {LOCATIONS.map((loc) => (
          <span key={loc} className="flex items-center gap-2">
            <span aria-hidden className="size-1 rounded-full bg-accent" />
            {loc}
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
  links: ReadonlyArray<FooterLink>;
  className?: string;
}) {
  return (
    <div className={className}>
      <h4 className="mb-6 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
        {title}
      </h4>
      <ul className="space-y-3 text-body-md text-text-muted">
        {links.map((l) =>
          l.external ? (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                {l.label}
                <span aria-hidden className="text-[0.7em] opacity-50">↗</span>
              </a>
            </li>
          ) : (
            <li key={l.href}>
              <Link
                href={l.href}
                data-cursor="hover"
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
