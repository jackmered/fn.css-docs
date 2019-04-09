import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/Layout';
import boyImage from '../images/boy.svg';

const IndexPage = () => (
  <Layout>
    <div class="bg-white py3 mb2">
      <section className="container px1-5 tac">
        <h1 className="fs6 fwn">fn.css</h1>
        <h2>Functional shorthand CSS utilities</h2>
        <p>
          fn.css is a collection of abbreviated CSS rules composed in such a way to make
          their meaning obvious.
        </p>
        <p>
          If you know CSS, you know fn.css.
        </p>
        <p className="mt2">
          <a
            href="https://github.com/jackmered/fn.css/blob/master/dist/fn.css"
            target="_blank"
            rel="noopener"
            role="button"
            className="dib p1 tdn ttu fwb bdrd0-25 lh1 bg-green cl-white bgh-dark-green clh-white"
          >
            Download
          </a>
        </p>
        <code className="db p0-5 bg-light c6 mxa">npm install fn.css</code>
      </section>
    </div>
    <div class="bg-light py3 mb2">
      <section className="container px1-5">
        <div className="x mx-1-5">
          <div class="c4 px1-5">
            <img src={boyImage} alt="Cartoon of smiling boy on a laptop" class="db" />
          </div>
          <div class="c8 px1-5">
            <h2>What are the benefits of using fn.css?</h2>
            <h4>Develop UIs FAST</h4>
            <p>Stop spending time repeating the same CSS and embrace rapid atomic component styling.</p>
            <h4>Tiny style sheets</h4>
            <p>
              Less CSS rule overlap combined with&nbsp;
              <a href="https://github.com/uncss/uncss" target="_blank" rel="noopener">uncss</a> or&nbsp;
              <a href="https://www.purgecss.com/" target="_blank" rel="noopener">purgecss</a>&nbsp;results in really small style sheets.
            </p>
            <h4>Design consistency</h4>
            <p>A rigid set of sizing variables sets the foundation for consistent templates.</p>
            <h4>Free yourself from legacy styling bloat</h4>
            <p>Keeping legacy styling out of fear of breaking websites does not apply to fn.css.</p>
          </div>
        </div>
      </section>
    </div>
    <div class="bg-white py3 mb2">
      <section className="container px1-5">
        <div className="x mx-1-5">
          <div class="c8 px1-5">
            <h2>What makes fn.css better than other functional framework X? (Tachyons, Tailwind)</h2>
            <h4>Mininal ambiguity</h4>
            <p>Unlike other frameworks class names are mapped to actual properties. You don't have to learn the framework, you should be able to guess.</p>
            <h4>Written is simple CSS</h4>
            <p>Don't want to waste time configuring? Just use as is and extend with vanilla CSS variables</p>
          </div>
          <div class="c4 px1-5">
            <img src={boyImage} alt="Cartoon of smiling boy on a laptop" class="db" />
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
