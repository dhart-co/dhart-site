import React from 'react';

import BackgroundBalls from '../components/LandingPage/BackgroundBalls';
import Logo from '../assets/logo-hero.png';
import './LandingPage.css';

const LandingPage: React.FC = () => {
    return (
        <div>
            <BackgroundBalls />
            <div className='landing-page-hero'>
                <div className="left-block">
                    <div className="hero-text">
                        <p className="intro">We are</p>
                        <p className="company-name">DHART</p>
                        <p className="intro">A Software Development Startup 
                            focused on quality and innovation.</p>
                    </div>
                </div>
                <div className="right-block">
                    <img src={Logo} alt="Company Logo"/>
                </div>
            </div>
            <section className='soon-section'>
                <div className='soon-container'>
                    <h2>Coming Soon</h2>
                    <p>Our website is currently under construction. Please check back later.</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;