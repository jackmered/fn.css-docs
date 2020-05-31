import React from "react";
import Link from "gatsby-link";
import Layout from "../components/Layout";

const Examples = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Examples</h1>
            <p>
              Here are examples of components you can build with fn.css. These
              are just examples, you can build anything with fn.css.
            </p>
            <h2>Float based grid</h2>
            <div class="cf">
              <div class="c1 fl p0-25 bg-light bd bd-primary">.c1.fl</div>
              <div class="c11 fl p0-25 bg-light bd bd-primary">.c11.fl</div>
            </div>
            <div class="cf">
              <div class="c2 fl p0-25 bg-light bd bd-primary">.c2.fl</div>
              <div class="c10 fl p0-25 bg-light bd bd-primary">.c0.fl</div>
            </div>
            <div class="cf">
              <div class="c3 fl p0-25 bg-light bd bd-primary">.c13.fl</div>
              <div class="c9 fl p0-25 bg-light bd bd-primary">.c9.fl</div>
            </div>
            <div class="cf">
              <div class="c4 fl p0-25 bg-light bd bd-primary">.c4.fl</div>
              <div class="c8 fl p0-25 bg-light bd bd-primary">.c8.fl</div>
            </div>
            <div class="cf">
              <div class="c5 fl p0-25 bg-light bd bd-primary">.c5.fl</div>
              <div class="c7 fl p0-25 bg-light bd bd-primary">.c7.fl</div>
            </div>
            <div class="cf">
              <div class="c6 fl p0-25 bg-light bd bd-primary">.c6.fl</div>
              <div class="c6 fl p0-25 bg-light bd bd-primary">.c6.fl</div>
            </div>

            <h2>Flexbox based grid</h2>
            <div class="x">
              <div class="c1 p0-25 bg-light bd bd-primary">.c1</div>
              <div class="c11 p0-25 bg-light bd bd-primary">.c11</div>
            </div>
            <div class="x">
              <div class="c2 p0-25 bg-light bd bd-primary">.c2</div>
              <div class="c10 p0-25 bg-light bd bd-primary">.c10</div>
            </div>
            <div class="x">
              <div class="c3 p0-25 bg-light bd bd-primary">.c3</div>
              <div class="c9 p0-25 bg-light bd bd-primary">.c9</div>
            </div>
            <div class="x">
              <div class="c4 p0-25 bg-light bd bd-primary">.c4</div>
              <div class="c8 p0-25 bg-light bd bd-primary">.c8</div>
            </div>
            <div class="x">
              <div class="c5 p0-25 bg-light bd bd-primary">.c5</div>
              <div class="c7 p0-25 bg-light bd bd-primary">.c7</div>
            </div>
            <div class="x">
              <div class="c6 p0-25 bg-light bd bd-primary">.c6</div>
              <div class="c6 p0-25 bg-light bd bd-primary">.c6</div>
            </div>

            <h2>Buttons</h2>
            <a
              href="#"
              role="button"
              className="dib py0-5 px1-5 mb0-5 tdn ttu fwb bdrd0-25 lh1 bg-primary cl-white bgh-white clh-primary bd bd-primary bs4"
            >
              Button
            </a>
            <code class="db">
              class="dib py1 px1-5 mb0-5 tdn ttu fwb bdrd0-25 lh1 bg-primary
              cl-white bgh-white clh-primary bd bd-success bs4"
            </code>
            <a
              href="#"
              role="button"
              className="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-875 bdrd0-25 lh1 bg-danger cl-white bgh-white clh-danger bd bd-danger bs4"
            >
              Button
            </a>
            <code class="db">
              class="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-875 bdrd0-25 lh1
              bg-danger cl-white bgh-white clh-danger bd bd-danger bs4"
            </code>
            <a
              href="#"
              role="button"
              className="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-75 bdrd0-25 lh1 bg-success cl-white bgh-white clh-success bd bd-success bs4"
            >
              Button
            </a>
            <code class="db">
              class="dib py0-5 px1-5 mb0-5 tdn ttu fwb fs0-75 bdrd0-25 lh1
              bg-success cl-white bgh-white clh-success bd bd-success bs4"
            </code>
          </section>
          <aside className="md-c3 px1-5"></aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Examples;
