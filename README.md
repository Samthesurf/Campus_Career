# Campus to Career 2.0

## The Becoming

[Visit the event site](https://campustocareer.ng)

This is the web platform built for **Campus to Career 2.0**, a student-focused career development event at Afe Babalola University. The event was designed around a simple gap: students hear plenty about careers, but they do not always get a clear path from campus life to the people, skills, and decisions waiting on the other side.

The 2026 edition, themed **The Becoming**, used the site to carry the whole public journey: explain the event, introduce its speakers and partners, show the schedule, answer practical questions, and get attendees registered.

This repository is a client project, but it is also a good example of how a small event site becomes a real product once people start relying on it.

## The visitor journey

```text
Discover the event
        ↓
Understand the theme, programme, speakers, and activities
        ↓
Choose the ticket or registration route
        ↓
Follow the ticket flow and receive the event information
        ↓
Find the venue, schedule, and follow-up opportunities
```

The site includes:

- A visual landing page with the event identity and theme.
- About and event overview pages.
- Speaker, partner, activity, highlights, FAQ, and testimonial sections.
- A detailed programme schedule.
- Calendar integration for saving the event date.
- A public registration route that currently redirects ticket buyers to the Selar ticket page.
- A D1-backed registration path with duplicate-email protection for event-owned registration data.
- A post-registration thank-you route for the internal form flow.
- A protected admin area for registration review and deletion.
- Registration charts, summaries, and CSV export in the admin dashboard.
- SEO generation, sitemap, `robots.txt`, and `llms.txt` support.

## What is in the codebase

```text
src/
├── components/             Hero, navigation, speakers, FAQ, activities, gallery, and footer
├── pages/                  About, registration, admin, and thank-you routes
├── data/eventDetails.js    Event identity, schedule, venue, objectives, and next steps
├── assets/                 Speakers, event photography, fonts, and visual materials
└── App.jsx                 Client-side route and page composition

functions/api/
├── register.js              Registration endpoint backed by D1
├── registrations.js         Protected registration list and summary endpoint
├── registrations/[id].js   Protected registration deletion
└── admin/                   Login and session verification

migrations/                 D1 schema changes
scripts/                    SEO generation and maintenance scripts
wrangler.jsonc              Cloudflare Pages and D1 configuration
```

The event content is kept in `src/data/eventDetails.js` rather than scattered across the hero, schedule, and calendar code. That makes a new edition easier to reason about and gives the public site one source for its core details.

## Stack

- React 19
- Vite 7
- React Router
- Cloudflare Pages
- Cloudflare Pages Functions
- Cloudflare D1
- `lucide-react`
- Recharts for data-facing UI

## Run it locally

```bash
npm install
npm run dev
```

Build and inspect the production bundle with:

```bash
npm run generate:seo
npm run build
npm run preview
```

For Cloudflare Pages:

```bash
npm run cf:deploy:preview
npm run cf:deploy:prod
```

The local `/api` requests are proxied to the local worker during development. D1 migrations should be applied through Wrangler when working against the configured database.

## A note on the backend

The public `/register` route currently sends attendees to the Selar ticket page. The repository also contains a D1-backed registration path and protected admin endpoints for event-owned registration data, analytics, CSV export, and deletion. Keeping those responsibilities in Pages Functions means the public React app does not need to hold database or email service credentials.

## Why the project is worth looking at

The best part of this repository is the handoff between story and operations. The visual layer gives the event a voice. The data layer makes registration real. The admin path makes the information usable after the attendee clicks the button.

That is the difference between a landing page and an event platform.