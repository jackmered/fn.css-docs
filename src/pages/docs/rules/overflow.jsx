import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Overflow = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Overflow</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".oh",
                  declarations: "overflow: hidden;",
                },
                {
                  selectors: ".oxh",
                  declarations: "overflow-x: hidden;",
                },
                {
                  selectors: ".oyh",
                  declarations: "overflow-y: hidden;",
                },
                {
                  selectors: ".os",
                  declarations: "overflow: scroll;",
                },
                {
                  selectors: ".oxs",
                  declarations: "overflow-x: scroll;",
                },
                {
                  selectors: ".oys",
                  declarations: "overflow-y: scroll;",
                },
                {
                  selectors: ".oa",
                  declarations: "overflow: auto;",
                },
                {
                  selectors: ".oxa",
                  declarations: "overflow-x: auto;",
                },
                {
                  selectors: ".oya",
                  declarations: "overflow-y: auto;",
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

export default Overflow;
