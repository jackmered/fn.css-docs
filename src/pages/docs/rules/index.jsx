import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import DocsSidebar from "../../../components/DocsSidebar";

const Rules = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">CSS rules</h1>
            <p>
              Below are all of the shorthand functional CSS rules for easy
              reference. Generally speaking all rules are composed by the first
              letter in each of the properties words. As an example
              "vertical-align: middle;" would become ".vam". However due to the
              vast amount of CSS properties this method is occasionally twisted.
            </p>
          </section>
          <aside className="md-c3 px1-5">
            <DocsSidebar />
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Rules;
