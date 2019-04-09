import React from 'react';
import Link from 'gatsby-link';
import RulesTable from '../../components/RulesTable';
import { rules } from './data.json';
import Layout from '../../components/Layout';

const Docs = () => (
  <Layout>
    <article className="x mx-1-5">
      <section className="md-c9 px1-5 mt3">
        <h1 className="mt0 fs3">Docs</h1>
        <p>
          Below are all of the shorthand functional CSS rules for easy reference. Generally speaking
          all rules are composed by the first letter in each of the properties words. As an example
          "vertical-align: middle;" would become ".vam". However due to the vast amount of CSS
          properties this method is occasionally twisted. 
        </p>
        <RulesTable
          title="Background"
          rules={rules.filter(rule =>
            [
              '.bgsc', '.bgsct', '.bgpc', '.bgpr', '.bgpb', '.bgpl', '.bgrn', '.bgrx', '.bgry',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Border"
          rules={rules.filter(rule =>
            [
              '.bd', '.bdt', '.bdr', '.bdb', '.bdl', '.bd', '.bdw0', '.bdw0-25', '.bdw0-5', '.bdw1',
              '.bdw2', '.bdw3', '.bdw4', '.bdrd0-125', '.bdrd0-25', '.bdrd0-5', '.bdrd0-75', '.bdrd1',
              '.bdrd100',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Column"
          rules={rules.filter(rule =>
            [
              '.c1', '.c2', '.c3', '.c4', '.c5', '.c6',
              '.c7', '.c8', '.c9', '.c10', '.c11', '.c12',
              '.co1', '.co2', '.co3', '.co4', '.co5', '.co6',
              '.co7', '.co8', '.co9', '.co10', '.co11', '.co12',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Cursor"
          rules={rules.filter(rule =>
            [
              '.curp', '.curd', '.cura', '.curzi', '.curzo',
              '.usn', '.usa', '.ust', '.pen', '.pea',
            ].includes(rule.selector))}
        />
        <RulesTable 
          title="Display" 
          rules={rules.filter(rule => 
            ['.df', '.db', '.dib', '.di', '.dt', '.dtc', '.dtr', '.dn'].includes(rule.selector))}
        />
        <RulesTable
          title="Flex"
          rules={rules.filter(rule =>
            [
              '.x', '.xac', '.xab', '.xafs', '.xafe', '.xdr', '.xdrr', '.xdc', '.xdcr', '.xjc', '.xjb',
              '.xja', '.xjs', '.xje', '.xw', '.xwr', '.xwn', '.xi', '.xx', '.xa', '.xn',
              '.xo0', '.xo1', '.xo2', '.xo3', '.xo4', '.xot', '.xob',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Float"
          rules={rules.filter(rule =>
            [
              '.fl', '.fr', '.fn', '.cf::after',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="List"
          rules={rules.filter(rule =>
            [
              '.lspo', '.lspi', '.lstc', '.lstd', '.lsts', '.lsta', '.lstci', '.lstdi', '.lstdlz',
              '.lstg', '.lsthb', '.lsthg', '.lsthi', '.lstk', '.lstki', '.lstla', '.lstlg', '.lstll',
              '.lstlr', '.lstua', '.lstug', '.lstul', '.lstur', '.lstn', '.lsti',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Margin"
          rules={rules.filter(rule =>
            [
              '.m0', '.m0-25', '.m0-5', '.m1', '.m2', '.m3',
              '.mt0', '.mt0-25', '.mt0-5', '.mt1', '.mt2', '.mt3',
              '.mr0', '.mr0-25', '.mr0-5', '.mr1', '.mr2', '.mr3',
              '.mb0', '.mb0-25', '.mb0-5', '.mb1', '.mb2', '.mb3',
              '.ml0', '.ml0-25', '.ml0-5', '.ml1', '.ml2', '.ml3',
              '.mx0', '.mx0-25', '.mx0-5', '.mx1', '.mx2', '.mx3',
              '.my0', '.my0-25', '.my0-5', '.my1', '.my2', '.my3',
              '.mla', '.mra', '.mxa',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Negative Margin"
          rules={rules.filter(rule =>
            [
              '.m-0-25', '.m-0-5', '.m-1', '.m-2', '.m-3',
              '.mt-0-25', '.mt-0-5', '.mt-1', '.mt-2', '.mt-3',
              '.mr-0-25', '.mr-0-5', '.mr-1', '.mr-2', '.mr-3',
              '.mb-0-25', '.mb-0-5', '.mb-1', '.mb-2', '.mb-3',
              '.ml-0-25', '.ml-0-5', '.ml-1', '.ml-2', '.ml-3',
              '.mx-0-25', '.mx-0-5', '.mx-1', '.mx-2', '.mx-3',
              '.my-0-25', '.my-0-5', '.my-1', '.my-2', '.my-3',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Opacity"
          rules={rules.filter(rule =>
            [
              '.op0', '.op25', '.op50', '.op75', '.op100',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Overflow"
          rules={rules.filter(rule =>
            [
              '.oh', '.os', '.oxh', '.oxs', '.oh', '.oyh', '.oys',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Padding"
          rules={rules.filter(rule =>
            [
              '.p0', '.p0-25', '.p0-5', '.p1', '.p2', '.p3',
              '.pt0', '.pt0-25', '.pt0-5', '.pt1', '.pt2', '.pt3',
              '.pr0', '.pr0-25', '.pr0-5', '.pr1', '.pr2', '.pr3',
              '.pb0', '.pb0-25', '.pb0-5', '.pb1', '.pb2', '.pb3',
              '.pl0', '.pl0-25', '.pl0-5', '.pl1', '.pl2', '.pl3',
              '.px0', '.px0-25', '.px0-5', '.px1', '.px2', '.px3',
              '.py0', '.py0-25', '.py0-5', '.py1', '.py2', '.py3',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Positioning"
          rules={rules.filter(rule =>
            [
              '.psa', '.psr', '.psf', '.pss', '.t0', '.r0', '.b0', '.l0', '.z0', '.z1', '.z2', '.z3',
              '.z4',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Sizing"
          rules={rules.filter(rule =>
            [
              '.w0', '.w100', '.h0', '.h100', '.vw100', '.vh100', '.vwmn100', '.vhmn100', '.vwmx100', 
              '.vhmx100', '.ar0', '.ar20', '.ar50', '.ar75', '.ar100',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Typography"
          rules={rules.filter(rule =>
            [
              '.fs0-75', '.fs0-875', '.fs1', '.fs1-5', '.fs2', '.fs3', '.fs4', '.fs6', '.lh1', '.lh1-2', '.fsn', '.fsi',
              '.fwn', '.fwb', '.tal', '.tac', '.tar', '.taj', '.toi', '.toc', '.toe', '.tdu', '.tdo',
              '.tdlt', '.tdn', '.ttu', '.ttl', '.ttc', '.ttn', '.vabl', '.vat', '.vam', '.vab',
              '.wsn', '.wsnw', '.wsp', '.wsi', '.tc1', '.tc2', '.tc3', '.tc4',
            ].includes(rule.selector))}
        />
        <RulesTable
          title="Visibility"
          rules={rules.filter(rule =>
            [
              '.vh', '.vv', '.vc',
            ].includes(rule.selector))}
        />      
        <br />
        <Link to="/">Go back to the homepage</Link>
      </section>
      <aside className="md-c3 px1-5">
        <nav className="psf w100 full-height bg-light pt3">
          <div className="c3 px1">
            <a href="#background" className="db tdn p0-5 cl-black">Background</a>
            <a href="#border" className="db tdn p0-5 cl-black">Border</a>
            <a href="#column" className="db tdn p0-5 cl-black">Column</a>
            <a href="#cursor" className="db tdn p0-5 cl-black">Cursor</a>
            <a href="#display" className="db tdn p0-5 cl-black">Display</a>
            <a href="#flex" className="db tdn p0-5 cl-black">Flex</a>
            <a href="#float" className="db tdn p0-5 cl-black">Float</a>
            <a href="#list" className="db tdn p0-5 cl-black">List</a>
            <a href="#margin" className="db tdn p0-5 cl-black">Margin</a>
            <a href="#negative-margin" className="db tdn p0-5 cl-black">Negative margin</a>
            <a href="#opacity" className="db tdn p0-5 cl-black">Opacity</a>
            <a href="#overflow" className="db tdn p0-5 cl-black">Overflow</a>
            <a href="#padding" className="db tdn p0-5 cl-black">Padding</a>
            <a href="#positioning" className="db tdn p0-5 cl-black">Positioning</a>
            <a href="#sizing" className="db tdn p0-5 cl-black">Sizing</a>
            <a href="#typography" className="db tdn p0-5 cl-black">Typography</a>
            <a href="#visibility" className="db tdn p0-5 cl-black">Visibility</a>
          </div>
        </nav>
      </aside>
    </article>
  </Layout>
);

export default Docs;
