import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Display = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Display</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".df",
                  declarations: "display: flex;",
                },
                {
                  selectors: ".db",
                  declarations: "display: block;",
                },
                {
                  selectors: ".dib",
                  declarations: "display: inline-block;",
                },
                {
                  selectors: ".di",
                  declarations: "display: inline;",
                },
                {
                  selectors: ".dt",
                  declarations: "display: table;",
                },
                {
                  selectors: ".dtc",
                  declarations: "display: table-cell;",
                },
                {
                  selectors: ".dtr",
                  declarations: "display: table-row;",
                },
                {
                  selectors: ".dn",
                  declarations: "display: none;",
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

export default Display;
