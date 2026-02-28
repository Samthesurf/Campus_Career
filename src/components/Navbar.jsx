import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/FRONT BLACK.png';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const heroHeight = window.innerHeight;

            // Add frosted backdrop once past hero
            setScrolled(currentY > heroHeight * 0.15);

            // Only do hide/show logic once past hero
            if (currentY > heroHeight * 0.8) {
                const delta = currentY - lastScrollY.current;
                if (delta > 10) {
                    // Scrolling down → hide
                    setHidden(true);
                } else if (delta < -10) {
                    // Scrolling up → show
                    setHidden(false);
                }
            } else {
                // Still in hero area → always show
                setHidden(false);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navClass = [
        'navbar',
        hidden ? 'navbar-hidden' : '',
        scrolled ? 'navbar-scrolled' : '',
    ].filter(Boolean).join(' ');

    return (
        <nav className={navClass}>
            <div className="navbar-logo">
                <a href="#hero" aria-label="Go to hero section">
                    <img src={logo} alt="Campus Career Logo" className="logo-img" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li><a href="#activities">Activities</a></li>
            </ul>
            <div className="navbar-actions">
                <button className="btn-primary">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
