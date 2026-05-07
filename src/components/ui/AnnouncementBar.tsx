"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { sec, durations, easings } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useLenis } from "@/components/SmoothScrollProvider";

export interface AnnouncementBarProps {
  label: string;
  body: React.ReactNode;
  /** External href OR same-page hash (e.g. "/press" or "/#partners"). */
  href?: string;
  /** When set, click smooth-scrolls to the in-page #id (Lenis on home, native otherwise).
   *  Cross-route navigation goes through Next Link, then resolves via the URL hash. */
  scrollToId?: string;
  /** Storage key under which a "dismissed" flag is persisted. */
  dismissKey?: string;
  /** Whether the user can dismiss it. Default false. */
  dismissible?: boolean;
  /** ISO date/time string. After this point the bar auto-hides regardless
   *  of dismissal state. Use this to expire press cycles cleanly. */
  expiresAt?: string;
  className?: string;
}

/**
 * Sticky top banner — Direction 02 signature: thin signal-red strip with a
 * pulsing status dot, mono label, display-tracked headline.
 *
 * Hide flow:
 *   • If `expiresAt` is in the past, hide immediately.
 *   • Else if `dismissKey` is "1" in localStorage, hide.
 *   • Else show.
 *
 * Click flow:
 *   • If `scrollToId` is set AND we're already on the home route, intercept
 *     the click and scroll via Lenis (or native fallback).
 *   • Otherwise let Next.js handle navigation; the browser will jump to the
 *     hash on landing.
 */
export function AnnouncementBar({
  label,
  body,
  href,
  scrollToId,
  dismissKey,
  dismissible = false,
  expiresAt,
  className,
}: AnnouncementBarProps) {
  const [hidden, setHidden] = React.useState(false);
  const reduce = useReducedMotion();
  const lenis = useLenis();

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Expiry wins over dismissal: even un-dismissed, expired bars hide.
    if (expiresAt) {
      const expired = Date.now() >= new Date(expiresAt).getTime();
      if (expired) {
        setHidden(true);
        return;
      }
    }

    if (dismissKey && window.localStorage.getItem(dismissKey) === "1") {
      setHidden(true);
    }
  }, [dismissKey, expiresAt]);

  if (hidden) return null;

  // Resolve effective href. scrollToId wins over href.
  const linkHref = scrollToId ? `/#${scrollToId}` : href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!scrollToId) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname !== "/") return;
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${scrollToId}`, { duration: 1.4 });
    } else {
      document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    }
    history.replaceState(null, "", `#${scrollToId}`);
  };

  const inner = (
    <span className="flex flex-1 items-center justify-center gap-3 sm:gap-4">
      <span className="relative inline-flex size-2.5 shrink-0" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-text/45 animate-pulse-signal" />
        <span className="relative size-2.5 rounded-full bg-text" />
      </span>

      <span className="hidden font-mono text-caption uppercase opacity-80 sm:inline">
        {label}
      </span>

      <span className="font-display text-body-sm tracking-tight">{body}</span>

      {linkHref ? (
        <span aria-hidden="true" className="hidden text-body-sm sm:inline">
          →
        </span>
      ) : null}
    </span>
  );

  return (
    <motion.div
      role="region"
      aria-label="Site announcement"
      initial={{ y: reduce ? 0 : "-100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: reduce ? 0 : sec(durations.base),
        ease: easings.expoOut,
        delay: reduce ? 0 : 0.15,
      }}
      className={cn(
        "sticky top-0 z-40 w-full bg-accent text-text shadow-md",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center px-6 py-2">
        {linkHref ? (
          <Link
            href={linkHref}
            onClick={handleClick}
            className="group flex flex-1 items-center justify-center rounded-sm transition-colors duration-fast ease-standard hover:bg-accent-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
          >
            {inner}
          </Link>
        ) : (
          inner
        )}

        {dismissible ? (
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => {
              setHidden(true);
              if (dismissKey) window.localStorage.setItem(dismissKey, "1");
            }}
            className="ml-2 shrink-0 rounded-sm px-2 text-body-sm opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
          >
            ×
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}
