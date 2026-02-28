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
        <section className="hero">
            <div className="hero-content">

                <h1 className={`hero-title ${loaded ? 'hero-title-loaded' : ''}`}>
                    <span className={`bubble-text-yellow hero-anim-campus ${loaded ? 'hero-anim-in' : ''}`}>CAMPUS</span>
                    <span className={`bubble-text-white-script hero-anim-to ${loaded ? 'hero-anim-in' : ''}`}>To</span>
                    <span className={`bubble-text-yellow hero-anim-career ${loaded ? 'hero-anim-in' : ''}`}>CAREE<span className="career-r">R<GraduationHat className="grad-hat" /></span></span>
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
