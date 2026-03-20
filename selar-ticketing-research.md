# Selar Ticketing Integration Research

Date: 2026-03-19

## Summary
Selar already provides a ticketing product (Tickets by Selar) with QR codes, ticket tiers (including free), offline check‑in, and post‑purchase redirection. Official docs describe organizer check‑in via the Tickets by Selar app: scanning QR codes on the attendee’s ticket receipt and searching the guest list by name/email. Attendees can also present a QR code in the Selar consumer app. If you need a downloadable QR image hosted on your site, that is not explicitly documented, so you will likely need a custom issuance flow or confirm Selar’s ticket download capabilities with support.

## What Selar Provides (from official sources)
- Ticketing features include ticket tiers (Free, Standard, VIP, VVIP), QR codes, detailed tickets with start/end times, and support for online, offline, and hybrid events. Selar also supports offline guest check‑in and customer redirection after ticket purchase. Integrations listed include Mailchimp/ConvertKit/Google Tag Manager/Facebook Pixel/Zapier. (Selar blog comparison article)
- The Selar app lets customers access tickets and present a QR code at the gate for quick entry. (Selar app App Store listing)
- The Tickets by Selar app allows event staff to scan QR codes at the door, works offline, supports multiple check‑in devices, and lets organizers track attendance/revenue during the event. (Selar 2026 product update blog)
- The Tickets by Selar app shows a guest list with ticket tier, name, and email, and allows search by name or email. QR check‑in scans the attendee’s QR code on their ticket receipt and flags invalid or already‑used tickets. (Selar help article)

## Integration Options for This Site (No code)
1. Link‑out registration (lowest effort)
- Add a “Get Ticket” or “Register” CTA in the site that links to the Selar ticket checkout or event page.
- Use Selar’s ticket tiers to create a free tier for now and switch to paid later.
- This approach keeps payment and ticket issuance inside Selar while your site remains the marketing/landing page.

2. Post‑purchase redirect back to your site
- Selar supports customer redirection after ticket purchase. You can redirect to a “Thank you / Next steps” page on your site.
- On that page, explain how to access the ticket QR code in the Selar app and how check‑in works at the door.

3. Automation (if you must show a downloadable QR image on your site)
- Selar’s public materials highlight integrations (including Zapier). If you can receive purchase data via Zapier/webhooks, you could generate a QR image in your own system and show it on a “My Ticket” page.
- This is only viable if you can get a stable ticket/attendee identifier from Selar. The exact payload and webhook availability are not clearly documented in public Selar docs, so this needs confirmation.
- For a “one‑time download” flow: issue a short‑lived, signed ticket link after purchase; render the QR in the browser and let the user download a PNG; store only a “used/expired” flag rather than the image file.

## Requirement Fit: Downloadable QR Image
- Confirmed: Selar provides QR codes for tickets and the official Selar consumer app lets attendees present their QR code at the gate.
- Not confirmed in public docs: A downloadable ticket image hosted on your site or an API to fetch QR images. If this is a hard requirement, you’ll likely need a custom issuance flow (generate QR after purchase) or confirm Selar’s ticket download options and data access with Selar support.

## Suggested Path Given “Payment Later”
- Create the event in Selar with a free ticket tier now (to test the flow end‑to‑end).
- Use a link‑out CTA from your site to Selar checkout.
- Add a post‑purchase redirect to a “Ticket Instructions” page on your site.
- Once ready, switch the ticket price to paid tiers and keep the same integration.
- Test the attendee flow: purchase a free ticket and verify where the QR code appears (receipt page, email, app) and whether a download option exists.

## Open Questions to Resolve
- Does Selar provide a downloadable ticket image or PDF with a QR code for attendees?
- Are there official webhooks/API endpoints for ticket purchase events? If yes, what fields are available (ticket ID, QR payload, attendee email, etc.)?
- Can post‑purchase redirect URLs include dynamic query parameters (e.g., order ID) to deep‑link users into a “My Ticket” page on your site?
- What is the intended attendee experience if they do not install the Selar app (email, web ticket page, printable ticket, etc.)?
- Is there a web‑based check‑in method, or is the Tickets by Selar app the only official check‑in/validation tool?

## Source Links
- Selar blog: Tickets by Selar vs. Eventporte (features, tiers, QR codes, offline check‑in, redirects, integrations)
  https://selar.com/blog/tickets-by-selar-vs-eventporte/
- Selar blog: 2026 product update (Tickets by Selar app scanning QR codes, offline mode, multi‑device check‑in)
  https://selar.com/blog/selar-new-features-2026/
- Selar app listing (attendee app with QR ticket display)
  https://apps.apple.com/ga/app/selar-access-digital-products/id6748024658
- Selar help: Tickets by Selar app (guest list, QR scan on ticket receipt, invalid/used ticket states, offline mode)
  https://help.selar.com/portal/en/kb/articles/tickets-by-s
