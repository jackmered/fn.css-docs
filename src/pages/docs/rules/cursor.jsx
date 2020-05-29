import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Cursor = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Cursor</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".curp",
                  declarations: "cursor: pointer;",
                },
                {
                  selectors: ".curd",
                  declarations: "cursor: default;",
                },
                {
                  selectors: ".cura",
                  declarations: "cursor: alias;",
                },
                {
                  selectors: ".curzi",
                  declarations: "cursor: zoom-in;",
                },
                {
                  selectors: ".curzo",
                  declarations: "cursor: zoom-out;",
                },
                {
                  selectors: ".usn",
                  declarations: "user-select: none;",
                },
                {
                  selectors: ".usa",
                  declarations: "user-select: auto;",
                },
                {
                  selectors: ".ust",
                  declarations: "user-select: text;",
                },
                {
                  selectors: ".pen",
                  declarations: "pointer-events: none;",
                },
                {
                  selectors: ".pea",
                  declarations: "pointer-events: auto;",
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

export default Cursor;
