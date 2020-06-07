import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Float = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Float</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".fl",
                  declarations: "float: left;",
                },
                {
                  selectors: ".fr",
                  declarations: "float: right;",
                },
                {
                  selectors: ".fn",
                  declarations: "float: none;",
                },
                {
                  selectors: ".cf:after",
                  declarations: "content: '';display: block;clear: both;",
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

export default Float;
