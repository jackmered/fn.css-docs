import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from "react-helmet";

import Header from '../Header';
// import Footer from '../Footer';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="fn.css - Functional shorthand CSS utilities"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <main className="mt3">
      {children}
    </main>
  </div>
)

export default Layout;
