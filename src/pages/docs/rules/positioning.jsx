import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";
import DocsTable from "../../../components/DocsTable";
import DocsSidebar from "../../../components/DocsSidebar";

const Positioning = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Positioning</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: ".psa",
                  declarations: "position: absolute;",
                },
                {
                  selectors: ".psr",
                  declarations: "position: relative;",
                },
                {
                  selectors: ".psf",
                  declarations: "position: fixed;",
                },
                {
                  selectors: ".pss",
                  declarations: "position: static;",
                },
                {
                  selectors: ".t0",
                  declarations: "top: 0;",
                },
                {
                  selectors: ".r0",
                  declarations: "right: 0;",
                },
                {
                  selectors: ".b0",
                  declarations: "bottom: 0;",
                },
                {
                  selectors: ".l0",
                  declarations: "left: 0;",
                },
                {
                  selectors: ".ta",
                  declarations: "top: auto;",
                },
                {
                  selectors: ".ra",
                  declarations: "right: auto;",
                },
                {
                  selectors: ".ba",
                  declarations: "bottom: auto;",
                },
                {
                  selectors: ".la",
                  declarations: "bottom: auto;",
                },
                {
                  selectors: ".z0",
                  declarations: "z-index: 0;",
                },
                {
                  selectors: ".z1",
                  declarations: "z-index: 1;",
                },
                {
                  selectors: ".z2",
                  declarations: "z-index: 2;",
                },
                {
                  selectors: ".z3",
                  declarations: "z-index: 3;",
                },
                {
                  selectors: ".z4",
                  declarations: "z-index: 4;",
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

export default Positioning;
