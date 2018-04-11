import React from 'react';

const generateId = title => title.toLowerCase().replace(' ', '-'); 

const RulesTable = props => (
  <section id={generateId(props.title)}>
    <h3 className="pt3 fs1-6">{props.title}</h3>
    <table className="w100 bd-dark-light">
      <thead>
        <tr className="bdb">
          <th className="p0-5">Selector</th>
          <th className="p0-5">Declarations</th>
        </tr>
      </thead>
      <tbody> 
        {props.rules.map(rule => (
          <tr key={rule.selector} className="bdb"> 
            <td className="p0-5 vat">{rule.selector}</td>
            <td className="p0-5">
            {rule.declarations.map((declaration, declarationIndex) => (
              <table key={`${declaration.property}-${declarationIndex}`}>
                <tbody>
                  <tr>
                    <td>{declaration.property}:</td>
                    <td>&nbsp;{declaration.value};</td>
                  </tr>
                </tbody>
              </table>
            ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default RulesTable;