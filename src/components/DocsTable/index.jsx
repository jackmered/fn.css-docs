import React from "react";

const breakLines = (str) => str.replace(/;/g, ";<br />");

const DocsTable = ({ rows }) => (
  <table class="w100 bg-light bd table-scroll">
    <thead>
      <tr class="bdb">
        <th class="p0-5">Selector</th>
        <th class="p0-5">Declarations</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr class="bdb">
          <td class="p0-5 vat">{row.selectors}</td>
          <td
            class="p0-5"
            dangerouslySetInnerHTML={{ __html: breakLines(row.declarations) }}
          ></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DocsTable;
