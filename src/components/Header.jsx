import { useState } from 'react';

import './Header.css';
import './Modal.css';
import logo from '../assets/logo2-bkg.svg';

function Header() {


  return (
    <header className="header-section">
      <nav className="header-nav">
      <img src={logo} alt="Bean There Logo" className="header-logo" />
        <ul className="header-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/profile">Coffee Shops</a></li>
          <li><a href="/add-review">Add a Review</a></li>
        </ul>

      
      </nav>
    </header>
  );
}

export default Header;
