import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="fn.css - Functional shorthand CSS utilities"
      meta={[
        {
          name: 'description',
          content:
            'fn.css is a collection of abbreviated CSS rules composed in such a way to make their meaning obvious.',
        },
      ]}
    >
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={'/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={'/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={'/favicon-16x16.png'}
      />
      <link rel="manifest" href={'/site.webmanifest'} />
      <link rel="mask-icon" href={'/safari-pinned-tab.svg'} color="#1d70b8" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Header />
    <main className="mt3">{children}</main>
    <Footer />
  </div>
);

export default Layout;
