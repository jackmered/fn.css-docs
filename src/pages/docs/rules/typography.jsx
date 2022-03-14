import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.fs0-75 {
  font-size: calc(var(--fn-font-size) * 0.75);
}

.fs0-875 {
  font-size: calc(var(--fn-font-size) * 0.875);
}

.fs1 {
  font-size: var(--fn-font-size);
}

.fs1-25 {
  font-size: calc(var(--fn-font-size) * 1.25);
}

.fs1-5 {
  font-size: calc(var(--fn-font-size) * 1.5);
}

.fs1-75 {
  font-size: calc(var(--fn-font-size) * 1.75);
}

.fs2 {
  font-size: calc(var(--fn-font-size) * 2);
}

.fs2-5 {
  font-size: calc(var(--fn-font-size) * 2.5);
}

.fs3 {
  font-size: calc(var(--fn-font-size) * 3);
}

.lh1 {
  line-height: 1;
}

.lh1-25 {
  line-height: 1.25;
}

.lh1-5 {
  line-height: 1.5;
}

.fsn {
  font-style: normal;
}

.fsi {
  font-style: italic;
}

.fwn {
  font-weight: normal;
}

.fwb {
  font-weight: bold;
}

.tal {
  text-align: left;
}

.tac {
  text-align: center;
}

.tar {
  text-align: right;
}

.taj {
  text-align: justify;
}

.toi {
  text-overflow: initial;
}

.toc {
  text-overflow: clip;
}

.toe {
  text-overflow: ellipsis;
}

.tdu {
  text-decoration: underline;
}

.tdo {
  text-decoration: overline;
}

.tdlt {
  text-decoration: line-through;
}

.tdn {
  text-decoration: none;
}

.ttu {
  text-transform: uppercase;
}

.ttl {
  text-transform: lowercase;
}

.ttc {
  text-transform: capitalize;
}

.ttn {
  text-transform: none;
}

.vabl {
  vertical-align: baseline;
}

.vat {
  vertical-align: top;
}

.vam {
  vertical-align: middle;
}

.vab {
  vertical-align: bottom;
}

.wsn {
  white-space: normal;
}

.wsnw {
  white-space: nowrap;
}

.wsp {
  white-space: pre;
}

.wsi {
  white-space: inherit;
}

.tc1 {
  -moz-columns: 1;
       columns: 1;
}

.tc2 {
  -moz-columns: 2;
       columns: 2;
}

.tc3 {
  -moz-columns: 3;
       columns: 3;
}

.tc4 {
  -moz-columns: 4;
       columns: 4;
}

@media (min-width: 576px) {
  .sm-fs0-75 {
    font-size: calc(var(--fn-font-size) * 0.75);
  }

  .sm-fs0-875 {
    font-size: calc(var(--fn-font-size) * 0.875);
  }

  .sm-fs1 {
    font-size: var(--fn-font-size);
  }

  .sm-fs1-25 {
    font-size: calc(var(--fn-font-size) * 1.25);
  }

  .sm-fs1-5 {
    font-size: calc(var(--fn-font-size) * 1.5);
  }

  .sm-fs1-75 {
    font-size: calc(var(--fn-font-size) * 1.75);
  }

  .sm-fs2 {
    font-size: calc(var(--fn-font-size) * 2);
  }

  .sm-fs2-5 {
    font-size: calc(var(--fn-font-size) * 2.5);
  }

  .sm-fs3 {
    font-size: calc(var(--fn-font-size) * 3);
  }

  .sm-lh1 {
    line-height: 1;
  }

  .sm-lh1-25 {
    line-height: 1.25;
  }

  .sm-lh1-5 {
    line-height: 1.5;
  }

  .sm-fsn {
    font-style: normal;
  }

  .sm-fsi {
    font-style: italic;
  }

  .sm-fwn {
    font-weight: normal;
  }

  .sm-fwb {
    font-weight: bold;
  }

  .sm-tal {
    text-align: left;
  }

  .sm-tac {
    text-align: center;
  }

  .sm-tar {
    text-align: right;
  }

  .sm-taj {
    text-align: justify;
  }

  .sm-toi {
    text-overflow: initial;
  }

  .sm-toc {
    text-overflow: clip;
  }

  .sm-toe {
    text-overflow: ellipsis;
  }

  .sm-tdu {
    text-decoration: underline;
  }

  .sm-tdo {
    text-decoration: overline;
  }

  .sm-tdlt {
    text-decoration: line-through;
  }

  .sm-tdn {
    text-decoration: none;
  }

  .sm-ttu {
    text-transform: uppercase;
  }

  .sm-ttl {
    text-transform: lowercase;
  }

  .sm-ttc {
    text-transform: capitalize;
  }

  .sm-ttn {
    text-transform: none;
  }

  .sm-vabl {
    vertical-align: baseline;
  }

  .sm-vat {
    vertical-align: top;
  }

  .sm-vam {
    vertical-align: middle;
  }

  .sm-vab {
    vertical-align: bottom;
  }

  .sm-wsn {
    white-space: normal;
  }

  .sm-wsnw {
    white-space: nowrap;
  }

  .sm-wsp {
    white-space: pre;
  }

  .sm-wsi {
    white-space: inherit;
  }

  .sm-tc1 {
    -moz-columns: 1;
         columns: 1;
  }

  .sm-tc2 {
    -moz-columns: 2;
         columns: 2;
  }

  .sm-tc3 {
    -moz-columns: 3;
         columns: 3;
  }

  .sm-tc4 {
    -moz-columns: 4;
         columns: 4;
  }
}

