import React from 'react';
import CodePage from '../../../components/CodePage';
import Alert from '../../../components/Alert';

const code = `.cl-white {
  color: var(--fn-white);
}

.bg-white {
  background-color: var(--fn-white);
}

.bd-white {
  border-color: var(--fn-white);
}

.clh-white:hover,
.clh-white:focus {
  color: var(--fn-white);
}

.bgh-white:hover,
.bgh-white:focus {
  background-color: var(--fn-white);
}

.bdh-white:hover,
.bdh-white:focus {
  border-color: var(--fn-white);
}

.cl-body {
  color: var(--fn-body);
}

.bg-body {
  background-color: var(--fn-body);
}

.bd-body {
  border-color: var(--fn-body);
}

.clh-body:hover,
.clh-body:focus {
  color: var(--fn-body);
}

.bgh-body:hover,
.bgh-body:focus {
  background-color: var(--fn-body);
}

.bdh-body:hover,
.bdh-body:focus {
  border-color: var(--fn-body);
}

.cl-primary {
  color: var(--fn-primary);
}

.bg-primary {
  background-color: var(--fn-primary);
}

.bd-primary {
  border-color: var(--fn-primary);
}

.clh-primary:hover,
.clh-primary:focus {
  color: var(--fn-primary);
}

.bgh-primary:hover,
.bgh-primary:focus {
  background-color: var(--fn-primary);
}

.bdh-primary:hover,
.bdh-primary:focus {
  border-color: var(--fn-primary);
}

.cl-secondary {
  color: var(--fn-secondary);
}

.bg-secondary {
  background-color: var(--fn-secondary);
}

.bd-secondary {
  border-color: var(--fn-secondary);
}

.clh-secondary:hover,
.clh-secondary:focus {
  color: var(--fn-secondary);
}

.bgh-secondary:hover,
.bgh-secondary:focus {
  background-color: var(--fn-secondary);
}

.bdh-secondary:hover,
.bdh-secondary:focus {
  border-color: var(--fn-secondary);
}

.cl-success {
  color: var(--fn-success);
}

.bg-success {
  background-color: var(--fn-success);
}

.bd-success {
  border-color: var(--fn-success);
}

.clh-success:hover,
.clh-success:focus {
  color: var(--fn-success);
}

.bgh-success:hover,
.bgh-success:focus {
  background-color: var(--fn-success);
}

.bdh-success:hover,
.bdh-success:focus {
  border-color: var(--fn-success);
}

.cl-info {
  color: var(--fn-info);
}

.bg-info {
  background-color: var(--fn-info);
}

.bd-info {
  border-color: var(--fn-info);
}

.clh-info:hover,
.clh-info:focus {
  color: var(--fn-info);
}

.bgh-info:hover,
.bgh-info:focus {
  background-color: var(--fn-info);
}

.bdh-info:hover,
.bdh-info:focus {
  border-color: var(--fn-info);
}

.cl-warning {
  color: var(--fn-warning);
}

.bg-warning {
  background-color: var(--fn-warning);
}

.bd-warning {
  border-color: var(--fn-warning);
}

.clh-warning:hover,
.clh-warning:focus {
  color: var(--fn-warning);
}

.bgh-warning:hover,
.bgh-warning:focus {
  background-color: var(--fn-warning);
}

.bdh-warning:hover,
.bdh-warning:focus {
  border-color: var(--fn-warning);
}

.cl-danger {
  color: var(--fn-danger);
}

.bg-danger {
  background-color: var(--fn-danger);
}

.bd-danger {
  border-color: var(--fn-danger);
}

.clh-danger:hover,
.clh-danger:focus {
  color: var(--fn-danger);
}

.bgh-danger:hover,
.bgh-danger:focus {
  background-color: var(--fn-danger);
}

.bdh-danger:hover,
.bdh-danger:focus {
  border-color: var(--fn-danger);
}

.cl-light {
  color: var(--fn-light);
}

.bg-light {
  background-color: var(--fn-light);
}

.bd-light {
  border-color: var(--fn-light);
}

.clh-light:hover,
.clh-light:focus {
  color: var(--fn-light);
}

.bgh-light:hover,
.bgh-light:focus {
  background-color: var(--fn-light);
}

.bdh-light:hover,
.bdh-light:focus {
  border-color: var(--fn-light);
}

.cl-dark {
  color: var(--fn-dark);
}

.bg-dark {
  background-color: var(--fn-dark);
}

.bd-dark {
  border-color: var(--fn-dark);
}

.clh-dark:hover,
.clh-dark:focus {
  color: var(--fn-dark);
}

.bgh-dark:hover,
.bgh-dark:focus {
  background-color: var(--fn-dark);
}

.bdh-dark:hover,
.bdh-dark:focus {
  border-color: var(--fn-dark);
}`;

