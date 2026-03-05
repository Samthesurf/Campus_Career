import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { programmaticCampuses } from '../src/data/programmaticCampuses.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const lastmod = new Date().toISOString().split('T')[0];

const resolveSiteUrl = () => {
  const rawValue =
    process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://example.com');

  try {
    const withProtocol = rawValue.startsWith('http') ? rawValue : `https://${rawValue}`;
    return new URL(withProtocol).origin.replace(/\/$/, '');
  } catch {
    return 'https://example.com';
  }
};

const siteUrl = resolveSiteUrl();

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const toAbsoluteUrl = (route) => `${siteUrl}${route}`;

const renderCampusPage = (campus) => {
  const pageUrl = toAbsoluteUrl(campus.route);
  const statusPill =
    campus.status === 'confirmed'
      ? '<p class="status confirmed">Confirmed host campus</p>'
      : '<p class="status interest">Interest and discovery page</p>';

  const highlightList = campus.highlights
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');
  const introParagraphs = campus.intro.map((item) => `<p>${escapeHtml(item)}</p>`).join('');
  const faqMarkup = campus.faqs
    .map(
      (faq) => `
      <article class="faq-item">
        <h3>${escapeHtml(faq.question)}</h3>
        <p>${escapeHtml(faq.answer)}</p>
      </article>
    `,
    )
    .join('');

  const relatedLinks = programmaticCampuses
    .filter((item) => item.slug !== campus.slug)
    .map((item) => `<li><a href="${item.route}">${escapeHtml(item.h1)}</a></li>`)
    .join('');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: campus.pageTitle,
      description: campus.metaDescription,
      url: pageUrl,
      inLanguage: 'en',
      about: ['Campus to Career', campus.campusName, 'Student career readiness'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: campus.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  if (campus.slug === 'abuad') {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Campus to Career 2.0',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      startDate: '2026-04-11T09:00:00+01:00',
      endDate: '2026-04-11T17:00:00+01:00',
      location: {
        '@type': 'Place',
        name: 'Afe Babalola University (ABUAD)',
        address: 'Ado-Ekiti, Ekiti State, Nigeria',
      },
      organizer: {
        '@type': 'Organization',
        name: 'Campus to Career',
        url: siteUrl,
      },
      description:
        'Campus to Career 2.0 helps students move from school to practical career outcomes through mentorship and industry insight.',
    });
  }

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(campus.pageTitle)}</title>
    <meta name="description" content="${escapeHtml(campus.metaDescription)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:title" content="${escapeHtml(campus.pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(campus.metaDescription)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:image" content="${siteUrl}/og-image.svg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(campus.pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(campus.metaDescription)}" />
    <meta name="twitter:image" content="${siteUrl}/og-image.svg" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <style>
      :root {
        --bg: #f5f8fc;
        --card: #ffffff;
        --ink: #142136;
        --accent: #e8971a;
        --muted: #4f5d73;
        --line: #d6dfeb;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: "Segoe UI", system-ui, sans-serif;
        background: radial-gradient(circle at 20% 0%, #ffffff, var(--bg));
        color: var(--ink);
      }
      .wrap {
        max-width: 920px;
        margin: 0 auto;
        padding: 32px 20px 70px;
      }
      .home-link {
        display: inline-flex;
        text-decoration: none;
        color: #1a4c7a;
        font-weight: 600;
        margin-bottom: 18px;
      }
      .card {
        background: var(--card);
        border: 1px solid var(--line);
        border-radius: 18px;
        padding: 24px;
        box-shadow: 0 16px 40px rgba(20, 33, 54, 0.07);
      }
      h1 {
        margin: 4px 0 12px;
        font-size: clamp(1.8rem, 2.8vw, 2.4rem);
      }
      h2 {
        font-size: 1.3rem;
        margin: 28px 0 12px;
      }
      p, li {
        line-height: 1.7;
        color: var(--muted);
      }
      ul {
        margin: 0;
        padding-left: 20px;
      }
      .meta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 8px;
      }
      .meta-pill {
        background: #eef4ff;
        color: #1d3c67;
        border: 1px solid #c5d9f5;
        border-radius: 999px;
        padding: 4px 11px;
        font-size: 0.85rem;
        font-weight: 600;
      }
      .status {
        display: inline-flex;
        margin: 0 0 14px;
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.02em;
      }
      .status.confirmed {
        color: #0e5a2c;
        background: #dff7e8;
        border: 1px solid #8fd8aa;
      }
      .status.interest {
        color: #7b4f00;
        background: #fff1d9;
        border: 1px solid #f3c97f;
      }
      .faq-list {
        display: grid;
        gap: 14px;
      }
      .faq-item {
        border: 1px solid var(--line);
        border-radius: 12px;
        background: #fbfdff;
        padding: 14px;
      }
      .faq-item h3 {
        margin: 0 0 7px;
        font-size: 1rem;
      }
      .faq-item p {
        margin: 0;
      }
      .related {
        border-top: 1px solid var(--line);
        margin-top: 26px;
        padding-top: 16px;
      }
      .related ul {
        list-style: none;
        padding-left: 0;
        display: grid;
        gap: 8px;
      }
      .related a {
        color: #1f5f9e;
        text-decoration: none;
      }
      .cta {
        margin-top: 26px;
      }
      .cta a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #fff;
        background: var(--accent);
        border-radius: 10px;
        padding: 11px 18px;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <main class="wrap">
      <a class="home-link" href="/">Back to Campus to Career home</a>
      <article class="card">
        ${statusPill}
        <div class="meta-row">
          <span class="meta-pill">${escapeHtml(campus.campusName)}</span>
          <span class="meta-pill">${escapeHtml(campus.location)}</span>
        </div>
        <h1>${escapeHtml(campus.h1)}</h1>
        ${introParagraphs}

        <section>
          <h2>What students can expect</h2>
          <ul>${highlightList}</ul>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <div class="faq-list">${faqMarkup}</div>
        </section>

        <div class="cta">
          <a href="/">Open Campus to Career official homepage</a>
        </div>

        <section class="related">
          <h2>Related campus guides</h2>
          <ul>${relatedLinks}</ul>
        </section>
      </article>
    </main>
  </body>
</html>`;
};

const sitemapEntries = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  ...programmaticCampuses.map((campus) => ({
    path: campus.route,
    priority: campus.slug === 'abuad' ? '0.9' : '0.7',
    changefreq: campus.slug === 'abuad' ? 'weekly' : 'monthly',
  })),
];

for (const campus of programmaticCampuses) {
  const directory = path.join(publicDir, campus.route.replace(/^\//, '').replace(/\/$/, ''));
  mkdirSync(directory, { recursive: true });
  writeFileSync(path.join(directory, 'index.html'), renderCampusPage(campus), 'utf8');
}

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${toAbsoluteUrl(entry.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const llmsTxt = `# Campus to Career

> Official site for Campus to Career student career-readiness events.

Site: ${siteUrl}
Primary page: ${siteUrl}/
ABUAD page: ${siteUrl}/campus-to-career-in-abuad/

Preferred citation title: Campus to Career
Preferred description: Student-focused event and resources bridging campus life to real career outcomes.
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf8');
writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf8');

console.log(
  `Generated SEO assets for ${programmaticCampuses.length} campus pages using site URL: ${siteUrl}`,
);

