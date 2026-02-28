import React, { useEffect, useState } from 'react';
import './Hero.css';
import GraduationHat from './GraduationHat';

const Hero = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="hero">
            <div className="hero-content">

                {/* Event info bar above the title */}
                <div className={`event-info-bar ${loaded ? 'hero-anim-in' : ''}`}>
                    <div className="event-info-hat-only">
                        <GraduationHat />
                    </div>

                    <div className="event-info-bubble">
                        <div className="event-info-bubble-content">
                            <span className="event-info-bubble-line">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                Saturday 11th April
                            </span>
                            <span className="event-info-bubble-line">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Afe Babalola University
                            </span>
                        </div>
                    </div>
                </div>

                <h1 className={`hero-title ${loaded ? 'hero-title-loaded' : ''}`}>
                    <span className={`bubble-text-yellow hero-anim-campus ${loaded ? 'hero-anim-in' : ''}`}>CAMPUS</span>
                    <span className={`bubble-text-white-script hero-anim-to ${loaded ? 'hero-anim-in' : ''}`}>To</span>
                    <span className={`bubble-text-yellow hero-anim-career ${loaded ? 'hero-anim-in' : ''}`}>CAREE<span className="career-r">R<GraduationHat className="grad-hat" /></span></span>
                    <span className={`hero-version ${loaded ? 'hero-anim-in' : ''}`}>2.0</span>
                </h1>

                <p className={`hero-tagline ${loaded ? 'hero-tagline-in' : ''}`}>
                    BUILD YOUR FUTURE, CHANGE YOUR MINDSET, POSITION YOURSELF
                </p>

                {/* TODO: use this text later elsewhere 
                <p className="hero-subtitle">
                    The event helping students prepare for careers and life outside school.
                </p>
                */}
            </div>
        </section>
    );
};

export default Hero;
