import React from 'react';
import Layout from './Layout';
import DocsSidebar from './DocsSidebar';
import { CopyBlock, atomOneLight } from "react-code-blocks";

const CodePage = ({title, code, children }) => (
  <Layout>
    <div class="bg-white mb2">
      <section className="container px1-5">
        <article className="md-x mx-1-5">
          <section className="md-c9 px1-5 mt3">
            <h1 className="mt0 fs3">{title}</h1>
            {children}
            <CopyBlock
              text={code}
              language="css"
              theme={atomOneLight}
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

export default CodePage;
