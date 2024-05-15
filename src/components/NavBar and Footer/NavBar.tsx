import React from 'react';

import './NavBar.css';
import Logo from '../../assets/logo.svg';
import Linkedin from '../../assets/linkedin-icon.svg';
import Instagram from '../../assets/instagram-icon.svg';

const NavBar: React.FC = () => {
    return (
        <nav className='navbar-container'>
            <div className="navbar-logo-name-container">
                <a href="/" className="navbar-logo-name-container">
                    <img src={Logo} alt="Logo" />
                    <h1>DHART</h1>
                </a>
            </div>
            <div className='navbar-right-container'> 
                <div className="navbar-routes-container">
                    <a href="/">Home</a>
                    <a href="/">Our Portfolio</a>
                    <a href="/">Who We Are</a>
                    <a href="/">Contact Us</a>
                </div>
                <div className="navbar-links-container">
                    <a href="https://linkedin.com/company/dhart-co"><img src={Linkedin} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/dhart.co/"><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;