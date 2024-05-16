import React from 'react';

import './Footer.css';
import Logo from '../../assets/logo.svg';
import Instagram from '../../assets/instagram-icon.svg';
import Linkedin from '../../assets/linkedin-icon.svg';

const url =  window.location.href;;

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <a href={url} className="footer-logo">
                        <img src={Logo} alt="Company Logo"/>
                        <h1>DHART</h1>
                    </a>
                </div>
                <div className="footer-socials">
                    <a href="https://www.instagram.com/dhart.co" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/company/dhart-co/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="Linkedin"/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;