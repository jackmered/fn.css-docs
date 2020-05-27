import React from "react";
import Link from "gatsby-link";
import Layout from "../../../components/Layout";
import Alert from "../../../components/Alert";

const Colors = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Colors</h1>
            <p></p>
            <Alert type="warning">
              Colour rules are not responsive, this is primarily to keep the
              total filesize down.
            </Alert>

            <h4>Text colours</h4>
            <p class="cl-primary">.cl-primary</p>
            <p class="cl-secondary">.cl-secondary</p>
            <p class="cl-success">.cl-success</p>
            <p class="cl-danger">.cl-danger</p>
            <p class="cl-warning bg-dark">.cl-warning</p>
            <p class="cl-info">.cl-info</p>
            <p class="cl-light bg-dark">.cl-light</p>
            <p class="cl-dark">.cl-dark</p>
            <p class="cl-white bg-dark">.cl-white</p>
            <br />

            <h4>Text colours hover</h4>
            <a href="#" class="clh-primary cl-dark db mb1">
              .clh-primary
            </a>
            <a href="#" class="clh-secondary cl-dark db mb1">
              .clh-secondary
            </a>
            <a href="#" class="clh-success cl-dark db mb1">
              .clh-success
            </a>
            <a href="#" class="clh-danger cl-dark db mb1">
              .clh-danger
            </a>
            <a href="#" class="clh-warning cl-white db mb1 bg-dark">
              .clh-warning
            </a>
            <a href="#" class="clh-info cl-dark db mb1">
              .clh-info
            </a>
            <a href="#" class="clh-light db mb1 bg-dark">
              .clh-light
            </a>
            <a href="#" class="clh-dark db mb1">
              .clh-dark
            </a>
            <a href="#" class="clh-white db mb1 bg-dark">
              .clh-white
            </a>
            <br />

            <h4>Background colours</h4>
            <p class="bg-primary cl-white p0-5">.bg-primary</p>
            <p class="bg-secondary cl-white p0-5">.bg-secondary</p>
            <p class="bg-success cl-white p0-5">.bg-success</p>
            <p class="bg-danger cl-white p0-5">.bg-danger</p>
            <p class="bg-warning p0-5">.bg-warning</p>
            <p class="bg-info cl-white p0-5">.bg-info</p>
            <p class="bg-light p0-5">.bg-light</p>
            <p class="bg-dark cl-white p0-5">.bg-dark</p>
            <p class="bg-white p0-5">.bg-white</p>
            <br />

            <h4>Background colours hover</h4>
            <a href="#" class="bgh-primary p0-5 db">
              .bgh-primary
            </a>
            <a href="#" class="bgh-secondary p0-5 db">
              .bgh-secondary
            </a>
            <a href="#" class="bgh-success p0-5 db">
              .bgh-success
            </a>
            <a href="#" class="bgh-danger p0-5 db">
              .bgh-danger
            </a>
            <a href="#" class="bgh-warning p0-5 db">
              .bgh-warning
            </a>
            <a href="#" class="bgh-info p0-5 db">
              .bgh-info
            </a>
            <a href="#" class="bgh-light p0-5 db">
              .bgh-light
            </a>
            <a href="#" class="bgh-dark p0-5 db">
              .bgh-dark
            </a>
            <a href="#" class="bgh-white bg-dark p0-5 db">
              .bgh-white
            </a>
            <br />
            <Link to="/">Go back to the homepage</Link>
          </section>
          <aside className="md-c3 px1-5">
            <nav className="psf w100 full-height bg-light pt3">
              <div className="c3 px1">
                <a href="/docs/rules/colors" className="db tdn p0-5 cl-black">
                  Colors
                </a>
                <a
                  href="/docs/rules/background"
                  className="db tdn p0-5 cl-black"
                >
                  Background
                </a>
                <a href="/docs/rules/border" className="db tdn p0-5 cl-black">
                  Border
                </a>
                <a href="/docs/rules/column" className="db tdn p0-5 cl-black">
                  Column
                </a>
                <a href="/docs/rules/cursor" className="db tdn p0-5 cl-black">
                  Cursor
                </a>
                <a href="/docs/rules/display" className="db tdn p0-5 cl-black">
                  Display
                </a>
                <a href="/docs/rules/flex" className="db tdn p0-5 cl-black">
                  Flex
                </a>
                <a href="/docs/rules/float" className="db tdn p0-5 cl-black">
                  Float
                </a>
                <a href="/docs/rules/list" className="db tdn p0-5 cl-black">
                  List
                </a>
                <a href="/docs/rules/margin" className="db tdn p0-5 cl-black">
                  Margin
                </a>
                <a
                  href="/docs/rules/negative-margin"
                  className="db tdn p0-5 cl-black"
                >
                  Negative margin
                </a>
                <a href="/docs/rules/opacity" className="db tdn p0-5 cl-black">
                  Opacity
                </a>
                <a href="/docs/rules/overflow" className="db tdn p0-5 cl-black">
                  Overflow
                </a>
                <a href="/docs/rules/padding" className="db tdn p0-5 cl-black">
                  Padding
                </a>
                <a
                  href="/docs/rules/positioning"
                  className="db tdn p0-5 cl-black"
                >
                  Positioning
                </a>
                <a href="/docs/rules/sizing" className="db tdn p0-5 cl-black">
                  Sizing
                </a>
                <a
                  href="/docs/rules/typography"
                  className="db tdn p0-5 cl-black"
                >
                  Typography
                </a>
                <a
                  href="/docs/rules/visibility"
                  className="db tdn p0-5 cl-black"
                >
                  Visibility
                </a>
              </div>
            </nav>
          </aside>
        </article>
      </section>
    </div>
  </Layout>
);

export default Colors;
