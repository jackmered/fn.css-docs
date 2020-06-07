import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const NegativeMargin = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Negative Margin</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".m-0-25",
                  declarations:
                    "margin: calc(-1 * calc(1rem * 0.25));margin: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".m-0-5",
                  declarations:
                    "margin: calc(-1 * calc(1rem * 0.5));margin: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".m-1",
                  declarations: "margin: 1rem;margin: var(--fn-spacer);",
                },
                {
                  selectors: ".m-1-5",
                  declarations:
                    "margin: calc(-1 * calc(1rem * 1.5));margin: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".m-2",
                  declarations:
                    "margin: calc(-1 * calc(1rem * 2));margin: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".m-3",
                  declarations:
                    "margin: calc(-1 * calc(1rem * 3));margin: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".mt-0-25",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 0.25));margin-top: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".mt-0-5",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 0.5));margin-top: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".mt-1",
                  declarations:
                    "margin-top: calc(-1 * 1rem);margin-top: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".mt-1-5",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 1.5));margin-top: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".mt-2",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 2));margin-top: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".mt-3",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 3));margin-top: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".mr-0-25",
                  declarations:
                    "margin-right: calc(-1 * calc(1rem * 0.25));margin-right: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".mr-0-5",
                  declarations:
                    "margin-right: calc(-1 * calc(1rem * 0.5));margin-right: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".mr-1",
                  declarations:
                    "margin-right: calc(-1 * 1rem);margin-right: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".mr-1-5",
                  declarations:
                    "margin-right: calc(-1 * calc(1rem * 1.5));margin-right: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".mr-2",
                  declarations:
                    "margin-right: calc(-1 * calc(1rem * 2));margin-right: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".mr-3",
                  declarations:
                    "margin-right: calc(-1 * calc(1rem * 3));margin-right: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".mb-0-25",
                  declarations:
                    "margin-bottom: calc(-1 * calc(1rem * 0.25));margin-bottom: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".mb-0-5",
                  declarations:
                    "margin-bottom: calc(-1 * calc(1rem * 0.5));margin-bottom: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".mb-1",
                  declarations:
                    "margin-bottom: calc(-1 * 1rem);margin-bottom: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".mb-1-5",
                  declarations:
                    "margin-bottom: calc(-1 * calc(1rem * 1.5));margin-bottom: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".mb-2",
                  declarations:
                    "margin-bottom: calc(-1 * calc(1rem * 2));margin-bottom: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".mb-3",
                  declarations:
                    "margin-bottom: calc(-1 * calc(1rem * 3));margin-bottom: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".ml-0-25",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 0.25));margin-left: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".ml-0-5",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 0.5));margin-left: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".ml-1",
                  declarations:
                    "margin-left: calc(-1 * 1rem);margin-left: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".ml-1-5",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 1.5));margin-left: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".ml-2",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 2));margin-left: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".ml-3",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 3));margin-left: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".mx-0-25",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 0.25));margin-left: calc(-1 * var(--fn-spacer0-25x));margin-right: calc(-1 * calc(1rem * 0.25));margin-right: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".mx-0-5",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 0.5));margin-left: calc(-1 * var(--fn-spacer0-5x));margin-right: calc(-1 * calc(1rem * 0.5));margin-right: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".mx-1",
                  declarations:
                    "margin-left: calc(-1 * 1rem);margin-left: calc(-1 * var(--fn-spacer));margin-right: calc(-1 * 1rem);margin-right: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".mx-1-5",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 1.5));margin-left: calc(-1 * var(--fn-spacer1-5x));margin-right: calc(-1 * calc(1rem * 1.5));margin-right: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".mx-2",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 2));margin-left: calc(-1 * var(--fn-spacer2x));margin-right: calc(-1 * calc(1rem * 2));margin-right: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".mx-3",
                  declarations:
                    "margin-left: calc(-1 * calc(1rem * 3));margin-left: calc(-1 * var(--fn-spacer3x));margin-right: calc(-1 * calc(1rem * 3));margin-right: calc(-1 * var(--fn-spacer3x));",
                },
                {
                  selectors: ".my-0-25",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 0.25));margin-top: calc(-1 * var(--fn-spacer0-25x));margin-bottom: calc(-1 * calc(1rem * 0.25));margin-bottom: calc(-1 * var(--fn-spacer0-25x));",
                },
                {
                  selectors: ".my-0-5",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 0.5));margin-top: calc(-1 * var(--fn-spacer0-5x));margin-bottom: calc(-1 * calc(1rem * 0.5));margin-bottom: calc(-1 * var(--fn-spacer0-5x));",
                },
                {
                  selectors: ".my-1",
                  declarations:
                    "margin-top: calc(-1 * 1rem);margin-top: calc(-1 * var(--fn-spacer));margin-bottom: calc(-1 * 1rem);margin-bottom: calc(-1 * var(--fn-spacer));",
                },
                {
                  selectors: ".my-1-5",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 1.5));margin-top: calc(-1 * var(--fn-spacer1-5x));margin-bottom: calc(-1 * calc(1rem * 1.5));margin-bottom: calc(-1 * var(--fn-spacer1-5x));",
                },
                {
                  selectors: ".my-2",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 2));margin-top: calc(-1 * var(--fn-spacer2x));margin-bottom: calc(-1 * calc(1rem * 2));margin-bottom: calc(-1 * var(--fn-spacer2x));",
                },
                {
                  selectors: ".my-3",
                  declarations:
                    "margin-top: calc(-1 * calc(1rem * 3));margin-top: calc(-1 * var(--fn-spacer3x));margin-bottom: calc(-1 * calc(1rem * 3));margin-bottom: calc(-1 * var(--fn-spacer3x));",
                },
              ]}
            />

            <br />
            <Link to="/">Go back to the homepage</Link>
          </section>
          <aside className="md-c3 px1-5">
            <DocsSidebar />
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default NegativeMargin;
