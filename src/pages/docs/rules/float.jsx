import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.fl {
  float: left;
}

.fr {
  float: right;
}

.fn {
  float: none;
}

.cf::after {
  content: "";
  display: block;
  clear: both;
}

@media (min-width: 576px) {
  .sm-fl {
    float: left;
  }

  .sm-fr {
    float: right;
  }

  .sm-fn {
    float: none;
  }

  .sm-cf::after {
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 768px) {
  .md-fl {
    float: left;
  }

  .md-fr {
    float: right;
  }

  .md-fn {
    float: none;
  }

  .md-cf::after {
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 992px) {
  .lg-fl {
    float: left;
  }

  .lg-fr {
    float: right;
  }

  .lg-fn {
    float: none;
  }

  .lg-cf::after {
    content: "";
    display: block;
    clear: both;
  }
}

@media (min-width: 1200px) {
  .xl-fl {
    float: left;
  }

  .xl-fr {
    float: right;
  }

  .xl-fn {
    float: none;
  }

  .xl-cf::after {
    content: "";
    display: block;
    clear: both;
  }
}
`;

const Float = () => <CodePage title="Float" code={code} />;

export default Float;
