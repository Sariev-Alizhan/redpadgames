import type { Game } from "@/content/games";
import type { NewsArticle } from "@/content/news";

/**
 * Tiny helper — emits a `<script type="application/ld+json">` with the given
 * payload. Server component, zero client cost.
 */
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify is safe — no user input ever reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** schema.org Organization for the studio. Used on the home page. */
export function OrganizationJsonLd({ siteUrl }: { siteUrl: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "RedPad Games",
        legalName: "Red Pad Games AG",
        url: siteUrl,
        logo: `${siteUrl}/brand/redpad-logo.png`,
        foundingDate: "2017",
        founders: [
          { "@type": "Person", name: "Vildan Fazylov", jobTitle: "Founder & CEO" },
          { "@type": "Person", name: "Yevgeniy Neverov", jobTitle: "Founder & GPO" },
        ],
        slogan: "We build worlds.",
        sameAs: [
          "https://www.twitter.com/redpadgames",
          "https://www.instagram.com/redpadgames",
          "https://www.youtube.com/c/RedpadGames",
          "https://t.me/redpadgames",
          "https://discord.gg/rbh3eEV8Ka",
          "https://www.facebook.com/Redpadgames",
          "https://kz.linkedin.com/company/redpadgames",
          "https://store.steampowered.com/developer/redpadgames",
        ],
        address: [
          { "@type": "PostalAddress", addressLocality: "Zurich", addressCountry: "CH" },
          { "@type": "PostalAddress", addressLocality: "Almaty", addressCountry: "KZ" },
        ],
      }}
    />
  );
}

/** schema.org NewsArticle — emitted on every news/[slug] page. Triggers
 *  Google News rich-results (cards, top-stories carousels). */
export function NewsArticleJsonLd({
  article,
  siteUrl,
}: {
  article: NewsArticle;
  siteUrl: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title,
        description: article.excerpt,
        image: [`${siteUrl}${article.cover}`],
        datePublished: article.date,
        dateModified: article.date,
        articleSection: article.category,
        author: {
          "@type": "Organization",
          name: "RedPad Games",
          url: siteUrl,
        },
        publisher: {
          "@type": "Organization",
          name: "RedPad Games",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/brand/redpad-logo.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/news/${article.slug}`,
        },
      }}
    />
  );
}

/** schema.org FAQPage — used on the /faq page. Each Q+A pair becomes a
 *  Question/Answer entity. Google can surface as an FAQ rich-snippet. */
export function FaqJsonLd({
  items,
}: {
  items: ReadonlyArray<{ q: string; a: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}

/** schema.org VideoGame — used on a game detail page. */
export function VideoGameJsonLd({
  game,
  siteUrl,
  trailerUrl,
}: {
  game: Game;
  siteUrl: string;
  trailerUrl?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "VideoGame",
        name: game.title,
        description: game.description,
        image: `${siteUrl}${game.cover}`,
        gamePlatform: game.platforms,
        applicationCategory: "Game",
        publisher: { "@type": "Organization", name: "RedPad Games", url: siteUrl },
        ...(trailerUrl ? { trailer: { "@type": "VideoObject", name: `${game.title} trailer`, embedUrl: trailerUrl } } : {}),
      }}
    />
  );
}