const Colors = () => (
  <CodePage title="Colors" code={code}>
    <Alert type="warning">
      Color rules are not responsive, this is to keep the total filesize down.
    </Alert>

    <h4>Text colours</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <p className="p0-25 mb0 cl-white bg-dark">.cl-white</p>
      <p className="p0-25 mb0 cl-primary">.cl-primary</p>
      <p className="p0-25 mb0 cl-secondary">.cl-secondary</p>
      <p className="p0-25 mb0 cl-success">.cl-success</p>
      <p className="p0-25 mb0 cl-info">.cl-info</p>
      <p className="p0-25 mb0 cl-warning bg-dark">.cl-warning</p>
      <p className="p0-25 mb0 cl-danger">.cl-danger</p>
      <p className="p0-25 mb0 cl-light bg-dark">.cl-light</p>
      <p className="p0-25 mb0 cl-dark">.cl-dark</p>
    </section>

    <h4>Text colours hover</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <a href="#" className="p0-25 mb0 clh-white db bg-dark">
        .clh-white
      </a>
      <a href="#" className="p0-25 mb0 clh-primary cl-dark db">
        .clh-primary
      </a>
      <a href="#" className="p0-25 mb0 clh-secondary cl-dark db">
        .clh-secondary
      </a>
      <a href="#" className="p0-25 mb0 clh-success cl-dark db">
        .clh-success
      </a>
      <a href="#" className="p0-25 mb0 clh-info cl-dark db">
        .clh-info
      </a>
      <a href="#" className="p0-25 mb0 clh-warning cl-white db bg-dark">
        .clh-warning
      </a>
      <a href="#" className="p0-25 mb0 clh-danger cl-dark db">
        .clh-danger
      </a>
      <a href="#" className="p0-25 mb0 clh-light db bg-dark">
        .clh-light
      </a>
      <a href="#" className="p0-25 mb0 clh-dark db">
        .clh-dark
      </a>
    </section>

    <h4>Background colours</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <p className="p0-25 mb0 bg-white p0-5">.bg-white</p>
      <p className="p0-25 mb0 bg-primary cl-white p0-5">.bg-primary</p>
      <p className="p0-25 mb0 bg-secondary cl-white p0-5">.bg-secondary</p>
      <p className="p0-25 mb0 bg-success cl-white p0-5">.bg-success</p>
      <p className="p0-25 mb0 bg-info cl-white p0-5">.bg-info</p>
      <p className="p0-25 mb0 bg-warning p0-5">.bg-warning</p>
      <p className="p0-25 mb0 bg-danger cl-white p0-5">.bg-danger</p>
      <p className="p0-25 mb0 bg-light p0-5">.bg-light</p>
      <p className="p0-25 mb0 bg-dark cl-white p0-5">.bg-dark</p>
    </section>

    <h4>Background colours hover</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <a href="#" className="bgh-white bg-dark p0-5 db">
        .bgh-white
      </a>
      <a href="#" className="bgh-primary p0-5 db">
        .bgh-primary
      </a>
      <a href="#" className="bgh-secondary p0-5 db">
        .bgh-secondary
      </a>
      <a href="#" className="bgh-success p0-5 db">
        .bgh-success
      </a>
      <a href="#" className="bgh-info p0-5 db">
        .bgh-info
      </a>
      <a href="#" className="bgh-warning p0-5 db">
        .bgh-warning
      </a>
      <a href="#" className="bgh-danger p0-5 db">
        .bgh-danger
      </a>
      <a href="#" className="bgh-light p0-5 db">
        .bgh-light
      </a>
      <a href="#" className="bgh-dark p0-5 db">
        .bgh-dark
      </a>
    </section>

    <h4>Border colours</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <p className="p0-25 mb0 bd bd-white p0-5">.bd-white</p>
      <p className="p0-25 mb0 bd bd-primary p0-5">.bd-primary</p>
      <p className="p0-25 mb0 bd bd-secondary p0-5">.bd-secondary</p>
      <p className="p0-25 mb0 bd bd-success p0-5">.bd-success</p>
      <p className="p0-25 mb0 bd bd-info p0-5">.bd-info</p>
      <p className="p0-25 mb0 bd bd-warning p0-5">.bd-warning</p>
      <p className="p0-25 mb0 bd bd-danger p0-5">.bd-danger</p>
      <p className="p0-25 mb0 bd bd-light p0-5">.bd-light</p>
      <p className="p0-25 mb0 bd bd-dark p0-5">.bd-dark</p>
    </section>

    <h4>Border colours hover</h4>
    <section className="mb1 x xw bd bd-secondary bdrd0-25 p0-5">
      <a href="#" className="bd bdh-white p0-5 db">
        .bdh-white
      </a>
      <a href="#" className="bd bdh-primary p0-5 db">
        .bdh-primary
      </a>
      <a href="#" className="bd bdh-secondary p0-5 db">
        .bdh-secondary
      </a>
      <a href="#" className="bd bdh-success p0-5 db">
        .bdh-success
      </a>
      <a href="#" className="bd bdh-info p0-5 db">
        .bdh-info
      </a>
      <a href="#" className="bd bdh-warning p0-5 db">
        .bdh-warning
      </a>
      <a href="#" className="bd bdh-danger p0-5 db">
        .bdh-danger
      </a>
      <a href="#" className="bd bdh-light p0-5 db">
        .bdh-light
      </a>
      <a href="#" className="bd bdh-dark p0-5 db">
        .bdh-dark
      </a>
    </section>

    <h4>Code</h4>
  </CodePage>
);

export default Colors;
