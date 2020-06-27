import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

const LayoutSidebar = ({ title, sidebar, children }) => (
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
    <main className="mt3">
      <div class="bg-white mb2">
        <section className="container px1-5">
          <article className="x mx-1-5">
            <section className="md-c9 px1-5 mt3">
              <h1 className="mt0 fs3">{title}</h1>
              {children}
            </section>
            <aside className="md-c3 px1-5">{sidebar}</aside>
          </article>
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default LayoutSidebar;
