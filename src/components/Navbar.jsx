import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/FRONT BLACK.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const heroHeight = window.innerHeight;

            // Add frosted backdrop once past hero
            setScrolled(currentY > heroHeight * 0.15);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navClass = [
        'navbar',
        scrolled ? 'navbar-scrolled' : '',
    ].filter(Boolean).join(' ');

    return (
        <nav className={navClass}>
            <div className="navbar-logo">
                <Link to="/" aria-label="Go to hero section">
                    <img src={logo} alt="Campus Career Logo" className="logo-img" />
                </Link>
            </div>
            
            <div className={`navbar-menu-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul className="navbar-links">
                    <li><a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
                    <li><a href="/#speakers" onClick={() => setMobileMenuOpen(false)}>Speakers</a></li>
                    <li><a href="/#hero" onClick={() => setMobileMenuOpen(false)}>Activities</a></li>
                </ul>
                <div className="navbar-actions">
                    <button className="btn-secondary">Become a Sponsor</button>
                    <Link to="/register">
                        <button className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Register</button>
                    </Link>
                </div>
            </div>

            <button className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle menu">
                {mobileMenuOpen ? (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                )}
            </button>
        </nav>
    );
};

export default Navbar;
