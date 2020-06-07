import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Opacity = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Opacity</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".op0",
                  declarations: "opacity: 0;",
                },
                {
                  selectors: ".op25",
                  declarations: "opacity: 0.25;",
                },
                {
                  selectors: ".op50",
                  declarations: "opacity: 0.5;",
                },
                {
                  selectors: ".op75",
                  declarations: "opacity: 0.75;",
                },
                {
                  selectors: ".op100",
                  declarations: "opacity: 1;",
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

export default Opacity;
