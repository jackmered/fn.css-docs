import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../../components/Layout';
import Alert from '../../../components/Alert';
import DocsTable from '../../../components/DocsTable';
import DocsSidebar from '../../../components/DocsSidebar';

const Padding = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Padding</h1>
            <p></p>
            <DocsTable
              rows={[
                {
                  selectors: '.p0',
                  declarations: 'padding: 0;',
                },
                {
                  selectors: '.p0-25',
                  declarations:
                    'padding: calc(1rem * 0.25);padding: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.p0-5',
                  declarations:
                    'padding: calc(1rem * 0.5);padding: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.p1',
                  declarations: 'padding: 1rem;padding: var(--fn-spacer);',
                },
                {
                  selectors: '.p1-5',
                  declarations:
                    'padding: calc(1rem * 1.5);padding: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.p2',
                  declarations:
                    'padding: calc(1rem * 2);padding: var(--fn-spacer2x);',
                },
                {
                  selectors: '.p3',
                  declarations:
                    'padding: calc(1rem * 3);padding: var(--fn-spacer3x);',
                },
                {
                  selectors: '.pt0',
                  declarations: 'padding-top: 0;',
                },
                {
                  selectors: '.pt0-25',
                  declarations:
                    'padding-top: calc(1rem * 0.25);padding-top: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.pt0-5',
                  declarations:
                    'padding-top: calc(1rem * 0.5);padding-top: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.pt1',
                  declarations:
                    'padding-top: 1rem;padding-top: var(--fn-spacer);',
                },
                {
                  selectors: '.pt1-5',
                  declarations:
                    'padding-top: calc(1rem * 1.5);padding-top: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.pt2',
                  declarations:
                    'padding-top: calc(1rem * 2);padding-top: var(--fn-spacer2x);',
                },
                {
                  selectors: '.pt3',
                  declarations:
                    'padding-top: calc(1rem * 3);padding-top: var(--fn-spacer3x);',
                },
                {
                  selectors: '.pr0',
                  declarations: 'padding-right: 0;',
                },
                {
                  selectors: '.pr0-25',
                  declarations:
                    'padding-right: calc(1rem * 0.25);padding-right: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.pr0-5',
                  declarations:
                    'padding-right: calc(1rem * 0.5);padding-right: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.pr1',
                  declarations:
                    'padding-right: 1rem;padding-right: var(--fn-spacer);',
                },
                {
                  selectors: '.pr1-5',
                  declarations:
                    'padding-right: calc(1rem * 1.5);padding-right: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.pr2',
                  declarations:
                    'padding-right: calc(1rem * 2);padding-right: var(--fn-spacer2x);',
                },
                {
                  selectors: '.pr3',
                  declarations:
                    'padding-right: calc(1rem * 3);padding-right: var(--fn-spacer3x);',
                },
                {
                  selectors: '.pb0',
                  declarations: 'padding-bottom: 0;',
                },
                {
                  selectors: '.pb0-25',
                  declarations:
                    'padding-bottom: calc(1rem * 0.25);padding-bottom: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.pb0-5',
                  declarations:
                    'padding-bottom: calc(1rem * 0.5);padding-bottom: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.pb1',
                  declarations:
                    'padding-bottom: 1rem;padding-bottom: var(--fn-spacer);',
                },
                {
                  selectors: '.pb1-5',
                  declarations:
                    'padding-bottom: calc(1rem * 1.5);padding-bottom: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.pb2',
                  declarations:
                    'padding-bottom: calc(1rem * 2);padding-bottom: var(--fn-spacer2x);',
                },
                {
                  selectors: '.pb3',
                  declarations:
                    'padding-bottom: calc(1rem * 3);padding-bottom: var(--fn-spacer3x);',
                },
                {
                  selectors: '.pl0',
                  declarations: 'padding-left: 0;',
                },
                {
                  selectors: '.pl0-25',
                  declarations:
                    'padding-left: calc(1rem * 0.25);padding-left: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.pl0-5',
                  declarations:
                    'padding-left: calc(1rem * 0.5);padding-left: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.pl1',
                  declarations:
                    'padding-left: 1rem;padding-left: var(--fn-spacer);',
                },
                {
                  selectors: '.pl1-5',
                  declarations:
                    'padding-left: calc(1rem * 1.5);padding-left: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.pl2',
                  declarations:
                    'padding-left: calc(1rem * 2);padding-left: var(--fn-spacer2x);',
                },
                {
                  selectors: '.pl3',
                  declarations:
                    'padding-left: calc(1rem * 3);padding-left: var(--fn-spacer3x);',
                },
                {
                  selectors: '.px0',
                  declarations: 'padding-left: 0;padding-right: 0;',
                },
                {
                  selectors: '.px0-25',
                  declarations:
                    'padding-left: calc(1rem * 0.25);padding-left: var(--fn-spacer0-25x);padding-right: calc(1rem * 0.25);padding-right: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.px0-5',
                  declarations:
                    'padding-left: calc(1rem * 0.5);padding-left: var(--fn-spacer0-5x);padding-right: calc(1rem * 0.5);padding-right: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.px1',
                  declarations:
                    'padding-left: 1rem;padding-left: var(--fn-spacer);padding-right: 1rem;padding-right: var(--fn-spacer);',
                },
                {
                  selectors: '.px1-5',
                  declarations:
                    'padding-left: calc(1rem * 1.5);padding-left: var(--fn-spacer1-5x);padding-right: calc(1rem * 1.5);padding-right: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.px2',
                  declarations:
                    'padding-left: calc(1rem * 2);padding-left: var(--fn-spacer2x);padding-right: calc(1rem * 2);padding-right: var(--fn-spacer2x);',
                },
                {
                  selectors: '.px3',
                  declarations:
                    'padding-left: calc(1rem * 3);padding-left: var(--fn-spacer3x);padding-right: calc(1rem * 3);padding-right: var(--fn-spacer3x);',
                },
                {
                  selectors: '.py0',
                  declarations: 'padding-top: 0;padding-bottom: 0;',
                },
                {
                  selectors: '.py0-25',
                  declarations:
                    'padding-top: calc(1rem * 0.25);padding-top: var(--fn-spacer0-25x);padding-bottom: calc(1rem * 0.25);padding-bottom: var(--fn-spacer0-25x);',
                },
                {
                  selectors: '.py0-5',
                  declarations:
                    'padding-top: calc(1rem * 0.5);padding-top: var(--fn-spacer0-5x);padding-bottom: calc(1rem * 0.5);padding-bottom: var(--fn-spacer0-5x);',
                },
                {
                  selectors: '.py1',
                  declarations:
                    'padding-top: 1rem;padding-top: var(--fn-spacer);padding-bottom: 1rem;padding-bottom: var(--fn-spacer);',
                },
                {
                  selectors: '.py1-5',
                  declarations:
                    'padding-top: calc(1rem * 1.5);padding-top: var(--fn-spacer1-5x);padding-bottom: calc(1rem * 1.5);padding-bottom: var(--fn-spacer1-5x);',
                },
                {
                  selectors: '.py2',
                  declarations:
                    'padding-top: calc(1rem * 2);padding-top: var(--fn-spacer2x);padding-bottom: calc(1rem * 2);padding-bottom: var(--fn-spacer2x);',
                },
                {
                  selectors: '.py3',
                  declarations:
                    'padding-top: calc(1rem * 3);padding-top: var(--fn-spacer3x);padding-bottom: calc(1rem * 3);padding-bottom: var(--fn-spacer3x);',
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

export default Padding;
