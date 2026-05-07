"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { MagneticButton } from "@/components/effects";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/about", label: "Studio" },
  { href: "/games", label: "Games" },
  { href: "/news", label: "News" },
  { href: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change-ish: any anchor click inside.
  const handleClose = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-300",
        scrolled
          ? "border-b border-divider/40 bg-bg/70 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20"
      >
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <MagneticButton strength={10}>
                <Link
                  href={link.href}
                  data-cursor="hover"
                  className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              </MagneticButton>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <MagneticButton strength={14}>
            <ButtonLink href="/games/dustland" variant="primary" size="sm">
              Play Dustland
            </ButtonLink>
          </MagneticButton>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-md border border-divider text-text md:hidden"
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-full bg-current transition-transform",
                open && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 h-px w-full bg-current transition-transform",
                open && "-translate-y-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={open ? "open" : "closed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          closed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden border-t border-divider/40 bg-bg/95 backdrop-blur md:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleClose}
                className="block py-3 font-display text-heading-sm text-text"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <ButtonLink
              href="/games/dustland"
              variant="primary"
              size="md"
              onClick={handleClose}
              className="w-full"
            >
              Play Dustland
            </ButtonLink>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
