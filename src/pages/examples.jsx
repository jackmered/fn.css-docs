import React from 'react';
import Link from 'gatsby-link';
import LayoutSidebar from '../components/LayoutSidebar';
import Alert from '../components/Alert';

const ExamplesSidebar = () => (
  <nav className="md-psf w100 full-height bg-light pt3 md-oys">
    <div className="md-c3 md-px1">
      <a href="/docs/rules/background" className="db tdn md-p0-5 cl-black">
        Float Grid
      </a>
      <a href="/docs/rules/border" className="db tdn md-p0-5 cl-black">
        Flexbox Grid
      </a>
      <a href="/docs/rules/colors" className="db tdn md-p0-5 cl-black">
        Buttons
      </a>
    </div>
  </nav>
);

const Examples = () => (
  <LayoutSidebar title="Examples" sidebar={<ExamplesSidebar />}>
    <p>
      Here are examples of components you can build with fn.css. These are just
      examples, you can build anything with fn.css.
    </p>
    <Alert type="warning">
      Examples are a work in progress, check back later
    </Alert>
    <h2>Float based grid</h2>
    <div className="cf">
      <div className="c1 fl p0-25 bg-light bd bd-primary">.c1.fl</div>
      <div className="c11 fl p0-25 bg-light bd bd-primary">.c11.fl</div>
    </div>
    <div className="cf">
      <div className="c2 fl p0-25 bg-light bd bd-primary">.c2.fl</div>
      <div className="c10 fl p0-25 bg-light bd bd-primary">.c0.fl</div>
    </div>
    <div className="cf">
      <div className="c3 fl p0-25 bg-light bd bd-primary">.c13.fl</div>
      <div className="c9 fl p0-25 bg-light bd bd-primary">.c9.fl</div>
    </div>
    <div className="cf">
      <div className="c4 fl p0-25 bg-light bd bd-primary">.c4.fl</div>
      <div className="c8 fl p0-25 bg-light bd bd-primary">.c8.fl</div>
    </div>
    <div className="cf">
      <div className="c5 fl p0-25 bg-light bd bd-primary">.c5.fl</div>
      <div className="c7 fl p0-25 bg-light bd bd-primary">.c7.fl</div>
    </div>
    <div className="cf">
      <div className="c6 fl p0-25 bg-light bd bd-primary">.c6.fl</div>
      <div className="c6 fl p0-25 bg-light bd bd-primary">.c6.fl</div>
    </div>

    <h2 className="mt1-5">Flexbox based grid</h2>
    <div className="x">
      <div className="c1 p0-25 bg-light bd bd-primary">.c1</div>
      <div className="c11 p0-25 bg-light bd bd-primary">.c11</div>
    </div>
    <div className="x">
      <div className="c2 p0-25 bg-light bd bd-primary">.c2</div>
      <div className="c10 p0-25 bg-light bd bd-primary">.c10</div>
    </div>
    <div className="x">
      <div className="c3 p0-25 bg-light bd bd-primary">.c3</div>
      <div className="c9 p0-25 bg-light bd bd-primary">.c9</div>
    </div>
    <div className="x">
      <div className="c4 p0-25 bg-light bd bd-primary">.c4</div>
      <div className="c8 p0-25 bg-light bd bd-primary">.c8</div>
    </div>
    <div className="x">
      <div className="c5 p0-25 bg-light bd bd-primary">.c5</div>
      <div className="c7 p0-25 bg-light bd bd-primary">.c7</div>
    </div>
    <div className="x">
      <div className="c6 p0-25 bg-light bd bd-primary">.c6</div>
      <div className="c6 p0-25 bg-light bd bd-primary">.c6</div>
    </div>

    <h2 className="mt1-5">Buttons</h2>
    <a
      href="#"
      role="button"
      className="dib py0-5 px1-5 mb0-5 tdn ttu fwb bdrd0-25 lh1 bg-primary cl-white bgh-white clh-primary bd bd-primary bs4"
    >
      Button
    </a>
    <code className="db">
      class="dib py1 px1-5 mb0-5 tdn ttu fwb bdrd0-25 lh1 bg-primary cl-white
      bgh-white clh-primary bd bd-success bs4"
    </code>
    <a
      href="#"
      role="button"
      className="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-875 bdrd0-25 lh1 bg-danger cl-white bgh-white clh-danger bd bd-danger bs4"
    >
      Button
    </a>
    <code className="db">
      class="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-875 bdrd0-25 lh1 bg-danger
      cl-white bgh-white clh-danger bd bd-danger bs4"
    </code>
    <a
      href="#"
      role="button"
      className="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-75 bdrd0-25 lh1 bg-success cl-white bgh-white clh-success bd bd-success bs4"
    >
      Button
    </a>
    <code className="db">
      class="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-75 bdrd0-25 lh1 bg-success
      cl-white bgh-white clh-success bd bd-success bs4"
    </code>
  </LayoutSidebar>
);

export default Examples;
