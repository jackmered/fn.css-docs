import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <footer className="bg-primary">
    <div className="container x h100 xac px1-5">
      <nav className="my1-5">
        <Link to="/" className="tdn cl-white h100 x xac">
          Home
        </Link>
        <Link to="/docs" className="tdn cl-white h100 x xac">
          Documentation
        </Link>
        <Link to="/examples" className="tdn cl-white h100 x xac">
          Examples
        </Link>
        <a
          href="https://www.npmjs.com/package/fn.css"
          target="_blank"
          rel="noopener"
          className="tdn cl-white h100 x xac"
        >
          v3.0.0
        </a>
        <a
          href="https://github.com/jackmered/fn.css"
          target="_blank"
          rel="noopener"
          className="tdn cl-white h100 x xac"
        >
          GitHub
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
