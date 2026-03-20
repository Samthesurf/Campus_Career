import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import entrepreneurSpeakingImg from '../assets/entrepreneur_speaking.jpg';
import { eventDetails } from '../data/eventDetails.js';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* Left Side: Image */}
                <div className="about-image-wrapper">
                    <img src={entrepreneurSpeakingImg} alt="Entrepreneur speaking at event" className="about-image" />
                </div>

                {/* Right Side: Content */}
                <div className="about-content">
                    <h2 className="about-title">
                        <span className="about-label">ABOUT</span>
                        <span className="about-title-main">
                            <span className="bubble-text-yellow">CAMPUS</span>
                            <span className="bubble-text-white-script">To</span>
                            <span className="bubble-text-yellow">CAREER</span>
                        </span>
                    </h2>

                    <p className="about-description">
                        Campus to Career 2.0 is a student-focused career development initiative
                        designed to bridge the gap between academic learning and real-world careers.
                        This year&apos;s theme, &ldquo;The Becoming,&rdquo; emphasizes personal development,
                        continuous growth, personal branding, and the builder&apos;s mindset students need
                        to thrive beyond graduation.
                    </p>

                    <div className="about-facts" aria-label="Event overview">
                        <div className="about-fact">
                            <span className="about-fact-label">Theme</span>
                            <strong>{eventDetails.theme}</strong>
                        </div>
                        <div className="about-fact">
                            <span className="about-fact-label">Date</span>
                            <strong>{eventDetails.shortDateWithYear}</strong>
                        </div>
                        <div className="about-fact">
                            <span className="about-fact-label">Venue</span>
                            <strong>{eventDetails.locationLabel}</strong>
                        </div>
                    </div>

                    <div className="about-actions">
                        <Link to="/register" className="btn-primary about-read-more">
                            Reserve your seat
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
