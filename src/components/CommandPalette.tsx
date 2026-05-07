"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { news } from "@/content/news";
import { games } from "@/content/games";

type Item = {
  id: string;
  title: string;
  category: string;
  href: string;
};

const STATIC_ITEMS: Item[] = [
  { id: "home", title: "Home", category: "Page", href: "/" },
  { id: "about", title: "About the studio", category: "Page", href: "/about" },
  { id: "games", title: "Games slate", category: "Page", href: "/games" },
  { id: "news", title: "News & Devlogs", category: "Page", href: "/news" },
  { id: "token", title: "RPGC Token", category: "Page", href: "/token" },
  { id: "faq", title: "FAQ", category: "Page", href: "/faq" },
  { id: "careers", title: "Careers", category: "Page", href: "/careers" },
  { id: "contacts", title: "Contacts", category: "Page", href: "/contacts" },
  { id: "press-kit", title: "Press kit", category: "Page", href: "/press-kit" },
  { id: "privacy", title: "Privacy Policy", category: "Legal", href: "/privacy-policy" },
  { id: "cookies", title: "Cookie Policy", category: "Legal", href: "/cookie-policy" },
];

const ALL_ITEMS: Item[] = [
  ...STATIC_ITEMS,
  ...games.map<Item>((g) => ({
    id: `game-${g.slug}`,
    title: g.title,
    category: "Game",
    href: `/games/${g.slug}`,
  })),
  ...news.map<Item>((n) => ({
    id: `news-${n.slug}`,
    title: n.title,
    category: `News · ${n.category}`,
    href: `/news/${n.slug}`,
  })),
];

/**
 * Cmd+K (or Ctrl+K, or `/`) opens a search overlay over the page. Type to
 * filter routes + games + news. Arrows pick a result, Enter navigates,
 * Esc closes. Pure client-side — no API call, no fetch — searches a small
 * static index built from content/.
 */
export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Hotkey: Cmd+K / Ctrl+K / `/` opens; Esc closes.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Focus the input when opened. Reset state on close.
  React.useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      // Defer to next paint so the motion-mounted input is in the DOM.
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  const results = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_ITEMS.slice(0, 10);
    return ALL_ITEMS.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q),
    ).slice(0, 12);
  }, [query]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[activeIndex];
      if (target) {
        router.push(target.href);
        setOpen(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[180] flex items-start justify-center bg-bg/85 px-4 pt-20 backdrop-blur md:pt-32"
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-lg border border-divider bg-bg-elevated shadow-lg"
          >
            <div className="flex items-center gap-3 border-b border-divider px-4 py-3">
              <span aria-hidden className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                Search
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Pages, games, news…"
                className="flex-1 bg-transparent text-body-md text-text placeholder:text-text-faint focus:outline-none"
                aria-label="Search the site"
              />
              <kbd className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint sm:inline">
                Esc
              </kbd>
            </div>

            <ul className="max-h-[60svh] overflow-y-auto py-2">
              {results.length === 0 ? (
                <li className="px-4 py-3 text-body-sm text-text-muted">
                  No results — try a different word.
                </li>
              ) : (
                results.map((item, i) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => {
                        router.push(item.href);
                        setOpen(false);
                      }}
                      className={
                        "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left transition-colors " +
                        (i === activeIndex
                          ? "bg-accent/10 text-text"
                          : "text-text-muted hover:bg-bg/40")
                      }
                    >
                      <span className="line-clamp-1 font-display text-body-md tracking-tight">
                        {item.title}
                      </span>
                      <span className="shrink-0 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                        {item.category}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>

            <div className="flex items-center justify-between gap-4 border-t border-divider px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
              <span>↑↓ navigate · ⏎ open</span>
              <span>⌘K · /</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
