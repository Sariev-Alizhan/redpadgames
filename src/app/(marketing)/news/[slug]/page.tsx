import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { news } from "@/content/news";
import { Container } from "@/components/ui/Container";

export async function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { images: [article.cover] },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = news.find((n) => n.slug === slug);
  if (!article) notFound();

  const related = news.filter((n) => n.slug !== article.slug).slice(0, 2);
  const paragraphs = article.body.split(/\n\s*\n/).filter(Boolean);

  return (
    <main className="relative bg-bg">
      {/* Cover */}
      <div className="relative h-[60svh] min-h-[28rem] overflow-hidden">
        <Image
          src={article.cover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/60 to-bg"
        />
      </div>

      <Container width="narrow" className="relative -mt-32 pb-32 md:-mt-48">
        {/* Article meta + title */}
        <div className="rounded-lg border border-divider bg-bg-elevated p-8 md:p-14">
          <div className="flex flex-wrap items-center gap-3 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
            <span className="text-accent">{article.category}</span>
            <span aria-hidden>·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>

          <h1 className="mt-6 font-display font-black tracking-[-0.03em] text-text leading-[1.05] text-[clamp(2rem,5vw,4rem)]">
            {article.title}
          </h1>

          <p className="mt-6 text-body-lg text-text-muted md:text-xl">
            {article.excerpt}
          </p>
        </div>

        {/* Body */}
        <article className="mt-12 max-w-2xl space-y-6 text-body-lg text-text-muted">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "first-letter:text-accent" : undefined}>
              {p.startsWith('"') ? <em className="font-serif italic text-text">{p}</em> : p}
            </p>
          ))}
        </article>

        {/* Personal dedication block */}
        {article.dedication ? (
          <aside
            aria-label="Personal note"
            className="mt-16 max-w-2xl rounded-lg border border-accent/30 bg-accent/5 p-8 md:p-10"
          >
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
              A note to {article.dedication.to}
            </p>
            <p className="mt-4 font-serif italic text-text leading-snug text-[clamp(1.25rem,2vw,1.625rem)]">
              {article.dedication.message}
            </p>
            <p className="mt-6 font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
              — {article.dedication.from}
            </p>
          </aside>
        ) : null}

        {/* Related */}
        {related.length ? (
          <section className="mt-24 border-t border-divider/40 pt-12">
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
              Read next
            </p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/news/${r.slug}`}
                    data-cursor="hover"
                    className="group block overflow-hidden rounded-lg border border-divider bg-bg-elevated transition-colors hover:border-accent/40"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={r.cover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-cinematic ease-expo-out group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 font-mono text-caption uppercase tracking-[0.18em] text-text-faint">
                        <span className="text-accent">{r.category}</span>
                        <span aria-hidden>·</span>
                        <time dateTime={r.date}>{formatDate(r.date)}</time>
                      </div>
                      <h3 className="mt-3 font-display text-heading-md tracking-tight text-text transition-colors group-hover:text-accent">
                        {r.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="mt-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-accent"
          >
            ← All news
          </Link>
        </div>
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
