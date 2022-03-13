import React from 'react';
import CodePage from '../../../components/CodePage';

const Border = () => (
  <CodePage
    title="Border"
    code={`.bd {
  border-style: solid;
  border-width: 1px;
}

.bdt {
  border-top-style: solid;
  border-top-width: 1px;
}

.bdr {
  border-right-style: solid;
  border-right-width: 1px;
}

.bdb {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.bdl {
  border-left-style: solid;
  border-left-width: 1px;
}

.bdw0 {
  border-width: 0;
}

.bdw0-25 {
  border-width: 0.0625rem;
}

.bdw0-5 {
  border-width: 0.125rem;
}

.bdw1 {
  border-width: 0.25rem;
}

.bdw2 {
  border-width: 0.5rem;
}

.bdw3 {
  border-width: 0.75rem;
}

.bdw4 {
  border-width: 1rem;
}

.bdrd0-125 {
  border-radius: 0.125rem;
}

.bdrd0-25 {
  border-radius: 0.25rem;
}

.bdrd0-5 {
  border-radius: 0.5rem;
}

.bdrd0-75 {
  border-radius: 0.75rem;
}

.bdrd1 {
  border-radius: 1rem;
}

.bdrd100 {
  border-radius: 100%;
}

@media (min-width: 576px) {
  .sm-bd {
    border-style: solid;
    border-width: 1px;
  }

  .sm-bdt {
    border-top-style: solid;
    border-top-width: 1px;
  }

  .sm-bdr {
    border-right-style: solid;
    border-right-width: 1px;
  }

  .sm-bdb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .sm-bdl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .sm-bdw0 {
    border-width: 0;
  }

  .sm-bdw0-25 {
    border-width: 0.0625rem;
  }

  .sm-bdw0-5 {
    border-width: 0.125rem;
  }

  .sm-bdw1 {
    border-width: 0.25rem;
  }

  .sm-bdw2 {
    border-width: 0.5rem;
  }

  .sm-bdw3 {
    border-width: 0.75rem;
  }

  .sm-bdw4 {
    border-width: 1rem;
  }

  .sm-bdrd0-125 {
    border-radius: 0.125rem;
  }

  .sm-bdrd0-25 {
    border-radius: 0.25rem;
  }

  .sm-bdrd0-5 {
    border-radius: 0.5rem;
  }

  .sm-bdrd0-75 {
    border-radius: 0.75rem;
  }

  .sm-bdrd1 {
    border-radius: 1rem;
  }

  .sm-bdrd100 {
    border-radius: 100%;
  }
}

@media (min-width: 768px) {
  .md-bd {
    border-style: solid;
    border-width: 1px;
  }

  .md-bdt {
    border-top-style: solid;
    border-top-width: 1px;
  }

  .md-bdr {
    border-right-style: solid;
    border-right-width: 1px;
  }

  .md-bdb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .md-bdl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .md-bdw0 {
    border-width: 0;
  }

  .md-bdw0-25 {
    border-width: 0.0625rem;
  }

  .md-bdw0-5 {
    border-width: 0.125rem;
  }

  .md-bdw1 {
    border-width: 0.25rem;
  }

  .md-bdw2 {
    border-width: 0.5rem;
  }

  .md-bdw3 {
    border-width: 0.75rem;
  }

  .md-bdw4 {
    border-width: 1rem;
  }

  .md-bdrd0-125 {
    border-radius: 0.125rem;
  }

  .md-bdrd0-25 {
    border-radius: 0.25rem;
  }

  .md-bdrd0-5 {
    border-radius: 0.5rem;
  }

  .md-bdrd0-75 {
    border-radius: 0.75rem;
  }

  .md-bdrd1 {
    border-radius: 1rem;
  }

  .md-bdrd100 {
    border-radius: 100%;
  }

}

@media (min-width: 992px) {
  .lg-bd {
    border-style: solid;
    border-width: 1px;
  }

  .lg-bdt {
    border-top-style: solid;
    border-top-width: 1px;
  }

  .lg-bdr {
    border-right-style: solid;
    border-right-width: 1px;
  }

  .lg-bdb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .lg-bdl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .lg-bdw0 {
    border-width: 0;
  }

  .lg-bdw0-25 {
    border-width: 0.0625rem;
  }

  .lg-bdw0-5 {
    border-width: 0.125rem;
  }

  .lg-bdw1 {
    border-width: 0.25rem;
  }

  .lg-bdw2 {
    border-width: 0.5rem;
  }

  .lg-bdw3 {
    border-width: 0.75rem;
  }

  .lg-bdw4 {
    border-width: 1rem;
  }

  .lg-bdrd0-125 {
    border-radius: 0.125rem;
  }

  .lg-bdrd0-25 {
    border-radius: 0.25rem;
  }

  .lg-bdrd0-5 {
    border-radius: 0.5rem;
  }

  .lg-bdrd0-75 {
    border-radius: 0.75rem;
  }

  .lg-bdrd1 {
    border-radius: 1rem;
  }

  .lg-bdrd100 {
    border-radius: 100%;
  }
}

@media (min-width: 1200px) {
  .xl-bd {
    border-style: solid;
    border-width: 1px;
  }

  .xl-bdt {
    border-top-style: solid;
    border-top-width: 1px;
  }

  .xl-bdr {
    border-right-style: solid;
    border-right-width: 1px;
  }

  .xl-bdb {
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }

  .xl-bdl {
    border-left-style: solid;
    border-left-width: 1px;
  }

  .xl-bdw0 {
    border-width: 0;
  }

  .xl-bdw0-25 {
    border-width: 0.0625rem;
  }

  .xl-bdw0-5 {
    border-width: 0.125rem;
  }

  .xl-bdw1 {
    border-width: 0.25rem;
  }

  .xl-bdw2 {
    border-width: 0.5rem;
  }

  .xl-bdw3 {
    border-width: 0.75rem;
  }

  .xl-bdw4 {
    border-width: 1rem;
  }

  .xl-bdrd0-125 {
    border-radius: 0.125rem;
  }

  .xl-bdrd0-25 {
    border-radius: 0.25rem;
  }

  .xl-bdrd0-5 {
    border-radius: 0.5rem;
  }

  .xl-bdrd0-75 {
    border-radius: 0.75rem;
  }

  .xl-bdrd1 {
    border-radius: 1rem;
  }

  .xl-bdrd100 {
    border-radius: 100%;
  }
}
    `}
  />
);

export default Border;
