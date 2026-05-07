import { news } from "@/content/news";

export const dynamic = "force-static";

const SITE =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://redpad-website.vercel.app");

/**
 * RSS 2.0 feed for /news. Lives at /news/feed.xml. Mirrors the order of
 * articles in src/content/news.ts (newest first).
 *
 * Note this route is intentionally outside the (marketing) route group so
 * Next.js doesn't try to nest it under that layout.
 */
export async function GET() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  const items = sorted
    .map((article) => {
      const url = `${SITE}/news/${article.slug}`;
      const pubDate = new Date(article.date).toUTCString();
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(article.category)}</category>
      <description>${escapeXml(article.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RedPad Games — News</title>
    <link>${SITE}/news</link>
    <description>Studio updates, partnerships, and Dustland devlogs from RedPad Games.</description>
    <language>en-us</language>
    <atom:link href="${SITE}/news/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
