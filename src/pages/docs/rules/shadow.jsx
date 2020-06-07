import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Shadow = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Box Shadow</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".bs1",
                  declarations: "box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);",
                },
                {
                  selectors: ".bs2",
                  declarations: "box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);",
                },
                {
                  selectors: ".bs3",
                  declarations:
                    "box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);",
                },
                {
                  selectors: ".bs4",
                  declarations: "box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);",
                },
                {
                  selectors: ".bs5",
                  declarations: "box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);",
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

export default Shadow;
