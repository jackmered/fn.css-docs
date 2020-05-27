import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";

const Rules = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">CSS Rules</h1>
            <p>
              Below are all of the shorthand functional CSS rules for easy
              reference. Generally speaking all rules are composed by the first
              letter in each of the properties words. As an example
              "vertical-align: middle;" would become ".vam". However due to the
              vast amount of CSS properties this method is occasionally twisted.
            </p>
            <br />
            <Link to="/">Go back to the homepage</Link>
          </section>
          <aside className="md-c3 px1-5">
            <nav className="psf w100 full-height bg-light pt3 oys">
              <div className="c3 px1">
                <a href="/docs/rules/colors" className="db tdn p0-5 cl-black">
                  Colors
                </a>
                <a
                  href="/docs/rules/background"
                  className="db tdn p0-5 cl-black"
                >
                  Background
                </a>
                <a href="/docs/rules/border" className="db tdn p0-5 cl-black">
                  Border
                </a>
                <a href="/docs/rules/column" className="db tdn p0-5 cl-black">
                  Column
                </a>
                <a href="/docs/rules/cursor" className="db tdn p0-5 cl-black">
                  Cursor
                </a>
                <a href="/docs/rules/display" className="db tdn p0-5 cl-black">
                  Display
                </a>
                <a href="/docs/rules/flex" className="db tdn p0-5 cl-black">
                  Flex
                </a>
                <a href="/docs/rules/float" className="db tdn p0-5 cl-black">
                  Float
                </a>
                <a href="/docs/rules/list" className="db tdn p0-5 cl-black">
                  List
                </a>
                <a href="/docs/rules/margin" className="db tdn p0-5 cl-black">
                  Margin
                </a>
                <a
                  href="/docs/rules/negative-margin"
                  className="db tdn p0-5 cl-black"
                >
                  Negative margin
                </a>
                <a href="/docs/rules/opacity" className="db tdn p0-5 cl-black">
                  Opacity
                </a>
                <a href="/docs/rules/overflow" className="db tdn p0-5 cl-black">
                  Overflow
                </a>
                <a href="/docs/rules/padding" className="db tdn p0-5 cl-black">
                  Padding
                </a>
                <a
                  href="/docs/rules/positioning"
                  className="db tdn p0-5 cl-black"
                >
                  Positioning
                </a>
                <a href="/docs/rules/sizing" className="db tdn p0-5 cl-black">
                  Sizing
                </a>
                <a
                  href="/docs/rules/typography"
                  className="db tdn p0-5 cl-black"
                >
                  Typography
                </a>
                <a
                  href="/docs/rules/visibility"
                  className="db tdn p0-5 cl-black"
                >
                  Visibility
                </a>
              </div>
            </nav>
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Rules;
