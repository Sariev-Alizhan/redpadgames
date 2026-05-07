"use client";

import * as React from "react";
import Link from "next/link";

const ROUTES: Array<{ path: string; label: string; aliases: string[] }> = [
  { path: "/", label: "Home", aliases: ["home", "index"] },
  { path: "/about", label: "About", aliases: ["about", "studio", "us"] },
  { path: "/games", label: "Games", aliases: ["games", "slate"] },
  { path: "/games/dustland", label: "Dustland", aliases: ["dustland", "dust"] },
  { path: "/games/wartide-worlds", label: "Wartide Worlds", aliases: ["wartide", "worlds"] },
  { path: "/news", label: "News", aliases: ["news", "blog", "updates", "press"] },
  { path: "/token", label: "RPGC Token", aliases: ["token", "rpgc", "coin", "crypto"] },
  { path: "/faq", label: "FAQ", aliases: ["faq", "help", "support", "questions"] },
  { path: "/careers", label: "Careers", aliases: ["careers", "jobs", "hire", "hiring"] },
  { path: "/contacts", label: "Contacts", aliases: ["contact", "contacts", "email"] },
  { path: "/press-kit", label: "Press kit", aliases: ["press", "media", "kit", "assets"] },
  { path: "/privacy-policy", label: "Privacy", aliases: ["privacy", "policy", "gdpr"] },
  { path: "/cookie-policy", label: "Cookies", aliases: ["cookie", "cookies"] },
];

/** Pick up to two routes whose label/path/aliases share a token with the
 *  attempted URL. Falls back to home + games when nothing matches. */
function suggestFor(pathname: string): typeof ROUTES {
  const tokens = pathname
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (tokens.length === 0) return ROUTES.slice(0, 2);

  const scored = ROUTES.map((r) => {
    const corpus = [r.label.toLowerCase(), r.path.toLowerCase(), ...r.aliases];
    const score = tokens.reduce(
      (acc, t) => acc + (corpus.some((c) => c.includes(t)) ? 1 : 0),
      0,
    );
    return { ...r, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) return ROUTES.slice(0, 2);
  return scored.slice(0, 2);
}

/**
 * Renders inline route suggestions on the 404 page based on what the user
 * actually typed. 'redpadgames.com/dustlnd' → suggests Dustland. Pure
 * client-side; no API call.
 */
export function NotFoundSuggest() {
  const [pathname, setPathname] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setPathname(window.location.pathname);
  }, []);

  if (!pathname) return null;
  const suggestions = suggestFor(pathname);

  return (
    <section className="mt-16 max-w-md rounded-lg border border-divider bg-bg-elevated/60 p-6">
      <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
        Did you mean
      </p>
      <ul className="mt-4 divide-y divide-divider/40">
        {suggestions.map((r) => (
          <li key={r.path}>
            <Link
              href={r.path}
              data-cursor="hover"
              className="group flex items-baseline justify-between gap-4 py-3 transition-colors hover:text-accent"
            >
              <span className="font-display text-heading-sm tracking-tight text-text group-hover:text-accent">
                {r.label}
              </span>
              <span className="font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                {r.path}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
