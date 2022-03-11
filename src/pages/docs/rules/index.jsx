import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../../components/Layout';
import DocsSidebar from '../../../components/DocsSidebar';

const pages = [
  { title: 'Background', slug: 'background' },
  { title: 'Border', slug: 'border' },
  { title: 'Colors', slug: 'colors' },
  { title: 'Column', slug: 'column' },
  { title: 'Cursor', slug: 'cursor' },
  { title: 'Display', slug: 'display' },
  { title: 'Flexbox', slug: 'flex' },
  { title: 'Float', slug: 'float' },
  { title: 'List', slug: 'list' },
  { title: 'Margin', slug: 'margin' },
  { title: 'Negative Margin', slug: 'negative-margin' },
  { title: 'Opacity', slug: 'opacity' },
  { title: 'Overflow', slug: 'overflow' },
  { title: 'Padding', slug: 'padding' },
  { title: 'Positioning', slug: 'positioning' },
  { title: 'Shadow', slug: 'shadow' },
  { title: 'Sizing', slug: 'sizing' },
  { title: 'Typography', slug: 'typography' },
  { title: 'Visibility', slug: 'visibility' },
];

const Rules = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">CSS rules</h1>
            <p>
              Below are all of the shorthand functional CSS rules for easy
              reference. Generally speaking all rules are composed by the first
              letter in each of the properties words. As an example
              "vertical-align: middle;" would become ".vam". However due to the
              vast amount of CSS properties this method is occasionally twisted.
            </p>
            <div className="x xw mx-0-5">
              {pages.map((page) => (
                <div class="c4">
                  <Link
                    key={page.slug}
                    to={`/docs/rules/${page.slug}`}
                    className="db bd p1 bdrd0-25 mb1 mx0-5 tdn"
                  >
                    {page.title}
                  </Link>
                </div>
              ))}
            </div>
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
