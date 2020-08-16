import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../../components/Layout';
import Alert from '../../../components/Alert';
import DocsTable from '../../../components/DocsTable';
import DocsSidebar from '../../../components/DocsSidebar';

const Sizing = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Sizing</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: '.w0',
                  declarations: 'width: 0;',
                },
                {
                  selectors: '.w100',
                  declarations: 'width: 100%;',
                },
                {
                  selectors: '.wa',
                  declarations: 'width: auto;',
                },
                {
                  selectors: '.wi',
                  declarations: 'width: inherit;',
                },
                {
                  selectors: '.h0',
                  declarations: 'height: 0;',
                },
                {
                  selectors: '.h100',
                  declarations: 'height: 100%;',
                },
                {
                  selectors: '.ha',
                  declarations: 'height: auto;',
                },
                {
                  selectors: '.hi',
                  declarations: 'height: inherit;',
                },
                {
                  selectors: '.vw100',
                  declarations: 'width: 100vw;',
                },
                {
                  selectors: '.vh100',
                  declarations: 'height: 100vh;',
                },
                {
                  selectors: '.vwmn100',
                  declarations: 'min-width: 100vw;',
                },
                {
                  selectors: '.vhmn100',
                  declarations: 'min-height: 100vh;',
                },
                {
                  selectors: '.vwmx100',
                  declarations: 'max-width: 100vw;',
                },
                {
                  selectors: '.vhmx100',
                  declarations: 'max-height: 100vh;',
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

export default Sizing;
