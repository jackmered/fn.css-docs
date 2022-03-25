import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';

const GettingStarted = () => (
  <Layout>
    <div className="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Getting started</h1>
            <p>Its easy to get up and running with fn.css:</p>
            <h3>CDN Link</h3>
            <p>You can find a CDN link below:</p>
            <p>
              <a href="https://unpkg.com/fn.css@4.2.0/dist/fn.min.css">
                https://unpkg.com/fn.css@4.2.0/dist/fn.min.css
              </a>
            </p>
            <p>
              Its recommended to add as the last stylesheet to ensure style
              priority.
            </p>
            <h3>Package manager</h3>
            <p>
              The npm package is{' '}
              <code className="bg-light dib py0-25 px0-5">fn.css</code>
              &nbsp;and can be installed as below:
            </p>
            <code className="db p0-5 bg-light mb1 tac">npm install fn.css</code>
            <p>
              Again, its recommended to be imported as the last stylesheet to
              ensure style priority.
            </p>
          </section>
          <aside className="md-c3 px1-5">
            <nav className="psf w100 full-height bg-light pt3">
              <div className="c3 px1">
                <Link
                  to="/docs/getting-started"
                  className="db tdn p0-5 cl-black"
                >
                  Getting started
                </Link>
                <Link to="/docs/rules" className="db tdn p0-5 cl-black">
                  CSS rules
                </Link>
                <Link to="/docs/extend" className="db tdn p0-5 cl-black">
                  Extend
                </Link>
              </div>
            </nav>
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default GettingStarted;
