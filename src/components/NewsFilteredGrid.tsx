"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NewsArticle, NewsCategory } from "@/content/news";
import { cn } from "@/lib/utils";

const ALL_LABEL = "All";

type FilterKey = NewsCategory | typeof ALL_LABEL;

/**
 * Client-side news filter. Renders pills along the top with article counts,
 * filters the grid in place. Defaults to 'All' so the grid loads with full
 * content on first paint (good for SEO + first-paint UX).
 */
export function NewsFilteredGrid({ articles }: { articles: NewsArticle[] }) {
  const [active, setActive] = React.useState<FilterKey>(ALL_LABEL);

  const counts = React.useMemo(() => {
    const map = new Map<string, number>();
    map.set(ALL_LABEL, articles.length);
    for (const a of articles) {
      map.set(a.category, (map.get(a.category) ?? 0) + 1);
    }
    return map;
  }, [articles]);

  const filters: FilterKey[] = React.useMemo(() => {
    const cats = new Set<string>();
    articles.forEach((a) => cats.add(a.category));
    return [ALL_LABEL, ...(Array.from(cats).sort() as NewsCategory[])];
  }, [articles]);

  const filtered = React.useMemo(() => {
    if (active === ALL_LABEL) return articles;
    return articles.filter((a) => a.category === active);
  }, [active, articles]);

  return (
    <>
      <ul className="mt-12 flex flex-wrap gap-2">
        {filters.map((f) => {
          const isActive = active === f;
          const count = counts.get(f) ?? 0;
          return (
            <li key={f}>
              <button
                type="button"
                onClick={() => setActive(f)}
                data-cursor="hover"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-caption uppercase tracking-[0.2em] transition-colors",
                  isActive
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-divider text-text-muted hover:border-accent/40 hover:text-text",
                )}
                aria-pressed={isActive}
              >
                <span>{f}</span>
                <span
                  className={cn(
                    "tabular-nums text-[10px]",
                    isActive ? "text-accent" : "text-text-faint",
                  )}
                >
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <ul
        className="mt-12 grid auto-rows-fr gap-8 pb-32 sm:grid-cols-2 lg:grid-cols-3"
        aria-live="polite"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((article) => (
            <motion.li
              key={article.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                href={`/news/${article.slug}`}
                data-cursor="hover"
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.cover}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                    <span className="text-accent">{article.category}</span>
                    <span aria-hidden>·</span>
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <h3 className="mt-4 font-display text-heading-md tracking-tight text-text transition-colors group-hover:text-accent">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-body-md text-text-muted">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {filtered.length === 0 ? (
        <p className="pb-32 font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          No articles in this category yet.
        </p>
      ) : null}
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
