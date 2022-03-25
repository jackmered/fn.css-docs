import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <footer className="bg-primary">
    <div className="container x h100 xac px1-5">
      <nav className="my1-5">
        <Link to="/" className="tdn cl-white h100 x xac clh-white">
          Home
        </Link>
        <Link to="/docs" className="tdn cl-white h100 x xac clh-white">
          Documentation
        </Link>
        <a
          href="https://github.com/jackmered/fn.css/releases"
          target="_blank"
          rel="noopener"
          className="tdn cl-white h100 x xac clh-white"
        >
          GitHub
        </a>
        <p className="cl-white mt0-5 mb0">&copy; {new Date().getFullYear()} fn.css</p>
      </nav>
    </div>
  </footer>
);

export default Footer;
