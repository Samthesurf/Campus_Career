/**
 * Email utility for Campus to Career 2.0
 * Uses MailChannels API via a simple fetch() call.
 * Works natively from Cloudflare Workers/Pages — no SDK needed.
 *
 * Setup: store your MailChannels API key as a Cloudflare secret:
 *   wrangler secret put MAILCHANNELS_API_KEY
 *
 * Free tier: 100 emails/day. Sign up at https://www.mailchannels.com
 *
 * Prefixed with _ so Pages doesn't expose it as a routable endpoint.
 */

import { CALENDAR_END_UTC, CALENDAR_START_UTC } from '../../shared/calendarConstants.js';

// ─── MailChannels API endpoint ──────────────────────────────────────────────
const MAILCHANNELS_API = 'https://api.mailchannels.net/tx/v1/send';

const EVENT_THEME = 'The Becoming';
const EVENT_DATE_LABEL = 'May 2, 2026';
const EVENT_TIME_LABEL = '8:30 AM - 2:00 PM';
const EVENT_LOCATION_LABEL = 'Alfa Belgore Hall, Afe Babalola University (ABUAD)';

// ─── Google Calendar URL (same as Hero / Register / Footer — May 2, 2026) ───
const CALENDAR_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=Campus+to+Career+2.0' +
  `&dates=${CALENDAR_START_UTC}/${CALENDAR_END_UTC}` +
  '&details=Theme:+The+Becoming.+A+student-focused+career+development+experience+centered+on+personal+development,+mentorship,+networking,+and+a+builder%27s+mindset.' +
  '&location=Alfa+Belgore+Hall,+Afe+Babalola+University+(ABUAD)';

// ─── Sender config (update domain when ready) ───────────────────────────────
const SENDER_EMAIL = 'hello@campustocareer.com';
const SENDER_NAME = 'Campus to Career 2.0';

/**
 * Build the HTML confirmation email.
 *
 * @param {string} name        - Registrant's full name
 * @param {Object} details     - All registration details
 * @param {string} details.email
 * @param {string} details.college
 * @param {string} details.department
 * @param {string} details.level
 * @param {string} details.interest
 * @param {string} details.heard_from
 * @returns {string} Complete HTML email string
 */
