import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.x {
  display: flex;
}

.xac {
  align-items: center;
}

.xab {
  align-items: baseline;
}

.xas {
  align-items: stretch;
}

.xafs {
  align-items: flex-start;
}

.xafe {
  align-items: flex-end;
}

.xdr {
  flex-direction: row;
}

.xdrr {
  flex-direction: row-reverse;
}

.xdc {
  flex-direction: column;
}

.xdcr {
  flex-direction: column-reverse;
}

.xjc {
  justify-content: center;
}

.xjb {
  justify-content: space-between;
}

.xja {
  justify-content: space-around;
}

.xjs {
  justify-content: flex-start;
}

.xje {
  justify-content: flex-end;
}

.xw {
  flex-wrap: wrap;
}

.xwr {
  flex-wrap: wrap-reverse;
}

.xwn {
  flex-wrap: nowrap;
}

.xi {
  flex: initial;
}

.xx {
  flex: 1;
}

.xa {
  flex: auto;
}

.xn {
  flex: none;
}

.xo0 {
  order: 0;
}

.xo1 {
  order: 1;
}

.xo2 {
  order: 2;
}

.xo3 {
  order: 3;
}

.xo4 {
  order: 4;
}

.xot {
  order: -1;
}

.xob {
  order: 99;
}

@media (min-width: 576px) {
  .sm-x {
    display: flex;
  }

  .sm-xac {
    align-items: center;
  }

  .sm-xab {
    align-items: baseline;
  }

  .sm-xas {
    align-items: stretch;
  }

  .sm-xafs {
    align-items: flex-start;
  }

  .sm-xafe {
    align-items: flex-end;
  }

  .sm-xdr {
    flex-direction: row;
  }

  .sm-xdrr {
    flex-direction: row-reverse;
  }

  .sm-xdc {
    flex-direction: column;
  }

  .sm-xdcr {
    flex-direction: column-reverse;
  }

  .sm-xjc {
    justify-content: center;
  }

  .sm-xjb {
    justify-content: space-between;
  }

  .sm-xja {
    justify-content: space-around;
  }

  .sm-xjs {
    justify-content: flex-start;
  }

  .sm-xje {
    justify-content: flex-end;
  }

  .sm-xw {
    flex-wrap: wrap;
  }

  .sm-xwr {
    flex-wrap: wrap-reverse;
  }

  .sm-xwn {
    flex-wrap: nowrap;
  }

  .sm-xi {
    flex: initial;
  }

  .sm-xx {
    flex: 1;
  }

  .sm-xa {
    flex: auto;
  }

  .sm-xn {
    flex: none;
  }

  .sm-xo0 {
    order: 0;
  }

  .sm-xo1 {
    order: 1;
  }

  .sm-xo2 {
    order: 2;
  }

  .sm-xo3 {
    order: 3;
  }

  .sm-xo4 {
    order: 4;
  }

  .sm-xot {
    order: -1;
  }

  .sm-xob {
    order: 99;
  }
}

@media (min-width: 768px) {
  .md-x {
    display: flex;
  }

  .md-xac {
    align-items: center;
  }

  .md-xab {
    align-items: baseline;
  }

  .md-xas {
    align-items: stretch;
  }

  .md-xafs {
    align-items: flex-start;
  }

  .md-xafe {
    align-items: flex-end;
  }

  .md-xdr {
    flex-direction: row;
  }

  .md-xdrr {
    flex-direction: row-reverse;
  }

  .md-xdc {
    flex-direction: column;
  }

  .md-xdcr {
    flex-direction: column-reverse;
  }

  .md-xjc {
    justify-content: center;
  }

  .md-xjb {
    justify-content: space-between;
  }

  .md-xja {
    justify-content: space-around;
  }

  .md-xjs {
    justify-content: flex-start;
  }

  .md-xje {
    justify-content: flex-end;
  }

  .md-xw {
    flex-wrap: wrap;
  }

  .md-xwr {
    flex-wrap: wrap-reverse;
  }

  .md-xwn {
    flex-wrap: nowrap;
  }

  .md-xi {
    flex: initial;
  }

  .md-xx {
    flex: 1;
  }

  .md-xa {
    flex: auto;
  }

  .md-xn {
    flex: none;
  }

  .md-xo0 {
    order: 0;
  }

  .md-xo1 {
    order: 1;
  }

  .md-xo2 {
    order: 2;
  }

  .md-xo3 {
    order: 3;
  }

  .md-xo4 {
    order: 4;
  }

  .md-xot {
    order: -1;
  }

  .md-xob {
    order: 99;
  }
}

