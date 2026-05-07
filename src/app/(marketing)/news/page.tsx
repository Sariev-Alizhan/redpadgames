import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { news } from "@/content/news";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "News",
  description:
    "Studio updates, partnerships, and Dustland devlogs from RedPad Games.",
};

export default function NewsIndexPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const [featured, ...rest] = sorted;
  if (!featured) return null;

  return (
    <main className="relative bg-bg pt-32 md:pt-40">
      <Container width="wide">
        <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-muted">
          News &amp; Devlogs
        </p>
        <h1 className="mt-6 max-w-4xl font-display font-black tracking-[-0.04em] text-text leading-[0.95] text-[clamp(2.5rem,9vw,8rem)]">
          From the{" "}
          <span className="font-sans italic font-bold text-accent">studio</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-body-lg text-text-muted">
          Partnerships, devlogs, and the long-form story behind Dustland.
        </p>

        {/* Featured */}
        <Link
          href={`/news/${featured.slug}`}
          data-cursor="hover"
          className="group mt-16 block overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src={featured.cover}
              alt=""
              fill
              sizes="100vw"
              priority
              className="object-cover transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.02]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/30 to-transparent"
            />
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
              <span className="text-accent">{featured.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={featured.date}>{formatDate(featured.date)}</time>
            </div>
            <h2 className="mt-6 max-w-4xl font-display font-black tracking-tight text-text leading-[1.05] text-[clamp(1.75rem,4vw,3.5rem)]">
              {featured.title}
            </h2>
            <p className="mt-6 max-w-3xl text-body-lg text-text-muted">
              {featured.excerpt}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.25em] text-text transition-colors group-hover:text-accent">
              Read article →
            </span>
          </div>
        </Link>

        {/* Rest */}
        <ul className="mt-16 grid auto-rows-fr gap-8 pb-32 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <li key={article.slug} className="h-full">
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
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