export function buildConfirmationHTML(name, details) {
  const firstName = name.split(' ')[0];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Registration Confirmed</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0f;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0f;">
    <tr>
      <td align="center" style="padding:40px 16px;">

        <!-- Card -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background-color:#13131a;border-radius:16px;overflow:hidden;border:1px solid rgba(255,213,0,0.15);">

          <!-- Header Banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#1a1a2e 100%);padding:40px 32px;text-align:center;">
              <div style="font-size:36px;margin-bottom:8px;">🎓</div>
              <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffd500;letter-spacing:1px;">
                CAMPUS <span style="color:#ffffff;font-size:20px;vertical-align:middle;">To</span> CAREER
              </h1>
              <div style="margin-top:4px;font-size:14px;color:#ffd500;font-weight:600;letter-spacing:3px;">2.0</div>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 32px 8px;">
              <h2 style="margin:0;font-size:22px;color:#ffffff;font-weight:700;">
                Hey ${firstName}! 🎉
              </h2>
            </td>
          </tr>

          <!-- Thank You Message -->
          <tr>
            <td style="padding:8px 32px 24px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#b0b0c0;">
                Thank you for registering for <strong style="color:#ffd500;">Campus to Career 2.0</strong>!
                Your spot has been secured. We're putting together an incredible event packed
                with conversations, mentorship, and growth moments built around the theme
                <strong style="color:#ffffff;">${EVENT_THEME}</strong>.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="border-top:1px solid rgba(255,213,0,0.12);"></div>
            </td>
          </tr>

          <!-- Registration Summary Title -->
          <tr>
            <td style="padding:24px 32px 12px;">
              <h3 style="margin:0;font-size:16px;color:#ffd500;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">
                📋 Your Registration Details
              </h3>
            </td>
          </tr>

          <!-- Details Table -->
          <tr>
            <td style="padding:0 32px 24px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-radius:10px;overflow:hidden;border:1px solid rgba(255,255,255,0.06);">
                ${buildRow('Full Name', name, false)}
                ${buildRow('Email', details.email, true)}
                ${buildRow('College', details.college, false)}
                ${buildRow('Department', details.department, true)}
                ${buildRow('Level', details.level + ' Level', false)}
                ${buildRow('Interest', details.interest, true)}
                ${buildRow('Heard From', details.heard_from, false)}
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="border-top:1px solid rgba(255,213,0,0.12);"></div>
            </td>
          </tr>

          <!-- Event Details -->
          <tr>
            <td style="padding:24px 32px 8px;text-align:center;">
              <p style="margin:0;font-size:15px;color:#b0b0c0;line-height:1.6;">
                📅 <strong style="color:#ffffff;">${EVENT_DATE_LABEL}</strong> &nbsp;·&nbsp;
                🕘 <strong style="color:#ffffff;">${EVENT_TIME_LABEL}</strong>
              </p>
              <p style="margin:6px 0 0;font-size:15px;color:#b0b0c0;">
                📍 <strong style="color:#ffffff;">${EVENT_LOCATION_LABEL}</strong>
              </p>
            </td>
          </tr>

          <!-- CTA: Save the Date -->
          <tr>
            <td style="padding:20px 32px 12px;text-align:center;">
              <a href="${CALENDAR_URL}" target="_blank" rel="noopener noreferrer"
                 style="display:inline-block;padding:14px 36px;background-color:#ffd500;color:#0a0a0f;font-size:15px;font-weight:700;text-decoration:none;border-radius:8px;letter-spacing:0.5px;">
                📅 Save the Date
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:4px 32px 32px;text-align:center;">
              <p style="margin:0;font-size:13px;color:#666680;">
                Adds the event to your Google Calendar
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 32px;">
              <div style="border-top:1px solid rgba(255,213,0,0.12);"></div>
            </td>
          </tr>

          <!-- Closing message -->
          <tr>
            <td style="padding:24px 32px;text-align:center;">
              <p style="margin:0;font-size:18px;color:#ffffff;font-weight:600;">
                Can't wait to see you there! 🚀
              </p>
              <p style="margin:12px 0 0;font-size:14px;color:#666680;">
                Keep becoming.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0e0e16;padding:20px 32px;text-align:center;border-top:1px solid rgba(255,255,255,0.04);">
              <p style="margin:0;font-size:12px;color:#44445a;">
                Campus to Career 2.0 · ${EVENT_LOCATION_LABEL}
              </p>
              <p style="margin:6px 0 0;font-size:12px;color:#44445a;">
                You received this email because you registered at campustocareer.com
              </p>
            </td>
          </tr>

        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
  <!-- /Wrapper -->

</body>
</html>`;
}

/**
 * Build a single table row for the registration details.
 */
function buildRow(label, value, isAlt) {
  const bg = isAlt ? '#16162220' : '#13131a';
  return `
    <tr style="background-color:${bg};">
      <td style="padding:11px 16px;font-size:13px;color:#888899;font-weight:600;white-space:nowrap;border-bottom:1px solid rgba(255,255,255,0.04);width:110px;">
        ${label}
      </td>
      <td style="padding:11px 16px;font-size:14px;color:#e0e0ee;border-bottom:1px solid rgba(255,255,255,0.04);">
        ${escapeHTML(value)}
      </td>
    </tr>`;
}

/**
 * Escape HTML entities to prevent XSS in email content.
 */
function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Build a plain-text version of the confirmation email (fallback for clients
 * that don't render HTML).
 */
function buildPlainText(name, details) {
  return [
    `Hey ${name.split(' ')[0]}! 🎉`,
    '',
    `Thank you for registering for Campus to Career 2.0!`,
    `Your spot has been secured.`,
    '',
    `--- Your Registration Details ---`,
    `Full Name:  ${name}`,
    `Email:      ${details.email}`,
    `College:    ${details.college}`,
    `Department: ${details.department}`,
    `Level:      ${details.level} Level`,
    `Interest:   ${details.interest}`,
    `Heard From: ${details.heard_from}`,
    '',
    `--- Event Info ---`,
    `📅 ${EVENT_DATE_LABEL} · ${EVENT_TIME_LABEL}`,
    `📍 ${EVENT_LOCATION_LABEL}`,
    `🎯 Theme: ${EVENT_THEME}`,
    '',
    `Save the Date: ${CALENDAR_URL}`,
    '',
    `Can't wait to see you there! 🚀`,
    `Keep becoming.`,
  ].join('\n');
}

/**
 * Send the confirmation email via MailChannels API.
 * Just a simple fetch() POST — no SDK, no npm packages.
 *
 * @param {Object} env          - Cloudflare environment bindings
 * @param {string} email        - Recipient email
 * @param {string} fullName     - Recipient name
 * @param {Object} allDetails   - Full registration form data
 * @returns {Promise<boolean>}  - true if sent, false if skipped/failed
 */
export async function sendConfirmationEmail(env, email, fullName, allDetails) {
  // Graceful fallback: if no API key is configured, log and skip.
  if (!env.MAILCHANNELS_API_KEY) {
    console.log('[Email] MAILCHANNELS_API_KEY not set. Skipping email send.');
    console.log('[Email] Would have sent to:', email);
    return false;
  }

  const html = buildConfirmationHTML(fullName, allDetails);
  const text = buildPlainText(fullName, allDetails);

  try {
    const response = await fetch(MAILCHANNELS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': env.MAILCHANNELS_API_KEY,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: email, name: fullName }],
          },
        ],
        from: {
          email: SENDER_EMAIL,
          name: SENDER_NAME,
        },
        subject: 'Registration Confirmed – Campus to Career 2.0 🎓',
        content: [
          {
            type: 'text/plain',
            value: text,
          },
          {
            type: 'text/html',
            value: html,
          },
        ],
      }),
    });

    if (response.ok || response.status === 202) {
      console.log(`[Email] Confirmation sent to ${email} (${response.status})`);
      return true;
    } else {
      const errorBody = await response.text();
      console.error(`[Email] MailChannels returned ${response.status}: ${errorBody}`);
      return false;
    }
  } catch (err) {
    console.error(`[Email] Failed to send to ${email}:`, err.message || err);
    return false;
  }
}

