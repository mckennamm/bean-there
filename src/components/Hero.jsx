import React from 'react';

import heroPhoto from '../assets/hero-photo.JPG';
import logo from '../assets/logo-dark.png';
// Importing CSS for styling
import './Hero.css';

function Hero() {

    return (
        <div className="hero-section">
            <div className="hero-content">
                {/* <img src={logo} alt="Bean There Logo" className="hero-logo" /> */}
                {/* <img src={heroPhoto} alt="Hero" className="hero-image" /> */}
               <h2 className="hero-title">Ranking coffee shops in Raleigh, North Carolina!</h2>
                <a href="/about" className="hero-button">About Us</a>
            </div>
        </div>
    )
}

export default Hero;