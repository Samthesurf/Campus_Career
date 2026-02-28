import React from 'react';
import './About.css';
import entrepreneurSpeakingImg from '../assets/entrepreneur_speaking.jpg';

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
                        Campus to Career is an event designed to bridge the gap between academic
                        life and professional success. We bring together student leaders, entrepreneurs,
                        and mentors to share real-world insights with students, helping them build
                        their futures, change their mindsets, and position themselves for greatness.
                    </p>

                    <button className="btn-secondary about-read-more">
                        Read about the 2.0
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
