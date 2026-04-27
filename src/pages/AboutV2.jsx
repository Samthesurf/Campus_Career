import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutV2.css';

const AboutV2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-v2-page">
            <div className="ambient-noise"></div>
            
            <div className="about-v2-container">
                <div className="about-v2-header">
                    <h1 className="about-v2-title">
                        <span className="about-v2-label">ABOUT</span>
                        <span className="about-v2-title-main">
                            <span className="bubble-text-yellow">v2.0</span>
                        </span>
                    </h1>
                </div>

                <div className="about-v2-content">
                    <p className="about-v2-paragraph">
                        Campus to Career 2.0 is a career development initiative designed to bridge the gap between academic learning and real-world professional careers. It brings together students, industry professionals, employers, and corporate organizations on a single platform. The program aims to prepare students for life after graduation by exposing them to real industry expectations and workplace standards.
                    </p>

                    <p className="about-v2-paragraph">
                        Through mentorship, networking, and knowledge sharing, students gain insights that help them make better career decisions. The initiative also focuses on building essential employability and professional skills needed in today's competitive job market. Participants will have opportunities to interact directly with professionals and potential employers. The event will feature keynote sessions, panel discussions, workshops, and networking activities.
                    </p>

                    <p className="about-v2-paragraph">
                        These engagements will help students understand different career paths and opportunities available to them. It also encourages internships, entrepreneurship, and professional development among young talents. Overall, Campus to Career 2.0 empowers students with the exposure, skills, and connections needed to transition successfully from campus to the professional world.
                    </p>
                </div>

                <div className="about-v2-actions">
                    <Link to="/" className="btn-secondary about-v2-action-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '0.5rem'}}><path d="m15 18-6-6 6-6"/></svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutV2;
