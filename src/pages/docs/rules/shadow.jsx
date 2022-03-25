import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.bs1 {
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
}

.bs2 {
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
}

.bs3 {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}

.bs4 {
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
}

.bs5 {
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
}

@media (min-width: 576px) {
  .sm-bs1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  .sm-bs2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  .sm-bs3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .sm-bs4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .sm-bs5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 768px) {
  .md-bs1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  .md-bs2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  .md-bs3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .md-bs4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .md-bs5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 992px) {
  .lg-bs1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  .lg-bs2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  .lg-bs3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .lg-bs4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .lg-bs5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 1200px) {
  .xl-bs1 {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  }

  .xl-bs2 {
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.2);
  }

  .xl-bs3 {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .xl-bs4 {
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .xl-bs5 {
    box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
}
`;

const Shadow = () => <CodePage title="Shadow" code={code} />;

export default Shadow;
