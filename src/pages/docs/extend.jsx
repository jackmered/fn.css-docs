import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';
import { CopyBlock, atomOneLight } from 'react-code-blocks';

const cssCode = `:root {
  /* Spacer properties used for margin and padding css rules */
  --fn-spacer0-25x: calc(var(--fn-spacer) * 0.25);
  --fn-spacer0-5x: calc(var(--fn-spacer) * 0.5);
  --fn-spacer: 1rem;
  --fn-spacer1-5x: calc(var(--fn-spacer) * 1.5);
  --fn-spacer2x: calc(var(--fn-spacer) * 2);
  --fn-spacer3x: calc(var(--fn-spacer) * 3);
  --fn-font-size: 1rem;

  /* Colors used for color css rules */
  --fn-white: #fff;
  --fn-body: #000;
  --fn-primary: #1d70b8;
  --fn-secondary: #b1b4b6;
  --fn-success: #00703c;
  --fn-info: #5694ca;
  --fn-warning: #fd0;
  --fn-danger: #d4351c;
  --fn-light: #f5f6fa;
  --fn-dark: #212529;
}`;

const cssCodeExample = `:root {
  --fn-primary: #ff69b4;
}

/* fn.css will now output the following with the updated custom property */
.cl-primary {
  color: var(--fn-primary);
}
`;

const scssCode = `// Grid breakpoints
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
) !default;

// Colors
$white: #fff !default;
$black: #000 !default;
$red: #d4351c !default;
$blue: #1d70b8 !default;
$blue-light: #5694ca !default;
$green: #00703c !default;
$yellow: #fd0 !default;
$gray: #b1b4b6 !default;
$gray-light: #f5f6fa !default;
$gray-dark: #212529 !default;

// Theme colors
$body: $black !default;
$primary: $blue !default;
$secondary: $gray !default;
$success: $green !default;
$info: $blue-light !default;
$warning: $yellow !default;
$danger: $red !default;
$light: $gray-light !default;
$dark: $gray-dark !default;

// Theme colors map
$theme-colors: (
  'white': $white,
  'body': $body,
  'primary': $primary,
  'secondary': $secondary,
  'success': $success,
  'info': $info,
  'warning': $warning,
  'danger': $danger,
  'light': $light,
  'dark': $dark,
) !default;

// Spacers
$spacer: 1rem !default;
$spacers: (
  0: 0,
  1: $spacer * 0.25,
  2: $spacer * 0.5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 2,
  6: $spacer * 3,
) !default;
`;

const scssCodeExample = `// Import fn.css
@import 'node_modules/fn.css/scss/fn';

// Lets add a xxl breakpoint
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1440px,
);
`;

const Extend = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Extend</h1>
            <p>
              fn.css is built with a set of variables that can be tweaked to
              match your specifications.
            </p>
            <h3>Extend with CSS</h3>
            <p>fn.css contains the following CSS custom properties:</p>
            <div className="mb1">
              <CopyBlock text={cssCode} language="css" theme={atomOneLight} />
            </div>
            <h4>Example of extending with CSS</h4>
            <p>
              In this example we change the primary color which will update the
              related class rules.
            </p>
            <div className="mb1">
              <CopyBlock
                text={cssCodeExample}
                language="css"
                theme={atomOneLight}
              />
            </div>
            <h3>Extend with SCSS</h3>
            <p>
              If you are using SCSS you have the option of customising the
              following:
            </p>
            <ul>
              <li>
                The breakpoints (sm, md, lg &amp; xl). You have the flexibilty
                to add new ones or remove them all entirely.
              </li>
              <li>
                Theme colors that are pulled into the color CSS rules. Unlike
                the custom CSS properties you can add new theme colors or remove
                them from the SASS map.
              </li>
              <li>Spacer values used for margin and padding.</li>
            </ul>
            <div className="mb1">
              <CopyBlock text={scssCode} language="scss" theme={atomOneLight} />
            </div>
            <h4>Example of extending with SCSS</h4>
            <p>
              In the example below we add a xxl breakpoint. This will mean we
              can use classes such as <code>.xxl-p1</code> and{' '}
              <code>.xxl-fwb</code>.
            </p>
            <div className="mb1">
              <CopyBlock
                text={scssCodeExample}
                language="scss"
                theme={atomOneLight}
              />
            </div>
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

export default Extend;
