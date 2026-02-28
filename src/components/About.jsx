import React from 'react';
import './About.css';
import speakHallImg from '../assets/Speak_hall_event.png';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                {/* Left Side: Image */}
                <div className="about-image-wrapper">
                    <img src={speakHallImg} alt="Speaking at Campus to Career event" className="about-image" />
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
                </div>
            </div>
        </section>
    );
};

export default About;
