import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Margin = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Margin</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".m0",
                  declarations: "margin: 0;",
                },
                {
                  selectors: ".m0-25",
                  declarations:
                    "margin: calc(1rem * 0.25);margin: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".m0-5",
                  declarations:
                    "margin: calc(1rem * 0.5);margin: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".m1",
                  declarations: "margin: 1rem;margin: var(--fn-spacer);",
                },
                {
                  selectors: ".m1-5",
                  declarations:
                    "margin: calc(1rem * 1.5);margin: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".m2",
                  declarations:
                    "margin: calc(1rem * 2);margin: var(--fn-spacer2x);",
                },
                {
                  selectors: ".m3",
                  declarations:
                    "margin: calc(1rem * 3);margin: var(--fn-spacer3x);",
                },
                {
                  selectors: ".mt0",
                  declarations: "margin-top: 0;",
                },
                {
                  selectors: ".mt0-25",
                  declarations:
                    "margin-top: calc(1rem * 0.25);margin-top: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".mt0-5",
                  declarations:
                    "margin-top: calc(1rem * 0.5);margin-top: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".mt1",
                  declarations:
                    "margin-top: 1rem;margin-top: var(--fn-spacer);",
                },
                {
                  selectors: ".mt1-5",
                  declarations:
                    "margin-top: calc(1rem * 1.5);margin-top: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".mt2",
                  declarations:
                    "margin-top: calc(1rem * 2);margin-top: var(--fn-spacer2x);",
                },
                {
                  selectors: ".mt3",
                  declarations:
                    "margin-top: calc(1rem * 3);margin-top: var(--fn-spacer3x);",
                },
                {
                  selectors: ".mr0",
                  declarations: "margin-right: 0;",
                },
                {
                  selectors: ".mr0-25",
                  declarations:
                    "margin-right: calc(1rem * 0.25);margin-right: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".mr0-5",
                  declarations:
                    "margin-right: calc(1rem * 0.5);margin-right: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".mr1",
                  declarations:
                    "margin-right: 1rem;margin-right: var(--fn-spacer);",
                },
                {
                  selectors: ".mr1-5",
                  declarations:
                    "margin-right: calc(1rem * 1.5);margin-right: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".mr2",
                  declarations:
                    "margin-right: calc(1rem * 2);margin-right: var(--fn-spacer2x);",
                },
                {
                  selectors: ".mr3",
                  declarations:
                    "margin-right: calc(1rem * 3);margin-right: var(--fn-spacer3x);",
                },
                {
                  selectors: ".mb0",
                  declarations: "margin-bottom: 0;",
                },
                {
                  selectors: ".mb0-25",
                  declarations:
                    "margin-bottom: calc(1rem * 0.25);margin-bottom: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".mb0-5",
                  declarations:
                    "margin-bottom: calc(1rem * 0.5);margin-bottom: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".mb1",
                  declarations:
                    "margin-bottom: 1rem;margin-bottom: var(--fn-spacer);",
                },
                {
                  selectors: ".mb1-5",
                  declarations:
                    "margin-bottom: calc(1rem * 1.5);margin-bottom: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".mb2",
                  declarations:
                    "margin-bottom: calc(1rem * 2);margin-bottom: var(--fn-spacer2x);",
                },
                {
                  selectors: ".mb3",
                  declarations:
                    "margin-bottom: calc(1rem * 3);margin-bottom: var(--fn-spacer3x);",
                },
                {
                  selectors: ".ml0",
                  declarations: "margin-left: 0;",
                },
                {
                  selectors: ".ml0-25",
                  declarations:
                    "margin-left: calc(1rem * 0.25);margin-left: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".ml0-5",
                  declarations:
                    "margin-left: calc(1rem * 0.5);margin-left: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".ml1",
                  declarations:
                    "margin-left: 1rem;margin-left: var(--fn-spacer);",
                },
                {
                  selectors: ".ml1-5",
                  declarations:
                    "margin-left: calc(1rem * 1.5);margin-left: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".ml2",
                  declarations:
                    "margin-left: calc(1rem * 2);margin-left: var(--fn-spacer2x);",
                },
                {
                  selectors: ".ml3",
                  declarations:
                    "margin-left: calc(1rem * 3);margin-left: var(--fn-spacer3x);",
                },
                {
                  selectors: ".mx0",
                  declarations: "margin-left: 0;margin-right: 0;",
                },
                {
                  selectors: ".mx0-25",
                  declarations:
                    "margin-left: calc(1rem * 0.25);margin-left: var(--fn-spacer0-25x);margin-right: calc(1rem * 0.25);margin-right: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".mx0-5",
                  declarations:
                    "margin-left: calc(1rem * 0.5);margin-left: var(--fn-spacer0-5x);margin-right: calc(1rem * 0.5);margin-right: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".mx1",
                  declarations:
                    "margin-left: 1rem;margin-left: var(--fn-spacer);margin-right: 1rem;margin-right: var(--fn-spacer);",
                },
                {
                  selectors: ".mx1-5",
                  declarations:
                    "margin-left: calc(1rem * 1.5);margin-left: var(--fn-spacer1-5x);margin-right: calc(1rem * 1.5);margin-right: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".mx2",
                  declarations:
                    "margin-left: calc(1rem * 2);margin-left: var(--fn-spacer2x);margin-right: calc(1rem * 2);margin-right: var(--fn-spacer2x);",
                },
                {
                  selectors: ".mx3",
                  declarations:
                    "margin-left: calc(1rem * 3);margin-left: var(--fn-spacer3x);margin-right: calc(1rem * 3);margin-right: var(--fn-spacer3x);",
                },
                {
                  selectors: ".my0",
                  declarations: "margin-top: 0;margin-bottom: 0;",
                },
                {
                  selectors: ".my0-25",
                  declarations:
                    "margin-top: calc(1rem * 0.25);margin-top: var(--fn-spacer0-25x);margin-bottom: calc(1rem * 0.25);margin-bottom: var(--fn-spacer0-25x);",
                },
                {
                  selectors: ".my0-5",
                  declarations:
                    "margin-top: calc(1rem * 0.5);margin-top: var(--fn-spacer0-5x);margin-bottom: calc(1rem * 0.5);margin-bottom: var(--fn-spacer0-5x);",
                },
                {
                  selectors: ".my1",
                  declarations:
                    "margin-top: 1rem;margin-top: var(--fn-spacer);margin-bottom: 1rem;margin-bottom: var(--fn-spacer);",
                },
                {
                  selectors: ".my1-5",
                  declarations:
                    "margin-top: calc(1rem * 1.5);margin-top: var(--fn-spacer1-5x);margin-bottom: calc(1rem * 1.5);margin-bottom: var(--fn-spacer1-5x);",
                },
                {
                  selectors: ".my2",
                  declarations:
                    "margin-top: calc(1rem * 2);margin-top: var(--fn-spacer2x);margin-bottom: calc(1rem * 2);margin-bottom: var(--fn-spacer2x);",
                },
                {
                  selectors: ".my3",
                  declarations:
                    "margin-top: calc(1rem * 3);margin-top: var(--fn-spacer3x);margin-bottom: calc(1rem * 3);margin-bottom: var(--fn-spacer3x);",
                },
                {
                  selectors: ".mla",
                  declarations: "margin-left: auto;",
                },
                {
                  selectors: ".mra",
                  declarations: "margin-right: auto;",
                },
                {
                  selectors: ".mxa",
                  declarations: "margin-right: auto;margin-left: auto;",
                },
              ]}
            />
          </section>
          <aside className="md-c3 px1-5">
            <DocsSidebar />
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Margin;
