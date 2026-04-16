# Selar Integration: How It Will Work for Campus to Career

Date: 2026-03-30

## Goal

Use Selar as the payment + ticketing engine while this website remains the primary event landing/registration experience.

In short:

- Your site collects attendee details and drives conversion.
- Selar processes payment and issues the QR ticket.
- Cloudflare D1 stores a trusted local record for reporting and admin workflows.

## Confirmed Selar Capabilities (used in this plan)

- Ticket tiers (free/paid tiers), QR tickets, discount codes.
- Customer redirection after successful purchase.
- Offline check-in with the Tickets by Selar mobile app.
- Multi-device check-in for event staff.
- Quick checkout link behavior and URL prefill parameters (`add_to_cart`, `email`, `fullname`, `mobile`, `address`).
- Integrations including Zapier.

## End-to-End User Flow

### 1) Visitor fills form on this site

- Route: `/register`
- Current form data (email, full_name, college, department, level, interest, heard_from) is submitted to your backend.

### 2) Backend stores a pending registration in D1

- Existing endpoint: `POST /api/register`
- Store record as `registration_status = "pending_payment"` (new status field).
- Generate local `registration_id` for traceability.

### 3) Frontend redirects user to Selar checkout

- Build a Selar product URL using quick checkout params.
- Example pattern:

```text
https://selar.co/<ticket_product_slug>?add_to_cart=1&email=<email>&fullname=<name>&mobile=<phone>
```

- This makes checkout open immediately and pre-fills buyer details.

### 4) User pays on Selar

- Selar handles payment methods, processing, and ticket generation.
- Selar issues ticket/QR to the buyer through Selar channels (receipt/app/email flow managed by Selar).

### 5) Selar redirects buyer back to your site

- Configure Selar post-purchase redirect to:
- `/ticket-confirmed` (new route/page on this site)
- This page is for user messaging only ("payment received, check your Selar ticket/QR").

### 6) Payment confirmation sync updates D1

Preferred (fully automated):

- Selar webhook (or Zapier trigger) calls your Cloudflare endpoint:
- `POST /api/selar/webhook` (new endpoint)
- Endpoint verifies source secret/signature.
- Endpoint upserts payment state in D1 using unique `selar_order_id`.

Fallback (if webhook is not available):

- Use Zapier to forward Selar purchase events to your webhook.
- Or do periodic manual reconciliation (CSV export/import) into D1.

### 7) Admin sees real status in dashboard

- Existing admin route `/admin` should read local D1 status:
- pending_payment / paid / failed / refunded (as available)
- This gives accurate reporting even if user closes browser before redirect returns.

## Why D1 Sync Is Important

Do not trust redirect query params as proof of payment.

Reasons:

- Redirect can be interrupted (network/user closes tab).
- Redirect params can be tampered with.
- You need idempotent, auditable records in your own database.

D1 becomes your internal source of truth for:

- paid attendee count
- ticket tier mix
- payment totals by currency
- support and reconciliation

## Cloudflare Architecture (No Third-Party Required)

You can implement this directly on Cloudflare:

- **Pages Functions** for webhook endpoints.
- **D1** for persistent order/registration records.
- **(Optional) Queues** for retry-safe async processing at scale.

So, Zapier is optional, not mandatory.

## Proposed Data Model Changes

Extend existing `registrations` table (or create `ticket_orders` table) with:

- `registration_status` (pending_payment, paid, failed, refunded)
- `selar_order_id` (unique)
- `selar_product_id` or `selar_ticket_slug`
- `ticket_tier`
- `amount_paid`
- `currency`
- `paid_at`
- `payment_channel` (if provided)
- `webhook_received_at`
- `raw_event_json` (optional for audit/debug)

### Idempotency rule

Enforce uniqueness on `selar_order_id` and always upsert.

This prevents duplicate rows when webhooks are retried.

## Security Rules for Webhook Endpoint

- Verify webhook secret/signature before processing.
- Reject unsigned/invalid payloads with 401/403.
- Log event IDs/order IDs for traceability.
- Return 200 quickly after successful validation + storage.
- Never expose secrets on frontend.

## UX Behavior on Confirmation Page

`/ticket-confirmed` should:

- Confirm registration intent.
- Explain that ticket/QR is delivered by Selar.
- Tell user where to find it (receipt/email/app).
- Provide event date/location and support contact.

Optional:

- Add "I did not receive my ticket" support path.

## Event Day Operations

- Check-in is done with Tickets by Selar app.
- Staff scan attendee QR codes.
- Offline mode is supported for poor network conditions.
- Multiple staff can check in from multiple devices.

## Implementation Plan in This Repo

1. Update `Register.jsx` flow to redirect to Selar checkout after local save.
2. Add `/ticket-confirmed` page and route.
3. Add `functions/api/selar/webhook.js` with verification + D1 upsert.
4. Add D1 migration for payment/ticket fields.
5. Update admin API/UI to show payment status fields.
6. Test free-tier end-to-end before switching to paid tiers.

## What Must Be Confirmed in Selar Dashboard/Support

- Webhook availability for ticket purchase events on your account.
- Webhook signing format/secret configuration.
- Exact payload fields (order id, buyer email, amount, currency, status, ticket info).
- Post-purchase redirect behavior and supported dynamic params.

## Source Links

- Tickets comparison with features (tiers, QR, offline check-in, redirects, integrations):
  https://selar.com/blog/tickets-by-selar-vs-eventporte/
- Selar 2026 update (Tickets by Selar app, offline + multi-device check-in):
  https://selar.com/blog/selar-new-features-2026/
- Quick checkout URL parameters (`add_to_cart`, prefill):
  https://headwayapp.co/selar-updates/quick-checkout-(url-triggered)-great-for-sales-funnels-187557
- Redirect product demo:
  https://selar.com/skck
