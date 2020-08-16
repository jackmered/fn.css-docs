import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';
import logo from '../../images/fn-css-logo-reverse.svg';

const Header = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <header
      className={classNames('header bg-primary psf t0 l0 w100 pt0-25 md-p0', {
        'pb0-25': !menuOpen,
      })}
    >
      <div className="container x h100 xac px0-5 md-px1-5 xw md-xwn">
        <h1 className="m0">
          <Link to="/" className="tdn cl-white x h100 fwn" title="fn.css">
            <img src={logo} alt="fn.css" width="36" height="36" />
          </Link>
        </h1>
        <button
          type="button"
          class="header-btn cl-white bdw0 bg-primary fs1-5 md-dn mla"
          onClick={() => setmenuOpen(!menuOpen)}
        >
          <i class="typcn typcn-th-menu" />
        </button>
        <nav
          className={classNames(
            'header-menu md-wa mx-0-5 md-mr0 md-mla md-h100 db md-x pt0-5 md-pt0',
            {
              dn: !menuOpen,
            }
          )}
        >
          <Link
            to="/docs"
            className="tdn cl-white bg-primary px1 py0-5 h100 x xac clh-primary bgh-white tdnh"
          >
            Documentation
          </Link>
          <Link
            to="/examples"
            className="tdn cl-white bg-primary px1 py0-5 h100 x xac clh-primary bgh-white tdnh"
          >
            Examples
          </Link>
          <a
            href="https://www.npmjs.com/package/fn.css"
            target="_blank"
            rel="noopener"
            className="tdn cl-white bg-primary px1 py0-5 h100 x xac clh-primary bgh-white tdnh"
          >
            v3.1.0
          </a>
          <a
            href="https://github.com/jackmered/fn.css"
            target="_blank"
            rel="noopener"
            className="tdn cl-white bg-primary px1 py0-5 h100 x xac clh-primary bgh-white tdnh"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
