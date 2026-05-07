"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { news, featuredArticle } from "@/content/news";
import { sec, durations, easings } from "@/lib/motion";

const TODAY_LABEL = formatDate(featuredArticle.date);

/**
 * News teaser block on the home page. The featured article (Tencent Cloud
 * signing) takes a wide cover treatment and is dated 'Today' when its date
 * matches the build date — otherwise the absolute date renders. Two
 * additional cards run alongside on lg+, stack below on smaller widths.
 */
export function NewsTeaserSection() {
  const reduce = useReducedMotion();

  // Drop the featured article from the side list to avoid duplication.
  const sideArticles = news.filter((n) => n.slug !== featuredArticle.slug).slice(0, 3);

  return (
    <section
      id="news"
      aria-label="Latest news"
      className="relative border-b border-divider bg-bg py-32 md:py-40"
    >
      <Container width="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
              09 / News
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduce ? 0 : sec(durations.slow),
                ease: easings.expoOut,
              }}
              className="mt-8 max-w-3xl font-display font-black tracking-tight text-text leading-[0.95] text-[clamp(2.25rem,7vw,5.5rem)]"
            >
              Dispatches from{" "}
              <span className="text-accent">the studio</span>.
            </motion.h2>
          </div>

          <Link
            href="/news"
            data-cursor="hover"
            className="font-mono text-caption uppercase tracking-[0.25em] text-text transition-colors hover:text-accent"
          >
            All news →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Featured */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduce ? 0 : sec(durations.slow), ease: easings.expoOut }}
            className="group relative overflow-hidden rounded-lg border border-divider bg-bg-elevated lg:col-span-7"
          >
            <Link
              href={`/news/${featuredArticle.slug}`}
              data-cursor="hover"
              className="block"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={featuredArticle.cover}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-cinematic ease-expo-out motion-safe:animate-kenburns group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/40 to-transparent"
                />
                <div className="absolute left-6 top-6">
                  <span className="inline-flex items-center gap-2 rounded-full border border-accent/60 bg-bg/40 px-3 py-1 font-mono text-caption uppercase tracking-[0.25em] text-accent backdrop-blur">
                    <span aria-hidden className="size-1.5 rounded-full bg-accent animate-pulse-signal" />
                    Today / {TODAY_LABEL}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-10">
                <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
                  {featuredArticle.category}
                </p>
                <h3 className="mt-4 font-display font-black tracking-tight text-text leading-[1.1] text-[clamp(1.5rem,2.5vw,2.5rem)]">
                  {featuredArticle.title}
                </h3>
                <p className="mt-4 max-w-2xl text-body-md text-text-muted">
                  {featuredArticle.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.25em] text-text transition-colors group-hover:text-accent">
                  Read article →
                </span>
              </div>
            </Link>
          </motion.article>

          {/* Side list */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 },
              },
            }}
            className="flex flex-col lg:col-span-5"
          >
            {sideArticles.map((article) => (
              <motion.li
                key={article.slug}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduce ? 0 : sec(durations.base),
                      ease: easings.expoOut,
                    },
                  },
                }}
                className="border-b border-divider/40 first:border-t first:border-divider/40"
              >
                <Link
                  href={`/news/${article.slug}`}
                  data-cursor="hover"
                  className="group flex items-start gap-4 py-5 transition-colors hover:bg-bg-elevated/50"
                >
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-md bg-bg">
                    <Image
                      src={article.cover}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                      <span>{article.category}</span>
                      <span aria-hidden>·</span>
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                    </div>
                    <h4 className="mt-2 font-display text-heading-sm tracking-tight text-text transition-colors group-hover:text-accent">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
