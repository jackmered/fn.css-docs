import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../../components/Layout';
import Alert from '../../../components/Alert';
import DocsTable from '../../../components/DocsTable';
import DocsSidebar from '../../../components/DocsSidebar';

const Typography = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Typography</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: '.fs0-75',
                  declarations:
                    'font-size: calc(1rem * 0.75);font-size: calc(var(--fn-font-size) * 0.75);',
                },
                {
                  selectors: '.fs0-875',
                  declarations:
                    'font-size: calc(1rem * 0.875);font-size: calc(var(--fn-font-size) * 0.875);',
                },
                {
                  selectors: '.fs1',
                  declarations:
                    'font-size: 1rem;font-size: var(--fn-font-size);',
                },
                {
                  selectors: '.fs1-25',
                  declarations:
                    'font-size: calc(1rem * 1.25);font-size: calc(var(--fn-font-size) * 1.25);',
                },
                {
                  selectors: '.fs1-5',
                  declarations:
                    'font-size: calc(1rem * 1.5);font-size: calc(var(--fn-font-size) * 1.5);',
                },
                {
                  selectors: '.fs1-75',
                  declarations:
                    'font-size: calc(1rem * 1.75);font-size: calc(var(--fn-font-size) * 1.75);',
                },
                {
                  selectors: '.fs2',
                  declarations:
                    'font-size: calc(1rem * 2);font-size: calc(var(--fn-font-size) * 2);',
                },
                {
                  selectors: '.fs2-5',
                  declarations:
                    'font-size: calc(1rem * 2.5);font-size: calc(var(--fn-font-size) * 2.5);',
                },
                {
                  selectors: '.fs3',
                  declarations:
                    'font-size: calc(1rem * 3);font-size: calc(var(--fn-font-size) * 3);',
                },
                {
                  selectors: '.lh1',
                  declarations: 'line-height: 1;',
                },
                {
                  selectors: '.lh1-25',
                  declarations: 'line-height: 1.25;',
                },
                {
                  selectors: '.lh1-5',
                  declarations: 'line-height: 1.5;',
                },
                {
                  selectors: '.fsn',
                  declarations: 'font-style: normal;',
                },
                {
                  selectors: '.fsi',
                  declarations: 'font-style: italic;',
                },
                {
                  selectors: '.fwn',
                  declarations: 'font-weight: normal;',
                },
                {
                  selectors: '.fwb',
                  declarations: 'font-weight: bold;',
                },
                {
                  selectors: '.tal',
                  declarations: 'text-align: left;',
                },
                {
                  selectors: '.tac',
                  declarations: 'text-align: center;',
                },
                {
                  selectors: '.tar',
                  declarations: 'text-align: right;',
                },
                {
                  selectors: '.taj',
                  declarations: 'text-align: justify;',
                },
                {
                  selectors: '.toi',
                  declarations: 'text-overflow: initial;',
                },
                {
                  selectors: '.toc',
                  declarations: 'text-overflow: clip;',
                },
                {
                  selectors: '.toe',
                  declarations: 'text-overflow: ellipsis;',
                },
                {
                  selectors: '.tdu',
                  declarations: 'text-decoration: underline;',
                },
                {
                  selectors: '.tdo',
                  declarations: 'text-decoration: overline;',
                },
                {
                  selectors: '.tdlt',
                  declarations: 'text-decoration: line-through;',
                },
                {
                  selectors: '.tdn',
                  declarations: 'text-decoration: none;',
                },
                {
                  selectors: '.ttu',
                  declarations: 'text-transform: uppercase;',
                },
                {
                  selectors: '.ttl',
                  declarations: 'text-transform: lowercase;',
                },
                {
                  selectors: '.ttc',
                  declarations: 'text-transform: capitalize;',
                },
                {
                  selectors: '.ttn',
                  declarations: 'text-transform: none;',
                },
                {
                  selectors: '.vabl',
                  declarations: 'vertical-align: baseline;',
                },
                {
                  selectors: '.vat',
                  declarations: 'vertical-align: top;',
                },
                {
                  selectors: '.vam',
                  declarations: 'vertical-align: middle;',
                },
                {
                  selectors: '.vab',
                  declarations: 'vertical-align: bottom;',
                },
                {
                  selectors: '.wsn',
                  declarations: 'white-space: normal;',
                },
                {
                  selectors: '.wsnw',
                  declarations: 'white-space: nowrap;',
                },
                {
                  selectors: '.wsp',
                  declarations: 'white-space: pre;',
                },
                {
                  selectors: '.wsi',
                  declarations: 'white-space: inherit;',
                },
                {
                  selectors: '.tc1',
                  declarations: 'columns: 1;',
                },
                {
                  selectors: '.tc2',
                  declarations: 'columns: 2;',
                },
                {
                  selectors: '.tc3',
                  declarations: 'columns: 3;',
                },
                {
                  selectors: '.tc4',
                  declarations: 'columns: 4;',
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

export default Typography;
