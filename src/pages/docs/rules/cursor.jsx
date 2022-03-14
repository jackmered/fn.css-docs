import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.curp {
  cursor: pointer;
}

.curd {
  cursor: default;
}

.cura {
  cursor: alias;
}

.curzi {
  cursor: zoom-in;
}

.curzo {
  cursor: zoom-out;
}

.usn {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.usa {
  -webkit-user-select: auto;
     -moz-user-select: auto;
      -ms-user-select: auto;
          user-select: auto;
}

.ust {
  -webkit-user-select: text;
     -moz-user-select: text;
      -ms-user-select: text;
          user-select: text;
}

.pen {
  pointer-events: none;
}

.pea {
  pointer-events: auto;
}

@media (min-width: 576px) {
  .sm-curp {
    cursor: pointer;
  }

  .sm-curd {
    cursor: default;
  }

  .sm-cura {
    cursor: alias;
  }

  .sm-curzi {
    cursor: zoom-in;
  }

  .sm-curzo {
    cursor: zoom-out;
  }

  .sm-usn {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .sm-usa {
    -webkit-user-select: auto;
       -moz-user-select: auto;
        -ms-user-select: auto;
            user-select: auto;
  }

  .sm-ust {
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
  }

  .sm-pen {
    pointer-events: none;
  }

  .sm-pea {
    pointer-events: auto;
  }
}

@media (min-width: 768px) {
  .md-curp {
    cursor: pointer;
  }

  .md-curd {
    cursor: default;
  }

  .md-cura {
    cursor: alias;
  }

  .md-curzi {
    cursor: zoom-in;
  }

  .md-curzo {
    cursor: zoom-out;
  }

  .md-usn {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .md-usa {
    -webkit-user-select: auto;
       -moz-user-select: auto;
        -ms-user-select: auto;
            user-select: auto;
  }

  .md-ust {
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
  }

  .md-pen {
    pointer-events: none;
  }

  .md-pea {
    pointer-events: auto;
  }
}

@media (min-width: 992px) {
  .lg-curp {
    cursor: pointer;
  }

  .lg-curd {
    cursor: default;
  }

  .lg-cura {
    cursor: alias;
  }

  .lg-curzi {
    cursor: zoom-in;
  }

  .lg-curzo {
    cursor: zoom-out;
  }

  .lg-usn {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .lg-usa {
    -webkit-user-select: auto;
       -moz-user-select: auto;
        -ms-user-select: auto;
            user-select: auto;
  }

  .lg-ust {
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
  }

  .lg-pen {
    pointer-events: none;
  }

  .lg-pea {
    pointer-events: auto;
  }
}

@media (min-width: 1200px) {
  .xl-curp {
    cursor: pointer;
  }

  .xl-curd {
    cursor: default;
  }

  .xl-cura {
    cursor: alias;
  }

  .xl-curzi {
    cursor: zoom-in;
  }

  .xl-curzo {
    cursor: zoom-out;
  }

  .xl-usn {
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
  }

  .xl-usa {
    -webkit-user-select: auto;
       -moz-user-select: auto;
        -ms-user-select: auto;
            user-select: auto;
  }

  .xl-ust {
    -webkit-user-select: text;
       -moz-user-select: text;
        -ms-user-select: text;
            user-select: text;
  }

  .xl-pen {
    pointer-events: none;
  }

  .xl-pea {
    pointer-events: auto;
  }
}
`;

const Cursor = () => <CodePage title="Cursor" code={code} />;

export default Cursor;
