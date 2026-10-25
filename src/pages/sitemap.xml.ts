import type { APIRoute } from 'astro';
import { defaultLang, langs, localePath } from '../i18n';

// Sitemap with hreflang alternates for every language version of the page
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://almogon.com');
  const url = (path: string) => new URL(path, base).href;
  const lastmod = new Date().toISOString().slice(0, 10);

  const alternates = [
    ...langs.map((code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${url(localePath(code))}" />`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(localePath(defaultLang))}" />`,
  ].join('\n');

  const entries = langs
    .map(
      (code) => `  <url>
    <loc>${url(localePath(code))}</loc>
    <lastmod>${lastmod}</lastmod>
${alternates}
  </url>`
    )
    .join('\n');

  // Standalone pages without language alternates
  const pages = ['/apps/duellum/privacy/', '/apps/duellum/support/']
    .map(
      (path) => `  <url>
    <loc>${url(path)}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
${pages}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
