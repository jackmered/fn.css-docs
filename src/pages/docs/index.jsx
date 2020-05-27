import React from "react";
import Link from "gatsby-link";
import RulesTable from "../../components/RulesTable";
import { rules } from "./data.json";
import Layout from "../../components/Layout";
import DocsSection from "../../components/DocsSection";
import DocsTable from "../../components/DocsTable";
import Alert from "../../components/Alert";

const Documentation = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Docs</h1>
            <p>
              Below are all of the shorthand functional CSS rules for easy
              reference. Generally speaking all rules are composed by the first
              letter in each of the properties words. As an example
              "vertical-align: middle;" would become ".vam". However due to the
              vast amount of CSS properties this method is occasionally twisted.
            </p>
            <br />
            <Link to="/">Go back to the homepage</Link>
          </section>
          <aside className="md-c3 px1-5">
            <nav className="psf w100 full-height bg-light pt3">
              <div className="c3 px1">
                <Link to="/docs/rules" className="db tdn p0-5 cl-black">
                  Rules
                </Link>
              </div>
            </nav>
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Documentation;
