import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.op0 {
  opacity: 0;
}

.op25 {
  opacity: 0.25;
}

.op50 {
  opacity: 0.5;
}

.op75 {
  opacity: 0.75;
}

.op100 {
  opacity: 1;
}

@media (min-width: 576px) {
  .sm-op0 {
    opacity: 0;
  }

  .sm-op25 {
    opacity: 0.25;
  }

  .sm-op50 {
    opacity: 0.5;
  }

  .sm-op75 {
    opacity: 0.75;
  }

  .sm-op100 {
    opacity: 1;
  }
}

@media (min-width: 768px) {
  .md-op0 {
    opacity: 0;
  }

  .md-op25 {
    opacity: 0.25;
  }

  .md-op50 {
    opacity: 0.5;
  }

  .md-op75 {
    opacity: 0.75;
  }

  .md-op100 {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .lg-op0 {
    opacity: 0;
  }

  .lg-op25 {
    opacity: 0.25;
  }

  .lg-op50 {
    opacity: 0.5;
  }

  .lg-op75 {
    opacity: 0.75;
  }

  .lg-op100 {
    opacity: 1;
  }
}

@media (min-width: 1200px) {
  .xl-op0 {
    opacity: 0;
  }

  .xl-op25 {
    opacity: 0.25;
  }

  .xl-op50 {
    opacity: 0.5;
  }

  .xl-op75 {
    opacity: 0.75;
  }

  .xl-op100 {
    opacity: 1;
  }
}
`;

const Opacity = () => <CodePage title="Opacity" code={code} />;

export default Opacity;