@media (min-width: 992px) {
  .lg-x {
    display: flex;
  }

  .lg-xac {
    align-items: center;
  }

  .lg-xab {
    align-items: baseline;
  }

  .lg-xas {
    align-items: stretch;
  }

  .lg-xafs {
    align-items: flex-start;
  }

  .lg-xafe {
    align-items: flex-end;
  }

  .lg-xdr {
    flex-direction: row;
  }

  .lg-xdrr {
    flex-direction: row-reverse;
  }

  .lg-xdc {
    flex-direction: column;
  }

  .lg-xdcr {
    flex-direction: column-reverse;
  }

  .lg-xjc {
    justify-content: center;
  }

  .lg-xjb {
    justify-content: space-between;
  }

  .lg-xja {
    justify-content: space-around;
  }

  .lg-xjs {
    justify-content: flex-start;
  }

  .lg-xje {
    justify-content: flex-end;
  }

  .lg-xw {
    flex-wrap: wrap;
  }

  .lg-xwr {
    flex-wrap: wrap-reverse;
  }

  .lg-xwn {
    flex-wrap: nowrap;
  }

  .lg-xi {
    flex: initial;
  }

  .lg-xx {
    flex: 1;
  }

  .lg-xa {
    flex: auto;
  }

  .lg-xn {
    flex: none;
  }

  .lg-xo0 {
    order: 0;
  }

  .lg-xo1 {
    order: 1;
  }

  .lg-xo2 {
    order: 2;
  }

  .lg-xo3 {
    order: 3;
  }

  .lg-xo4 {
    order: 4;
  }

  .lg-xot {
    order: -1;
  }

  .lg-xob {
    order: 99;
  }
}

@media (min-width: 1200px) {
  .xl-x {
    display: flex;
  }

  .xl-xac {
    align-items: center;
  }

  .xl-xab {
    align-items: baseline;
  }

  .xl-xas {
    align-items: stretch;
  }

  .xl-xafs {
    align-items: flex-start;
  }

  .xl-xafe {
    align-items: flex-end;
  }

  .xl-xdr {
    flex-direction: row;
  }

  .xl-xdrr {
    flex-direction: row-reverse;
  }

  .xl-xdc {
    flex-direction: column;
  }

  .xl-xdcr {
    flex-direction: column-reverse;
  }

  .xl-xjc {
    justify-content: center;
  }

  .xl-xjb {
    justify-content: space-between;
  }

  .xl-xja {
    justify-content: space-around;
  }

  .xl-xjs {
    justify-content: flex-start;
  }

  .xl-xje {
    justify-content: flex-end;
  }

  .xl-xw {
    flex-wrap: wrap;
  }

  .xl-xwr {
    flex-wrap: wrap-reverse;
  }

  .xl-xwn {
    flex-wrap: nowrap;
  }

  .xl-xi {
    flex: initial;
  }

  .xl-xx {
    flex: 1;
  }

  .xl-xa {
    flex: auto;
  }

  .xl-xn {
    flex: none;
  }

  .xl-xo0 {
    order: 0;
  }

  .xl-xo1 {
    order: 1;
  }

  .xl-xo2 {
    order: 2;
  }

  .xl-xo3 {
    order: 3;
  }

  .xl-xo4 {
    order: 4;
  }

  .xl-xot {
    order: -1;
  }

  .xl-xob {
    order: 99;
  }
}
`;

const Flex = () => <CodePage title="Flex" code={code} />;

export default Flex;
