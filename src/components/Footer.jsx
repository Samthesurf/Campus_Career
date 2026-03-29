import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/FRONT BLACK.png';
import { calendarUrl, eventDetails } from '../data/eventDetails.js';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/register') {
    return (
      <footer className="site-footer simple-footer">
        <div className="ambient-noise"></div>
        <div className="footer-bottom-bar simple-bottom-bar">
          <p>&copy; 2026 Campus to Career. All Rights Reserved.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/campustocareer_abuad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="site-footer">
      <div className="ambient-noise"></div>
      
      <div className="footer-cta-container">
        <h2 className="footer-cta-title">
          <span className="footer-cta-ready">Ready to go from</span>
          <span className="footer-cta-brand">
            <span className="bubble-text-yellow">CAMPUS</span>
            <span className="bubble-text-white-script" style={{margin: '0 0.7rem'}}>To</span>
            <span className="bubble-text-yellow">CAREER</span>
            <span className="footer-cta-question">?</span>
          </span>
        </h2>
        <div className="footer-cta-buttons">
          <Link to="/register" className="btn-primary footer-cta-btn">
            Register
          </Link>
          <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary footer-cta-btn-outline">
            Save the Date
          </a>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand-col">
          <img src={logo} alt="Campus to Career" className="footer-logo" />
          <div className="footer-contact-info">
            <div className="footer-location">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {eventDetails.locationLabel}
            </div>
            <div className="footer-phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              (+234) 808 072 1572
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://www.instagram.com/campustocareer_abuad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-nav-col">
            <h4 className="footer-col-header">NAVIGATE</h4>
            <ul className="footer-link-list">
              <li><a href="/#hero">Top</a></li>
              <li><a href="/#highlights">Highlights</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="/#speakers">Speakers</a></li>
              <li><a href="/#activities">Activities</a></li>
            </ul>
          </div>
          
          <div className="footer-nav-col">
            <h4 className="footer-col-header">PROOF</h4>
            <ul className="footer-link-list">
              <li><a href="/#testimonials">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>&copy; 2026 Campus to Career. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
