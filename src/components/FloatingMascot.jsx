import React, { useState, useEffect } from 'react';
import './FloatingMascot.css';
import GraduationHat from './GraduationHat';
import { eventDetails } from '../data/eventDetails.js';

const FloatingMascot = ({ forceVisible = false }) => {
    const [visible, setVisible] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        if (forceVisible) {
            return;
        }

        const handleScroll = () => {
            // Show when scrolled past ~80% of viewport height (hero)
            setVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, [forceVisible]);

    const isVisible = forceVisible || visible;

    return (
        <div
            className={`floating-mascot ${isVisible ? 'mascot-visible' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="mascot-hat-circle">
                <GraduationHat />
            </div>

            <div className={`mascot-bubble ${hovered ? 'mascot-bubble-show' : ''}`}>
                <div className="mascot-bubble-content">
                    <span className="mascot-bubble-line">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        {eventDetails.shortDateLabel}
                    </span>
                    <span className="mascot-bubble-line">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                        {eventDetails.locationLabel}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FloatingMascot;
