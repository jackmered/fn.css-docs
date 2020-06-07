import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Background = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Background</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".bgsc",
                  declarations: "background-size: cover;",
                },
                {
                  selectors: ".bgsct",
                  declarations: "background-size: contain;",
                },
                {
                  selectors: ".bgpc",
                  declarations: "background-position: center;",
                },
                {
                  selectors: ".bgpr",
                  declarations: "background-position: right;",
                },
                {
                  selectors: ".bgpb",
                  declarations: "background-position: bottom;",
                },
                {
                  selectors: ".bgpl",
                  declarations: "background-position: left;",
                },
                {
                  selectors: ".bgrn",
                  declarations: "background-repeat: no-repeat;",
                },
                {
                  selectors: ".bgrx",
                  declarations: "background-repeat: repeat-x;",
                },
                {
                  selectors: ".bgry",
                  declarations: "background-repeat: repeat-y;",
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

export default Background;
