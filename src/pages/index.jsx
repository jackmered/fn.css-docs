import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import logo from '../images/fn-css-logo.svg';

const IndexPage = () => (
  <Layout>
    <div class="bg-white py3 mb2">
      <section className="container px0-5 md-px1-5 tac">
        <h1 class="mb2">
          <img src={logo} alt="fn.css logo" width="128" />
        </h1>
        <h2>Functional shorthand CSS utilities</h2>
        <p>
          fn.css is a collection of abbreviated CSS rules composed in such a way
          to make their meaning obvious.
        </p>
        <p>If you know CSS, you know fn.css.</p>
        <p className="mt2">
          <a
            href="https://github.com/jackmered/fn.css/blob/master/dist/fn.css"
            target="_blank"
            rel="noopener"
            role="button"
            className="dib py1 px1-5 mb0-5 mx0-5 tdn ttu fwb bdrd0-25 lh1 bg-success cl-white bgh-white clh-success bd bd-success bs4"
          >
            Download
          </a>
          <Link
            to="/docs/getting-started"
            className="dib py1 px1-5 mb0-5 mx0-5 tdn ttu fwb bdrd0-25 lh1 bg-primary cl-white bgh-white clh-primary bd bd-primary bs4"
            role="button"
          >
            Get started
          </Link>
        </p>
        <code className="db p0-5 bg-light c6 mxa mb1">npm install fn.css</code>
        <code className="db p0-5 bg-light c6 mxa">yarn add fn.css</code>
      </section>
    </div>
    <div class="bg-light py3 mb2">
      <section className="container px0-5 md-px1-5 tac">
        <h2 className="mb2">What are the benefits of using fn.css?</h2>
        <div className="md-x">
          <div className="md-c3 md-px1">
            <i className="typcn icon typcn-plane fs3" />
            <h3>Develop UIs FAST</h3>
            <p>
              Stop spending time repeating the same CSS and embrace rapid atomic
              component styling.
            </p>
          </div>
          <div className="md-c3 md-px1">
            <i className="typcn icon typcn-arrow-minimise fs3" />
            <h3>Tiny style sheets</h3>
            <p>
              Less CSS rule overlap combined with&nbsp;
              <a
                href="https://github.com/uncss/uncss"
                target="_blank"
                rel="noopener"
              >
                uncss
              </a>{' '}
              or&nbsp;
              <a
                href="https://www.purgecss.com/"
                target="_blank"
                rel="noopener"
              >
                purgecss
              </a>
              &nbsp;results in really small style sheets.
            </p>
          </div>
          <div className="md-c3 md-px1">
            <i className="typcn icon typcn-brush fs3" />
            <h3>Design consistency</h3>
            <p>
              A rigid set of sizing variables sets the foundation for consistent
              templates.
            </p>
          </div>
          <div className="md-c3 md-px1">
            <i className="typcn icon typcn-flash fs3" />
            <h3>Iterate safely</h3>
            <p>
              No longer need to keep legacy styling out of fear of breaking
              older forgotten components.
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="bg-white py3 mb2">
      <section className="container px0-5 md-px1-5 tac">
        <h2 className="mb2">
          Why could fn.css be preferable to other functional frameworks?
        </h2>
        <div className="md-x">
          <div className="md-c6 md-px1">
            <i className="typcn icon typcn-mortar-board fs3" />
            <h4>Minimal ambiguity</h4>
            <p>
              Unlike other frameworks class names are mapped to actual
              properties. You don't have to learn the framework, you should be
              able to guess.
            </p>
          </div>
          <div className="md-c6 md-px1">
            <i className="typcn icon typcn-spanner fs3" />
            <h4>Written in simple CSS</h4>
            <p>
              Don't want to waste time configuring? Just use "as is" and extend
              with vanilla CSS variables.
            </p>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
