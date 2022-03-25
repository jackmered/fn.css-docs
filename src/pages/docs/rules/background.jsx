import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.bgsc {
  background-size: cover;
}

.bgsct {
  background-size: contain;
}

.bgpc {
  background-position: center;
}

.bgpt {
  background-position: top;
}

.bgpr {
  background-position: right;
}

.bgpb {
  background-position: bottom;
}

.bgpl {
  background-position: left;
}

.bgrn {
  background-repeat: no-repeat;
}

.bgrx {
  background-repeat: repeat-x;
}

.bgry {
  background-repeat: repeat-y;
}

@media (min-width: 576px) {
  .sm-bgsc {
    background-size: cover;
  }

  .sm-bgsct {
    background-size: contain;
  }

  .sm-bgpc {
    background-position: center;
  }

  .sm-bgpt {
    background-position: top;
  }

  .sm-bgpr {
    background-position: right;
  }

  .sm-bgpb {
    background-position: bottom;
  }

  .sm-bgpl {
    background-position: left;
  }

  .sm-bgrn {
    background-repeat: no-repeat;
  }

  .sm-bgrx {
    background-repeat: repeat-x;
  }

  .sm-bgry {
    background-repeat: repeat-y;
  }
}

@media (min-width: 768px) {
  .md-bgsc {
    background-size: cover;
  }

  .md-bgsct {
    background-size: contain;
  }

  .md-bgpc {
    background-position: center;
  }

  .md-bgpt {
    background-position: top;
  }

  .md-bgpr {
    background-position: right;
  }

  .md-bgpb {
    background-position: bottom;
  }

  .md-bgpl {
    background-position: left;
  }

  .md-bgrn {
    background-repeat: no-repeat;
  }

  .md-bgrx {
    background-repeat: repeat-x;
  }

  .md-bgry {
    background-repeat: repeat-y;
  }
}

@media (min-width: 992px) {
  .lg-bgsc {
    background-size: cover;
  }

  .lg-bgsct {
    background-size: contain;
  }

  .lg-bgpc {
    background-position: center;
  }

  .lg-bgpt {
    background-position: top;
  }

  .lg-bgpr {
    background-position: right;
  }

  .lg-bgpb {
    background-position: bottom;
  }

  .lg-bgpl {
    background-position: left;
  }

  .lg-bgrn {
    background-repeat: no-repeat;
  }

  .lg-bgrx {
    background-repeat: repeat-x;
  }

  .lg-bgry {
    background-repeat: repeat-y;
  }
}

@media (min-width: 1200px) {
  .xl-bgsc {
    background-size: cover;
  }

  .xl-bgsct {
    background-size: contain;
  }

  .xl-bgpc {
    background-position: center;
  }

  .xl-bgpt {
    background-position: top;
  }

  .xl-bgpr {
    background-position: right;
  }

  .xl-bgpb {
    background-position: bottom;
  }

  .xl-bgpl {
    background-position: left;
  }

  .xl-bgrn {
    background-repeat: no-repeat;
  }

  .xl-bgrx {
    background-repeat: repeat-x;
  }

  .xl-bgry {
    background-repeat: repeat-y;
  }
}`;

const Background = () => <CodePage title="Background" code={code} />;

export default Background;