@media (min-width: 768px) {
  .md-fs0-75 {
    font-size: calc(var(--fn-font-size) * 0.75);
  }

  .md-fs0-875 {
    font-size: calc(var(--fn-font-size) * 0.875);
  }

  .md-fs1 {
    font-size: var(--fn-font-size);
  }

  .md-fs1-25 {
    font-size: calc(var(--fn-font-size) * 1.25);
  }

  .md-fs1-5 {
    font-size: calc(var(--fn-font-size) * 1.5);
  }

  .md-fs1-75 {
    font-size: calc(var(--fn-font-size) * 1.75);
  }

  .md-fs2 {
    font-size: calc(var(--fn-font-size) * 2);
  }

  .md-fs2-5 {
    font-size: calc(var(--fn-font-size) * 2.5);
  }

  .md-fs3 {
    font-size: calc(var(--fn-font-size) * 3);
  }

  .md-lh1 {
    line-height: 1;
  }

  .md-lh1-25 {
    line-height: 1.25;
  }

  .md-lh1-5 {
    line-height: 1.5;
  }

  .md-fsn {
    font-style: normal;
  }

  .md-fsi {
    font-style: italic;
  }

  .md-fwn {
    font-weight: normal;
  }

  .md-fwb {
    font-weight: bold;
  }

  .md-tal {
    text-align: left;
  }

  .md-tac {
    text-align: center;
  }

  .md-tar {
    text-align: right;
  }

  .md-taj {
    text-align: justify;
  }

  .md-toi {
    text-overflow: initial;
  }

  .md-toc {
    text-overflow: clip;
  }

  .md-toe {
    text-overflow: ellipsis;
  }

  .md-tdu {
    text-decoration: underline;
  }

  .md-tdo {
    text-decoration: overline;
  }

  .md-tdlt {
    text-decoration: line-through;
  }

  .md-tdn {
    text-decoration: none;
  }

  .md-ttu {
    text-transform: uppercase;
  }

  .md-ttl {
    text-transform: lowercase;
  }

  .md-ttc {
    text-transform: capitalize;
  }

  .md-ttn {
    text-transform: none;
  }

  .md-vabl {
    vertical-align: baseline;
  }

  .md-vat {
    vertical-align: top;
  }

  .md-vam {
    vertical-align: middle;
  }

  .md-vab {
    vertical-align: bottom;
  }

  .md-wsn {
    white-space: normal;
  }

  .md-wsnw {
    white-space: nowrap;
  }

  .md-wsp {
    white-space: pre;
  }

  .md-wsi {
    white-space: inherit;
  }

  .md-tc1 {
    -moz-columns: 1;
         columns: 1;
  }

  .md-tc2 {
    -moz-columns: 2;
         columns: 2;
  }

  .md-tc3 {
    -moz-columns: 3;
         columns: 3;
  }

  .md-tc4 {
    -moz-columns: 4;
         columns: 4;
  }
}

