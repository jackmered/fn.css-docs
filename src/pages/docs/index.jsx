import React from 'react';
import Link from 'gatsby-link';
import RulesTable from '../../components/RulesTable';
import Layout from '../../components/Layout';
import DocsSection from '../../components/DocsSection';
import DocsTable from '../../components/DocsTable';
import Alert from '../../components/Alert';

const links = [
  {
    id: '1',
    name: 'Getting started',
    href: '/docs/getting-started',
    description: 'Simple steps to get started',
  },
  {
    id: '2',
    name: 'CSS rules',
    href: '/docs/rules',
    description: 'Find all the CSS rules here',
  },
];

const Documentation = () => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Documentation</h1>
            <Alert type="warning">Work in progress, more to come</Alert>
            <p>Please find all the sections below:</p>
            {links.map((link) => (
              <Link to={link.href} className="db bd p1 bdrd0-25 mb1">
                <span className="db fs1-5">{link.name}</span>
                <span className="db">{link.description}</span>
              </Link>
            ))}
          </section>
          <aside className="md-c3 px1-5">
            <nav className="md-psf w100 full-height bg-light pt3">
              <div className="md-c3 md-px1">
                <Link
                  to="/docs/getting-started"
                  className="db tdn md-p0-5 cl-black"
                >
                  Getting started
                </Link>
                <Link to="/docs/rules" className="db tdn md-p0-5 cl-black">
                  CSS rules
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
