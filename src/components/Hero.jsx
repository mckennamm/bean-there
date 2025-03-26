import React from 'react';

import logo from '../assets/logo-dark.png';
// Importing CSS for styling
import './Hero.css';

function Hero() {

    return (
        <div className="hero-section">
            <div className="hero-content">
                <img src={logo} alt="Bean There Logo" className="hero-logo" />
               <h2 className="hero-title">A website for rating coffee shops in Raleigh, North Carolina!</h2>
                <a href="/add-review" className="hero-button">Add a New Review</a>
            </div>
        </div>
    )
}

export default Hero;