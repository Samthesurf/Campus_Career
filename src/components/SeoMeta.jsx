import { useEffect } from 'react';

const HOME_TITLE = 'Campus to Career 2.0 in ABUAD | Student Career Event';
const HOME_DESCRIPTION =
  'Campus to Career 2.0 at Afe Babalola University (ABUAD) helps students move from campus life to practical career outcomes through mentorship and real-world insights.';
const HOME_KEYWORDS =
  'campus to career, campus to career abuad, campus to career in abuad, student career event nigeria, afe babalola university career event';

const upsertMeta = (selector, attributes) => {
  let meta = document.head.querySelector(selector);
  if (!meta) {
    meta = document.createElement('meta');
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') {
        meta.setAttribute(key, value);
      }
    });
    document.head.appendChild(meta);
  }
  if (attributes.content) {
    meta.setAttribute('content', attributes.content);
  }
};

const upsertLink = (selector, attributes) => {
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    document.head.appendChild(link);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    link.setAttribute(key, value);
  });
};

const upsertStructuredData = (id, payload) => {
  let script = document.head.querySelector(`#${id}`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
};

const SeoMeta = () => {
  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}/`;
    const imageUrl = `${origin}/og-image.svg`;

    document.title = HOME_TITLE;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content: HOME_KEYWORDS,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: HOME_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: HOME_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Campus to Career',
        url: canonicalUrl,
        logo: `${origin}/favicon.svg`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: 'Campus to Career 2.0',
        description:
          'Student-focused event bridging campus life to practical career growth through mentorship, founder stories, and actionable guidance.',
        startDate: '2026-04-11T09:00:00+01:00',
        endDate: '2026-04-11T17:00:00+01:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        image: [imageUrl],
        location: {
          '@type': 'Place',
          name: 'Afe Babalola University (ABUAD)',
          address: 'Ado-Ekiti, Ekiti State, Nigeria',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Campus to Career',
          url: canonicalUrl,
        },
      },
    ];

    upsertStructuredData('campus-career-seo-schema', schema);
  }, []);

  return null;
};

export default SeoMeta;

