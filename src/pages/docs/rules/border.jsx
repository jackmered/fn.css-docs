import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../../components/Layout';
import Alert from '../../../components/Alert';
import DocsTable from '../../../components/DocsTable';
import DocsSidebar from '../../../components/DocsSidebar';

const Border = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Border</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: '.bd',
                  declarations: 'border-style: solid;border-width: 1px;',
                },
                {
                  selectors: '.bdt',
                  declarations:
                    'border-top-style: solid;border-top-width: 1px;',
                },
                {
                  selectors: '.bdr',
                  declarations:
                    'border-right-style: solid;border-right-width: 1px;',
                },
                {
                  selectors: '.bdb',
                  declarations:
                    'border-bottom-style: solid;border-bottom-width: 1px;',
                },
                {
                  selectors: '.bdl',
                  declarations:
                    'border-left-style: solid;border-left-width: 1px;',
                },
                {
                  selectors: '.bdw0',
                  declarations: 'border-width: 0;',
                },
                {
                  selectors: '.bdw0-25',
                  declarations: 'border-width: 0.0625rem;;',
                },
                {
                  selectors: '.bdw0-5',
                  declarations: 'border-width: 0.125rem;',
                },
                {
                  selectors: '.bdw1',
                  declarations: 'border-width: 0.25rem;',
                },
                {
                  selectors: '.bdw2',
                  declarations: 'border-width: 0.5rem;',
                },
                {
                  selectors: '.bdw3',
                  declarations: 'border-width: 0.75rem;',
                },
                {
                  selectors: '.bdw4',
                  declarations: 'border-width: 1rem;',
                },
                {
                  selectors: '.bdrd0-125',
                  declarations: 'border-radius: 0.125rem;',
                },
                {
                  selectors: '.bdrd0-25',
                  declarations: 'border-radius: 0.25rem;',
                },
                {
                  selectors: '.bdrd0-5',
                  declarations: 'border-radius: 0.5rem;',
                },
                {
                  selectors: '.bdrd0-75',
                  declarations: 'border-radius: 0.75rem;',
                },
                {
                  selectors: '.bdrd1',
                  declarations: 'border-radius: 1rem;',
                },
                {
                  selectors: '.bdrd100',
                  declarations: 'border-radius: 100%;',
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

export default Border;
