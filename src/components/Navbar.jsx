import React from 'react';
import './Navbar.css';
import logo from '../../assets/FRONT BLACK.png'; // Need to link this properly

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Campus Career Logo" className="logo-img" />
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#schedule">Schedule</a></li>
            </ul>
            <div className="navbar-actions">
                <button className="btn-primary">Register</button>
            </div>
        </nav>
    );
};

export default Navbar;
