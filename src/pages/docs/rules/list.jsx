import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const List = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">List</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".lspo",
                  declarations: "list-style-position: outside;",
                },
                {
                  selectors: ".lspi",
                  declarations: "list-style-position: inside;",
                },
                {
                  selectors: ".lstc",
                  declarations: "list-style-type: circle;",
                },
                {
                  selectors: ".lstd",
                  declarations: "list-style-type: disc;",
                },
                {
                  selectors: ".lsts",
                  declarations: "list-style-type: square;",
                },
                {
                  selectors: ".lstdi",
                  declarations: "list-style-type: decimal;",
                },
                {
                  selectors: ".lstdlz",
                  declarations: "list-style-type: decimal-leading-zero;",
                },
                {
                  selectors: ".lstla",
                  declarations: "list-style-type: lower-alpha;",
                },
                {
                  selectors: ".lstua",
                  declarations: "list-style-type: upper-alpha;",
                },
                {
                  selectors: ".lstlr",
                  declarations: "list-style-type: lower-roman;",
                },
                {
                  selectors: ".lstur",
                  declarations: "list-style-type: upper-roman;",
                },
                {
                  selectors: ".lstn",
                  declarations: "list-style-type: none;",
                },
                {
                  selectors: ".lsti",
                  declarations: "list-style-type: inherit;",
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

export default List;
