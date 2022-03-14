import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.oh {
  overflow: hidden;
}

.oxh {
  overflow-x: hidden;
}

.oyh {
  overflow-y: hidden;
}

.os {
  overflow: scroll;
}

.oxs {
  overflow-x: scroll;
}

.oys {
  overflow-y: scroll;
}

.oa {
  overflow: auto;
}

.oxa {
  overflow-x: auto;
}

.oya {
  overflow-y: auto;
}

@media (min-width: 576px) {
  .sm-oh {
    overflow: hidden;
  }

  .sm-oxh {
    overflow-x: hidden;
  }

  .sm-oyh {
    overflow-y: hidden;
  }

  .sm-os {
    overflow: scroll;
  }

  .sm-oxs {
    overflow-x: scroll;
  }

  .sm-oys {
    overflow-y: scroll;
  }

  .sm-oa {
    overflow: auto;
  }

  .sm-oxa {
    overflow-x: auto;
  }

  .sm-oya {
    overflow-y: auto;
  }
}

@media (min-width: 768px) {
  .md-oh {
    overflow: hidden;
  }

  .md-oxh {
    overflow-x: hidden;
  }

  .md-oyh {
    overflow-y: hidden;
  }

  .md-os {
    overflow: scroll;
  }

  .md-oxs {
    overflow-x: scroll;
  }

  .md-oys {
    overflow-y: scroll;
  }

  .md-oa {
    overflow: auto;
  }

  .md-oxa {
    overflow-x: auto;
  }

  .md-oya {
    overflow-y: auto;
  }
}

@media (min-width: 992px) {
  .lg-oh {
    overflow: hidden;
  }

  .lg-oxh {
    overflow-x: hidden;
  }

  .lg-oyh {
    overflow-y: hidden;
  }

  .lg-os {
    overflow: scroll;
  }

  .lg-oxs {
    overflow-x: scroll;
  }

  .lg-oys {
    overflow-y: scroll;
  }

  .lg-oa {
    overflow: auto;
  }

  .lg-oxa {
    overflow-x: auto;
  }

  .lg-oya {
    overflow-y: auto;
  }
}

@media (min-width: 1200px) {
  .xl-oh {
    overflow: hidden;
  }

  .xl-oxh {
    overflow-x: hidden;
  }

  .xl-oyh {
    overflow-y: hidden;
  }

  .xl-os {
    overflow: scroll;
  }

  .xl-oxs {
    overflow-x: scroll;
  }

  .xl-oys {
    overflow-y: scroll;
  }

  .xl-oa {
    overflow: auto;
  }

  .xl-oxa {
    overflow-x: auto;
  }

  .xl-oya {
    overflow-y: auto;
  }
}
`;

const Overflow = () => <CodePage title="Overflow" code={code} />;

export default Overflow;
