import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";

const Column = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Column</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".c1",
                  declarations: "width: 8.333333333333332%;",
                },
                {
                  selectors: ".c2",
                  declarations: "width: 16.666666666666664%;",
                },
                {
                  selectors: ".c3",
                  declarations: "width: 25%;",
                },
                {
                  selectors: ".c4",
                  declarations: "width: 33.33333333333333%;",
                },
                {
                  selectors: ".c5",
                  declarations: "width: 41.66666666666667%;",
                },
                {
                  selectors: ".c6",
                  declarations: "width: 50%;",
                },
                {
                  selectors: ".c7",
                  declarations: "width: 58.333333333333336%;",
                },
                {
                  selectors: ".c8",
                  declarations: "width: 66.66666666666666%;",
                },
                {
                  selectors: ".c9",
                  declarations: "width: 75%;",
                },
                {
                  selectors: ".c10",
                  declarations: "width: 83.33333333333334%;",
                },
                {
                  selectors: ".c11",
                  declarations: "width: 91.66666666666666%;",
                },
                {
                  selectors: ".c12",
                  declarations: "width: 100%;",
                },
                {
                  selectors: ".co1",
                  declarations: "margin-left: 8.333333333333332%;",
                },
                {
                  selectors: ".co2",
                  declarations: "margin-left: 16.666666666666664%;",
                },
                {
                  selectors: ".co3",
                  declarations: "margin-left: 25%;",
                },
                {
                  selectors: ".co4",
                  declarations: "margin-left: 33.33333333333333%;",
                },
                {
                  selectors: ".co5",
                  declarations: "margin-left: 41.66666666666667%;",
                },
                {
                  selectors: ".co6",
                  declarations: "margin-left: 50%;",
                },
                {
                  selectors: ".co7",
                  declarations: "margin-left: 58.333333333333336%;",
                },
                {
                  selectors: ".co8",
                  declarations: "margin-left: 66.66666666666666%;",
                },
                {
                  selectors: ".co9",
                  declarations: "margin-left: 75%;",
                },
                {
                  selectors: ".co10",
                  declarations: "margin-left: 83.33333333333334%;",
                },
                {
                  selectors: ".co11",
                  declarations: "margin-left: 91.66666666666666%;",
                },
                {
                  selectors: ".co12",
                  declarations: "margin-left: 100%;",
                },
              ]}
            />

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

export default Column;
