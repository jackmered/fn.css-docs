import React from "react";

const generateId = (title) => title.toLowerCase().replace(" ", "-");

const DocsSection = ({ children, title }) => (
  <section id={generateId(title)}>
    <h3 className="pt3 fs1-5">{title}</h3>
    {children}
  </section>
);

export default DocsSection;
