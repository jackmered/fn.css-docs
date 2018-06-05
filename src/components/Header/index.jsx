import React from 'react';
import Link from 'gatsby-link';
import logo from './fn-css-logo.png';

const Header = () => (
  <header className="header bg-dark-blue psf t0 l0 w100">
    <div className="container x h100 xac px1-5"> 
      <h1 className="m0 h100">
        <Link to="/" className="tdn cl-white x h100 fwn">
          fn.css
        </Link>
      </h1>
      <nav className="mla h100 x">
        <Link to="/docs" className="tdn cl-white px1 h100 x xac">
          Docs
        </Link>
        <Link to="/examples" className="tdn cl-white px1 h100 x xac">
          Examples
        </Link>
        <a
          href="https://github.com/jackmered/fn.css/releases/tag/2.2.0" 
          target="_blank" 
          rel="noopener" 
          className="tdn cl-white px1 h100 x xac"
        >
          v2.2.0
        </a>
        <a 
          href="https://github.com/jackmered/fn.css" 
          target="_blank" 
          rel="noopener" 
          className="tdn cl-white px1 h100 x xac"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
)

export default Header
