import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.lspo {
  list-style-position: outside;
}

.lspi {
  list-style-position: inside;
}

.lstc {
  list-style-type: circle;
}

.lstd {
  list-style-type: disc;
}

.lsts {
  list-style-type: square;
}

.lstdi {
  list-style-type: decimal;
}

.lstdlz {
  list-style-type: decimal-leading-zero;
}

.lstla {
  list-style-type: lower-alpha;
}

.lstua {
  list-style-type: upper-alpha;
}

.lstlr {
  list-style-type: lower-roman;
}

.lstur {
  list-style-type: upper-roman;
}

.lstn {
  list-style-type: none;
}

.lsti {
  list-style-type: inherit;
}

@media (min-width: 576px) {
  .sm-lspo {
    list-style-position: outside;
  }

  .sm-lspi {
    list-style-position: inside;
  }

  .sm-lstc {
    list-style-type: circle;
  }

  .sm-lstd {
    list-style-type: disc;
  }

  .sm-lsts {
    list-style-type: square;
  }

  .sm-lstdi {
    list-style-type: decimal;
  }

  .sm-lstdlz {
    list-style-type: decimal-leading-zero;
  }

  .sm-lstla {
    list-style-type: lower-alpha;
  }

  .sm-lstua {
    list-style-type: upper-alpha;
  }

  .sm-lstlr {
    list-style-type: lower-roman;
  }

  .sm-lstur {
    list-style-type: upper-roman;
  }

  .sm-lstn {
    list-style-type: none;
  }

  .sm-lsti {
    list-style-type: inherit;
  }
}

@media (min-width: 768px) {
  .md-lspo {
    list-style-position: outside;
  }

  .md-lspi {
    list-style-position: inside;
  }

  .md-lstc {
    list-style-type: circle;
  }

  .md-lstd {
    list-style-type: disc;
  }

  .md-lsts {
    list-style-type: square;
  }

  .md-lstdi {
    list-style-type: decimal;
  }

  .md-lstdlz {
    list-style-type: decimal-leading-zero;
  }

  .md-lstla {
    list-style-type: lower-alpha;
  }

  .md-lstua {
    list-style-type: upper-alpha;
  }

  .md-lstlr {
    list-style-type: lower-roman;
  }

  .md-lstur {
    list-style-type: upper-roman;
  }

  .md-lstn {
    list-style-type: none;
  }

  .md-lsti {
    list-style-type: inherit;
  }
}

@media (min-width: 992px) {
  .lg-lspo {
    list-style-position: outside;
  }

  .lg-lspi {
    list-style-position: inside;
  }

  .lg-lstc {
    list-style-type: circle;
  }

  .lg-lstd {
    list-style-type: disc;
  }

  .lg-lsts {
    list-style-type: square;
  }

  .lg-lstdi {
    list-style-type: decimal;
  }

  .lg-lstdlz {
    list-style-type: decimal-leading-zero;
  }

  .lg-lstla {
    list-style-type: lower-alpha;
  }

  .lg-lstua {
    list-style-type: upper-alpha;
  }

  .lg-lstlr {
    list-style-type: lower-roman;
  }

  .lg-lstur {
    list-style-type: upper-roman;
  }

  .lg-lstn {
    list-style-type: none;
  }

  .lg-lsti {
    list-style-type: inherit;
  }
}

@media (min-width: 1200px) {
  .xl-lspo {
    list-style-position: outside;
  }

  .xl-lspi {
    list-style-position: inside;
  }

  .xl-lstc {
    list-style-type: circle;
  }

  .xl-lstd {
    list-style-type: disc;
  }

  .xl-lsts {
    list-style-type: square;
  }

  .xl-lstdi {
    list-style-type: decimal;
  }

  .xl-lstdlz {
    list-style-type: decimal-leading-zero;
  }

  .xl-lstla {
    list-style-type: lower-alpha;
  }

  .xl-lstua {
    list-style-type: upper-alpha;
  }

  .xl-lstlr {
    list-style-type: lower-roman;
  }

  .xl-lstur {
    list-style-type: upper-roman;
  }

  .xl-lstn {
    list-style-type: none;
  }

  .xl-lsti {
    list-style-type: inherit;
  }
}
`;

const List = () => <CodePage title="List" code={code} />;

export default List;
