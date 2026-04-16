import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import FloatingMascot from '../components/FloatingMascot';
import { eventDetails } from '../data/eventDetails.js';

const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <div className="ambient-glow-bg"></div>
      <div className="ambient-noise"></div>
      <FloatingMascot forceVisible={true} />

      <div className="thankyou-container">
        {/* Success Header */}
        <div className="thankyou-header">
          <div className="thankyou-check-ring">
            <svg className="thankyou-check-icon" viewBox="0 0 52 52">
              <circle className="thankyou-check-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="thankyou-check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>
          <h1 className="thankyou-title">Payment Successful!</h1>
          <p className="thankyou-subtitle">
            Thank you for purchasing your ticket to{' '}
            <span className="thankyou-brand">
              <span className="bubble-text-yellow">CAMPUS</span>
              <span className="bubble-text-white-script">To</span>
              <span className="bubble-text-yellow">CAREER</span>
              <span className="thankyou-version">2.0</span>
            </span>
          </p>
        </div>

        {/* Email Notice */}
        <div className="thankyou-email-notice">
          <div className="email-icon-wrapper">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 className="email-notice-title">Check Your Email Inbox</h2>
          <p className="email-notice-text">
            Your event ticket has been sent to the email address you used during payment. 
            Please check your <strong>inbox</strong> (and <strong>spam/junk</strong> folder just in case).
          </p>
        </div>

        {/* Steps for Event Day */}
        <div className="thankyou-steps">
          <h3 className="steps-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
            How to Get In on Event Day
          </h3>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>Open Your Email</h4>
                <p>On the day of the event, open your email inbox on your phone and locate the ticket from Selar.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>Show Your Ticket</h4>
                <p>Present your ticket (on your phone screen) to the event planners at the entrance.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>Get Scanned &amp; Enter</h4>
                <p>The team will scan your ticket to verify it. Once confirmed, you&apos;re in! Enjoy the event. 🎉</p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Reminder */}
        <div className="thankyou-event-details">
          <div className="event-detail-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>{eventDetails.fullDateLabel}</span>
          </div>
          <div className="event-detail-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span>{eventDetails.locationLabel}</span>
          </div>
          <div className="event-detail-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Doors open at 8:30 AM</span>
          </div>
        </div>

        {/* Actions */}
        <div className="thankyou-actions">
          <Link to="/" className="btn-primary thankyou-btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
