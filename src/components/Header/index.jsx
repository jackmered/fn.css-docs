import React from "react";
import Link from "gatsby-link";
import logo from "../../images/fn-css-logo-reverse.svg";

const Header = () => (
  <header className="header bg-primary psf t0 l0 w100">
    <div className="container x h100 xac px1-5">
      <h1 className="m0">
        <Link to="/" className="tdn cl-white x h100 fwn">
          <img src={logo} alt="fn.css" width="40" height="40" />
        </Link>
      </h1>
      <nav className="mla h100 x">
        <Link
          to="/docs"
          className="tdn cl-white bg-primary px1 h100 x xac clh-primary bgh-white tdnh"
        >
          Documentation
        </Link>
        <Link
          to="/examples"
          className="tdn cl-white bg-primary px1 h100 x xac clh-primary bgh-white tdnh"
        >
          Examples
        </Link>
        <a
          href="https://www.npmjs.com/package/fn.css"
          target="_blank"
          rel="noopener"
          className="tdn cl-white bg-primary px1 h100 x xac clh-primary bgh-white tdnh"
        >
          v3.1.0
        </a>
        <a
          href="https://github.com/jackmered/fn.css"
          target="_blank"
          rel="noopener"
          className="tdn cl-white bg-primary px1 h100 x xac clh-primary bgh-white tdnh"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