@media (min-width: 992px) {
  .lg-fs0-75 {
    font-size: calc(var(--fn-font-size) * 0.75);
  }

  .lg-fs0-875 {
    font-size: calc(var(--fn-font-size) * 0.875);
  }

  .lg-fs1 {
    font-size: var(--fn-font-size);
  }

  .lg-fs1-25 {
    font-size: calc(var(--fn-font-size) * 1.25);
  }

  .lg-fs1-5 {
    font-size: calc(var(--fn-font-size) * 1.5);
  }

  .lg-fs1-75 {
    font-size: calc(var(--fn-font-size) * 1.75);
  }

  .lg-fs2 {
    font-size: calc(var(--fn-font-size) * 2);
  }

  .lg-fs2-5 {
    font-size: calc(var(--fn-font-size) * 2.5);
  }

  .lg-fs3 {
    font-size: calc(var(--fn-font-size) * 3);
  }

  .lg-lh1 {
    line-height: 1;
  }

  .lg-lh1-25 {
    line-height: 1.25;
  }

  .lg-lh1-5 {
    line-height: 1.5;
  }

  .lg-fsn {
    font-style: normal;
  }

  .lg-fsi {
    font-style: italic;
  }

  .lg-fwn {
    font-weight: normal;
  }

  .lg-fwb {
    font-weight: bold;
  }

  .lg-tal {
    text-align: left;
  }

  .lg-tac {
    text-align: center;
  }

  .lg-tar {
    text-align: right;
  }

  .lg-taj {
    text-align: justify;
  }

  .lg-toi {
    text-overflow: initial;
  }

  .lg-toc {
    text-overflow: clip;
  }

  .lg-toe {
    text-overflow: ellipsis;
  }

  .lg-tdu {
    text-decoration: underline;
  }

  .lg-tdo {
    text-decoration: overline;
  }

  .lg-tdlt {
    text-decoration: line-through;
  }

  .lg-tdn {
    text-decoration: none;
  }

  .lg-ttu {
    text-transform: uppercase;
  }

  .lg-ttl {
    text-transform: lowercase;
  }

  .lg-ttc {
    text-transform: capitalize;
  }

  .lg-ttn {
    text-transform: none;
  }

  .lg-vabl {
    vertical-align: baseline;
  }

  .lg-vat {
    vertical-align: top;
  }

  .lg-vam {
    vertical-align: middle;
  }

  .lg-vab {
    vertical-align: bottom;
  }

  .lg-wsn {
    white-space: normal;
  }

  .lg-wsnw {
    white-space: nowrap;
  }

  .lg-wsp {
    white-space: pre;
  }

  .lg-wsi {
    white-space: inherit;
  }

  .lg-tc1 {
    -moz-columns: 1;
         columns: 1;
  }

  .lg-tc2 {
    -moz-columns: 2;
         columns: 2;
  }

  .lg-tc3 {
    -moz-columns: 3;
         columns: 3;
  }

  .lg-tc4 {
    -moz-columns: 4;
         columns: 4;
  }
}

@media (min-width: 1200px) {
  .xl-fs0-75 {
    font-size: calc(var(--fn-font-size) * 0.75);
  }

  .xl-fs0-875 {
    font-size: calc(var(--fn-font-size) * 0.875);
  }

  .xl-fs1 {
    font-size: var(--fn-font-size);
  }

  .xl-fs1-25 {
    font-size: calc(var(--fn-font-size) * 1.25);
  }

  .xl-fs1-5 {
    font-size: calc(var(--fn-font-size) * 1.5);
  }

  .xl-fs1-75 {
    font-size: calc(var(--fn-font-size) * 1.75);
  }

  .xl-fs2 {
    font-size: calc(var(--fn-font-size) * 2);
  }

  .xl-fs2-5 {
    font-size: calc(var(--fn-font-size) * 2.5);
  }

  .xl-fs3 {
    font-size: calc(var(--fn-font-size) * 3);
  }

  .xl-lh1 {
    line-height: 1;
  }

  .xl-lh1-25 {
    line-height: 1.25;
  }

  .xl-lh1-5 {
    line-height: 1.5;
  }

  .xl-fsn {
    font-style: normal;
  }

  .xl-fsi {
    font-style: italic;
  }

  .xl-fwn {
    font-weight: normal;
  }

  .xl-fwb {
    font-weight: bold;
  }

  .xl-tal {
    text-align: left;
  }

  .xl-tac {
    text-align: center;
  }

  .xl-tar {
    text-align: right;
  }

  .xl-taj {
    text-align: justify;
  }

  .xl-toi {
    text-overflow: initial;
  }

  .xl-toc {
    text-overflow: clip;
  }

  .xl-toe {
    text-overflow: ellipsis;
  }

  .xl-tdu {
    text-decoration: underline;
  }

  .xl-tdo {
    text-decoration: overline;
  }

  .xl-tdlt {
    text-decoration: line-through;
  }

  .xl-tdn {
    text-decoration: none;
  }

  .xl-ttu {
    text-transform: uppercase;
  }

  .xl-ttl {
    text-transform: lowercase;
  }

  .xl-ttc {
    text-transform: capitalize;
  }

  .xl-ttn {
    text-transform: none;
  }

  .xl-vabl {
    vertical-align: baseline;
  }

  .xl-vat {
    vertical-align: top;
  }

  .xl-vam {
    vertical-align: middle;
  }

  .xl-vab {
    vertical-align: bottom;
  }

  .xl-wsn {
    white-space: normal;
  }

  .xl-wsnw {
    white-space: nowrap;
  }

  .xl-wsp {
    white-space: pre;
  }

  .xl-wsi {
    white-space: inherit;
  }

  .xl-tc1 {
    -moz-columns: 1;
         columns: 1;
  }

  .xl-tc2 {
    -moz-columns: 2;
         columns: 2;
  }

  .xl-tc3 {
    -moz-columns: 3;
         columns: 3;
  }

  .xl-tc4 {
    -moz-columns: 4;
         columns: 4;
  }
}
`;

const Typography = () => <CodePage title="Typography" code={code} />;

export default Typography;
