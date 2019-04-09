import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';

const Examples = () => (
  <Layout>
    <article className="x mx-1-5">
      <section className="c9 px1-5 mt3">
        <h1 className="mt0 fs3">Coming soon</h1>
        <Link to="/" className="cl-dark-blue">Go back to the homepage</Link>
      </section>
    </article>
  </Layout>
);

export default Examples;
