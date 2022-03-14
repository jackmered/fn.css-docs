import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.w0 {
  width: 0;
}

.w100 {
  width: 100%;
}

.wa {
  width: auto;
}

.wi {
  width: inherit;
}

.h0 {
  height: 0;
}

.h100 {
  height: 100%;
}

.ha {
  height: auto;
}

.hi {
  height: inherit;
}

.vw100 {
  width: 100vw;
}

.vh100 {
  height: 100vh;
}

.vwmn100 {
  min-width: 100vw;
}

.vhmn100 {
  min-height: 100vh;
}

.vwmx100 {
  max-width: 100vw;
}

.vhmx100 {
  max-height: 100vh;
}

@media (min-width: 576px) {
  .sm-w0 {
    width: 0;
  }

  .sm-w100 {
    width: 100%;
  }

  .sm-wa {
    width: auto;
  }

  .sm-wi {
    width: inherit;
  }

  .sm-h0 {
    height: 0;
  }

  .sm-h100 {
    height: 100%;
  }

  .sm-ha {
    height: auto;
  }

  .sm-hi {
    height: inherit;
  }

  .sm-vw100 {
    width: 100vw;
  }

  .sm-vh100 {
    height: 100vh;
  }

  .sm-vwmn100 {
    min-width: 100vw;
  }

  .sm-vhmn100 {
    min-height: 100vh;
  }

  .sm-vwmx100 {
    max-width: 100vw;
  }

  .sm-vhmx100 {
    max-height: 100vh;
  }
}

@media (min-width: 768px) {
  .md-w0 {
    width: 0;
  }

  .md-w100 {
    width: 100%;
  }

  .md-wa {
    width: auto;
  }

  .md-wi {
    width: inherit;
  }

  .md-h0 {
    height: 0;
  }

  .md-h100 {
    height: 100%;
  }

  .md-ha {
    height: auto;
  }

  .md-hi {
    height: inherit;
  }

  .md-vw100 {
    width: 100vw;
  }

  .md-vh100 {
    height: 100vh;
  }

  .md-vwmn100 {
    min-width: 100vw;
  }

  .md-vhmn100 {
    min-height: 100vh;
  }

  .md-vwmx100 {
    max-width: 100vw;
  }

  .md-vhmx100 {
    max-height: 100vh;
  }
}

@media (min-width: 992px) {
  .lg-w0 {
    width: 0;
  }

  .lg-w100 {
    width: 100%;
  }

  .lg-wa {
    width: auto;
  }

  .lg-wi {
    width: inherit;
  }

  .lg-h0 {
    height: 0;
  }

  .lg-h100 {
    height: 100%;
  }

  .lg-ha {
    height: auto;
  }

  .lg-hi {
    height: inherit;
  }

  .lg-vw100 {
    width: 100vw;
  }

  .lg-vh100 {
    height: 100vh;
  }

  .lg-vwmn100 {
    min-width: 100vw;
  }

  .lg-vhmn100 {
    min-height: 100vh;
  }

  .lg-vwmx100 {
    max-width: 100vw;
  }

  .lg-vhmx100 {
    max-height: 100vh;
  }
}

@media (min-width: 1200px) {
  .xl-w0 {
    width: 0;
  }

  .xl-w100 {
    width: 100%;
  }

  .xl-wa {
    width: auto;
  }

  .xl-wi {
    width: inherit;
  }

  .xl-h0 {
    height: 0;
  }

  .xl-h100 {
    height: 100%;
  }

  .xl-ha {
    height: auto;
  }

  .xl-hi {
    height: inherit;
  }

  .xl-vw100 {
    width: 100vw;
  }

  .xl-vh100 {
    height: 100vh;
  }

  .xl-vwmn100 {
    min-width: 100vw;
  }

  .xl-vhmn100 {
    min-height: 100vh;
  }

  .xl-vwmx100 {
    max-width: 100vw;
  }

  .xl-vhmx100 {
    max-height: 100vh;
  }
}
`;

const Sizing = () => <CodePage title="Sizing" code={code} />;

export default Sizing;
