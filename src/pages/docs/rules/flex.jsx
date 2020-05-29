import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Flex = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Flexbox</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".x",
                  declarations: "display: flex;",
                },
                {
                  selectors: ".xac",
                  declarations: "align-items: center;",
                },
                {
                  selectors: ".xab",
                  declarations: "align-items: baseline;",
                },
                {
                  selectors: ".xas",
                  declarations: "align-items: stretch;",
                },
                {
                  selectors: ".xafs",
                  declarations: "align-items: flex-start;",
                },
                {
                  selectors: ".xafe",
                  declarations: "align-items: flex-end;",
                },
                {
                  selectors: ".xdr",
                  declarations: "flex-direction: row;",
                },
                {
                  selectors: ".xdrr",
                  declarations: "flex-direction: row-reverse;",
                },
                {
                  selectors: ".xdc",
                  declarations: "flex-direction: column;",
                },
                {
                  selectors: ".xdcr",
                  declarations: "flex-direction: column-reverse;",
                },
                {
                  selectors: ".xjc",
                  declarations: "justify-content: center;",
                },
                {
                  selectors: ".xjb",
                  declarations: "justify-content: space-between;",
                },
                {
                  selectors: ".xja",
                  declarations: "justify-content: space-around;",
                },
                {
                  selectors: ".xjs",
                  declarations: "justify-content: flex-start;",
                },
                {
                  selectors: ".xje",
                  declarations: "justify-content: flex-end;",
                },
                {
                  selectors: ".xw",
                  declarations: "flex-wrap: wrap;",
                },
                {
                  selectors: ".xwr",
                  declarations: "flex-wrap: wrap-reverse;",
                },
                {
                  selectors: ".xwn",
                  declarations: "flex-wrap: nowrap;",
                },
                {
                  selectors: ".xi",
                  declarations: "flex: initial;",
                },
                {
                  selectors: ".xx",
                  declarations: "flex: 1;",
                },
                {
                  selectors: ".xa",
                  declarations: "flex: auto;",
                },
                {
                  selectors: ".xn",
                  declarations: "flex: none;",
                },
                {
                  selectors: ".xo0",
                  declarations: "order: 0;",
                },
                {
                  selectors: ".xo1",
                  declarations: "order: 1;",
                },
                {
                  selectors: ".xo2",
                  declarations: "order: 2;",
                },
                {
                  selectors: ".xo3",
                  declarations: "order: 3;",
                },
                {
                  selectors: ".xo4",
                  declarations: "order: 4;",
                },
                {
                  selectors: ".xot",
                  declarations: "order: -1;",
                },
                {
                  selectors: ".xob",
                  declarations: "order: 99;",
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

export default Flex;
