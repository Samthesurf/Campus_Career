import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { eventDetails } from "../data/eventDetails.js";

const HOME_TITLE = "Campus to Career 2.0 | The Becoming at ABUAD";
const HOME_DESCRIPTION =
  "Campus to Career 2.0 returns on May 2nd, 2026 at Alfa Belgore Hall, ABUAD, with The Becoming theme focused on personal growth, branding, mentorship, and career readiness.";
const HOME_KEYWORDS =
  "campus to career, campus to career 2.0, the becoming, campus to career abuad, student career event nigeria, alfa belgore hall, afe babalola university career event";

const upsertMeta = (selector, attributes) => {
  let meta = document.head.querySelector(selector);
  if (!meta) {
    meta = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== "content") {
        meta.setAttribute(key, value);
      }
    });
    document.head.appendChild(meta);
  }
  if (attributes.content) {
    meta.setAttribute("content", attributes.content);
  }
};

const upsertLink = (selector, attributes) => {
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    document.head.appendChild(link);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    link.setAttribute(key, value);
  });
};

const upsertStructuredData = (id, payload) => {
  let script = document.head.querySelector(`#${id}`);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
};

const buildEventSchema = (canonicalUrl, imageUrl) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: eventDetails.name,
  description:
    "Student-focused event bridging academic learning and real-world careers through personal development, mentorship, networking, and actionable guidance.",
  startDate: eventDetails.startDateTime,
  endDate: eventDetails.endDateTime,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: [imageUrl],
  location: {
    "@type": "Place",
    name: eventDetails.locationFull,
    address: eventDetails.city,
  },
  organizer: {
    "@type": "Organization",
    name: "Campus to Career",
    url: canonicalUrl,
  },
});

const SeoMeta = () => {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;
    const imageUrl = `${origin}/og-image.png`;
    const canonicalUrl = `${origin}/`;

    document.title = HOME_TITLE;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: HOME_KEYWORDS,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: HOME_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: HOME_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: HOME_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });

    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const schema = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Campus to Career",
        url: canonicalUrl,
        logo: `${origin}/favicon.png`,
      },
      buildEventSchema(canonicalUrl, imageUrl),
    ];

    upsertStructuredData("campus-career-seo-schema", schema);
  }, [location.pathname]);

  return null;
};

export default SeoMeta;
