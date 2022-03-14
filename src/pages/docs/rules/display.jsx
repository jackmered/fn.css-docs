import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.df {
  display: flex;
}

.db {
  display: block;
}

.dib {
  display: inline-block;
}

.di {
  display: inline;
}

.dt {
  display: table;
}

.dtc {
  display: table-cell;
}

.dtr {
  display: table-row;
}

.dn {
  display: none;
}

@media (min-width: 576px) {
  .sm-df {
    display: flex;
  }

  .sm-db {
    display: block;
  }

  .sm-dib {
    display: inline-block;
  }

  .sm-di {
    display: inline;
  }

  .sm-dt {
    display: table;
  }

  .sm-dtc {
    display: table-cell;
  }

  .sm-dtr {
    display: table-row;
  }

  .sm-dn {
    display: none;
  }
}

@media (min-width: 768px) {
  .md-df {
    display: flex;
  }

  .md-db {
    display: block;
  }

  .md-dib {
    display: inline-block;
  }

  .md-di {
    display: inline;
  }

  .md-dt {
    display: table;
  }

  .md-dtc {
    display: table-cell;
  }

  .md-dtr {
    display: table-row;
  }

  .md-dn {
    display: none;
  }
}

@media (min-width: 992px) {
  .lg-df {
    display: flex;
  }

  .lg-db {
    display: block;
  }

  .lg-dib {
    display: inline-block;
  }

  .lg-di {
    display: inline;
  }

  .lg-dt {
    display: table;
  }

  .lg-dtc {
    display: table-cell;
  }

  .lg-dtr {
    display: table-row;
  }

  .lg-dn {
    display: none;
  }
}

@media (min-width: 1200px) {
  .xl-df {
    display: flex;
  }

  .xl-db {
    display: block;
  }

  .xl-dib {
    display: inline-block;
  }

  .xl-di {
    display: inline;
  }

  .xl-dt {
    display: table;
  }

  .xl-dtc {
    display: table-cell;
  }

  .xl-dtr {
    display: table-row;
  }

  .xl-dn {
    display: none;
  }
}
`;

const Display = () => <CodePage title="Display" code={code} />;

export default Display;
