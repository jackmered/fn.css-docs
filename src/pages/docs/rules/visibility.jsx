import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.vh {
  visibility: hidden;
}

.vv {
  visibility: visible;
}

.vc {
  visibility: collapse;
}

@media (min-width: 576px) {
  .sm-vh {
    visibility: hidden;
  }

  .sm-vv {
    visibility: visible;
  }

  .sm-vc {
    visibility: collapse;
  }
}

@media (min-width: 768px) {
  .md-vh {
    visibility: hidden;
  }

  .md-vv {
    visibility: visible;
  }

  .md-vc {
    visibility: collapse;
  }
}

@media (min-width: 992px) {
  .lg-vh {
    visibility: hidden;
  }

  .lg-vv {
    visibility: visible;
  }

  .lg-vc {
    visibility: collapse;
  }
}

@media (min-width: 1200px) {
  .xl-vh {
    visibility: hidden;
  }

  .xl-vv {
    visibility: visible;
  }

  .xl-vc {
    visibility: collapse;
  }
}
`;

const Visibility = () => <CodePage title="Visibility" code={code} />;

export default Visibility;
