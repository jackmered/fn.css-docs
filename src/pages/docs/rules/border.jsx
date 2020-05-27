import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";

const Border = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Border</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".bd",
                  declarations: "border-style: solid;border-width: 1px;",
                },
                {
                  selectors: ".bdt",
                  declarations:
                    "border-top-style: solid;border-top-width: 1px;",
                },
                {
                  selectors: ".bdr",
                  declarations:
                    "border-right-style: solid;border-right-width: 1px;",
                },
                {
                  selectors: ".bdb",
                  declarations:
                    "border-bottom-style: solid;border-bottom-width: 1px;",
                },
                {
                  selectors: ".bdl",
                  declarations:
                    "border-left-style: solid;border-left-width: 1px;",
                },
                {
                  selectors: ".bdw0",
                  declarations: "border-width: 0;",
                },
                {
                  selectors: ".bdw0-25",
                  declarations: "border-width: 0.0625rem;;",
                },
                {
                  selectors: ".bdw0-5",
                  declarations: "border-width: 0.125rem;",
                },
                {
                  selectors: ".bdw1",
                  declarations: "border-width: 0.25rem;",
                },
                {
                  selectors: ".bdw2",
                  declarations: "border-width: 0.5rem;",
                },
                {
                  selectors: ".bdw3",
                  declarations: "border-width: 0.75rem;",
                },
                {
                  selectors: ".bdw4",
                  declarations: "border-width: 1rem;",
                },
                {
                  selectors: ".bdrd0-125",
                  declarations: "border-radius: 0.125rem;",
                },
                {
                  selectors: ".bdrd0-25",
                  declarations: "border-radius: 0.25rem;",
                },
                {
                  selectors: ".bdrd0-5",
                  declarations: "border-radius: 0.5rem;",
                },
                {
                  selectors: ".bdrd0-75",
                  declarations: "border-radius: 0.75rem;",
                },
                {
                  selectors: ".bdrd1",
                  declarations: "border-radius: 1rem;",
                },
                {
                  selectors: ".bdrd100",
                  declarations: "border-radius: 100%;",
                },
              ]}
            />

            <br />
            <Link to="/">Go back to the homepage</Link>
          </section>
          <aside className="md-c3 px1-5">
            <nav className="psf w100 full-height bg-light pt3">
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

export default Border;
