import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="fn.css - Functional shorthand CSS utilities"
      meta={[
        {
          name: "description",
          content:
            "Responsive functional shorthand CSS utilities written in PostCSS",
        },
      ]}
    />
    <Header />
    <main className="mt3">{children}</main>
    <Footer />
  </div>
);

export default Layout;
