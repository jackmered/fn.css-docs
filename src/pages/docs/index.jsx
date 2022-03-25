import React from 'react';
import Link from 'gatsby-link';
import Layout from '../../components/Layout';

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
  {
    id: '2',
    name: 'Extend',
    href: '/docs/extend',
    description: 'Customise fn.css',
  },
];

const Documentation = () => (
  <Layout>
    <div className="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">Documentation</h1>
            <p>Please find all the sections below:</p>
            {links.map((link) => (
              <Link to={link.href} className="db bd p1 bdrd0-5 mb1 tdn">
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
                <Link to="/docs/rules" className="db tdn p0-5 cl-black">
                  CSS rules
                </Link>
                <Link to="/docs/extend" className="db tdn p0-5 cl-black">
                  Extend
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
