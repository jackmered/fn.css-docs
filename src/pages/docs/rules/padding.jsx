import React from 'react';
import CodePage from '../../../components/CodePage';

const code = `.p0 {
  padding: 0;
}

.p0-25 {
  padding: var(--fn-spacer0-25x);
}

.p0-5 {
  padding: var(--fn-spacer0-5x);
}

.p1 {
  padding: var(--fn-spacer);
}

.p1-5 {
  padding: var(--fn-spacer1-5x);
}

.p2 {
  padding: var(--fn-spacer2x);
}

.p3 {
  padding: var(--fn-spacer3x);
}

.pt0 {
  padding-top: 0;
}

.pt0-25 {
  padding-top: var(--fn-spacer0-25x);
}

.pt0-5 {
  padding-top: var(--fn-spacer0-5x);
}

.pt1 {
  padding-top: var(--fn-spacer);
}

.pt1-5 {
  padding-top: var(--fn-spacer1-5x);
}

.pt2 {
  padding-top: var(--fn-spacer2x);
}

.pt3 {
  padding-top: var(--fn-spacer3x);
}

.pr0 {
  padding-right: 0;
}

.pr0-25 {
  padding-right: var(--fn-spacer0-25x);
}

.pr0-5 {
  padding-right: var(--fn-spacer0-5x);
}

.pr1 {
  padding-right: var(--fn-spacer);
}

.pr1-5 {
  padding-right: var(--fn-spacer1-5x);
}

.pr2 {
  padding-right: var(--fn-spacer2x);
}

.pr3 {
  padding-right: var(--fn-spacer3x);
}

.pb0 {
  padding-bottom: 0;
}

.pb0-25 {
  padding-bottom: var(--fn-spacer0-25x);
}

.pb0-5 {
  padding-bottom: var(--fn-spacer0-5x);
}

.pb1 {
  padding-bottom: var(--fn-spacer);
}

.pb1-5 {
  padding-bottom: var(--fn-spacer1-5x);
}

.pb2 {
  padding-bottom: var(--fn-spacer2x);
}

.pb3 {
  padding-bottom: var(--fn-spacer3x);
}

.pl0 {
  padding-left: 0;
}

.pl0-25 {
  padding-left: var(--fn-spacer0-25x);
}

.pl0-5 {
  padding-left: var(--fn-spacer0-5x);
}

.pl1 {
  padding-left: var(--fn-spacer);
}

.pl1-5 {
  padding-left: var(--fn-spacer1-5x);
}

.pl2 {
  padding-left: var(--fn-spacer2x);
}

.pl3 {
  padding-left: var(--fn-spacer3x);
}

.px0 {
  padding-left: 0;
  padding-right: 0;
}

.px0-25 {
  padding-left: var(--fn-spacer0-25x);
  padding-right: var(--fn-spacer0-25x);
}

.px0-5 {
  padding-left: var(--fn-spacer0-5x);
  padding-right: var(--fn-spacer0-5x);
}

.px1 {
  padding-left: var(--fn-spacer);
  padding-right: var(--fn-spacer);
}

.px1-5 {
  padding-left: var(--fn-spacer1-5x);
  padding-right: var(--fn-spacer1-5x);
}

.px2 {
  padding-left: var(--fn-spacer2x);
  padding-right: var(--fn-spacer2x);
}

.px3 {
  padding-left: var(--fn-spacer3x);
  padding-right: var(--fn-spacer3x);
}

.py0 {
  padding-top: 0;
  padding-bottom: 0;
}

.py0-25 {
  padding-top: var(--fn-spacer0-25x);
  padding-bottom: var(--fn-spacer0-25x);
}

.py0-5 {
  padding-top: var(--fn-spacer0-5x);
  padding-bottom: var(--fn-spacer0-5x);
}

.py1 {
  padding-top: var(--fn-spacer);
  padding-bottom: var(--fn-spacer);
}

.py1-5 {
  padding-top: var(--fn-spacer1-5x);
  padding-bottom: var(--fn-spacer1-5x);
}

.py2 {
  padding-top: var(--fn-spacer2x);
  padding-bottom: var(--fn-spacer2x);
}

.py3 {
  padding-top: var(--fn-spacer3x);
  padding-bottom: var(--fn-spacer3x);
}

@media (min-width: 576px) {
  .sm-p0 {
    padding: 0;
  }

  .sm-p0-25 {
    padding: var(--fn-spacer0-25x);
  }

  .sm-p0-5 {
    padding: var(--fn-spacer0-5x);
  }

  .sm-p1 {
    padding: var(--fn-spacer);
  }

  .sm-p1-5 {
    padding: var(--fn-spacer1-5x);
  }

  .sm-p2 {
    padding: var(--fn-spacer2x);
  }

  .sm-p3 {
    padding: var(--fn-spacer3x);
  }

  .sm-pt0 {
    padding-top: 0;
  }

  .sm-pt0-25 {
    padding-top: var(--fn-spacer0-25x);
  }

  .sm-pt0-5 {
    padding-top: var(--fn-spacer0-5x);
  }

  .sm-pt1 {
    padding-top: var(--fn-spacer);
  }

  .sm-pt1-5 {
    padding-top: var(--fn-spacer1-5x);
  }

  .sm-pt2 {
    padding-top: var(--fn-spacer2x);
  }

  .sm-pt3 {
    padding-top: var(--fn-spacer3x);
  }

  .sm-pr0 {
    padding-right: 0;
  }

  .sm-pr0-25 {
    padding-right: var(--fn-spacer0-25x);
  }

  .sm-pr0-5 {
    padding-right: var(--fn-spacer0-5x);
  }

  .sm-pr1 {
    padding-right: var(--fn-spacer);
  }

  .sm-pr1-5 {
    padding-right: var(--fn-spacer1-5x);
  }

  .sm-pr2 {
    padding-right: var(--fn-spacer2x);
  }

  .sm-pr3 {
    padding-right: var(--fn-spacer3x);
  }

  .sm-pb0 {
    padding-bottom: 0;
  }

  .sm-pb0-25 {
    padding-bottom: var(--fn-spacer0-25x);
  }

  .sm-pb0-5 {
    padding-bottom: var(--fn-spacer0-5x);
  }

  .sm-pb1 {
    padding-bottom: var(--fn-spacer);
  }

  .sm-pb1-5 {
    padding-bottom: var(--fn-spacer1-5x);
  }

  .sm-pb2 {
    padding-bottom: var(--fn-spacer2x);
  }

  .sm-pb3 {
    padding-bottom: var(--fn-spacer3x);
  }

  .sm-pl0 {
    padding-left: 0;
  }

  .sm-pl0-25 {
    padding-left: var(--fn-spacer0-25x);
  }

  .sm-pl0-5 {
    padding-left: var(--fn-spacer0-5x);
  }

  .sm-pl1 {
    padding-left: var(--fn-spacer);
  }

  .sm-pl1-5 {
    padding-left: var(--fn-spacer1-5x);
  }

  .sm-pl2 {
    padding-left: var(--fn-spacer2x);
  }

  .sm-pl3 {
    padding-left: var(--fn-spacer3x);
  }

  .sm-px0 {
    padding-left: 0;
    padding-right: 0;
  }

  .sm-px0-25 {
    padding-left: var(--fn-spacer0-25x);
    padding-right: var(--fn-spacer0-25x);
  }

  .sm-px0-5 {
    padding-left: var(--fn-spacer0-5x);
    padding-right: var(--fn-spacer0-5x);
  }

  .sm-px1 {
    padding-left: var(--fn-spacer);
    padding-right: var(--fn-spacer);
  }

  .sm-px1-5 {
    padding-left: var(--fn-spacer1-5x);
    padding-right: var(--fn-spacer1-5x);
  }

  .sm-px2 {
    padding-left: var(--fn-spacer2x);
    padding-right: var(--fn-spacer2x);
  }

  .sm-px3 {
    padding-left: var(--fn-spacer3x);
    padding-right: var(--fn-spacer3x);
  }

  .sm-py0 {
    padding-top: 0;
    padding-bottom: 0;
  }

  .sm-py0-25 {
    padding-top: var(--fn-spacer0-25x);
    padding-bottom: var(--fn-spacer0-25x);
  }

  .sm-py0-5 {
    padding-top: var(--fn-spacer0-5x);
    padding-bottom: var(--fn-spacer0-5x);
  }

  .sm-py1 {
    padding-top: var(--fn-spacer);
    padding-bottom: var(--fn-spacer);
  }

  .sm-py1-5 {
    padding-top: var(--fn-spacer1-5x);
    padding-bottom: var(--fn-spacer1-5x);
  }

  .sm-py2 {
    padding-top: var(--fn-spacer2x);
    padding-bottom: var(--fn-spacer2x);
  }

  .sm-py3 {
    padding-top: var(--fn-spacer3x);
    padding-bottom: var(--fn-spacer3x);
  }
}

@media (min-width: 768px) {
  .md-p0 {
    padding: 0;
  }

  .md-p0-25 {
    padding: var(--fn-spacer0-25x);
  }

  .md-p0-5 {
    padding: var(--fn-spacer0-5x);
  }

  .md-p1 {
    padding: var(--fn-spacer);
  }

  .md-p1-5 {
    padding: var(--fn-spacer1-5x);
  }

  .md-p2 {
    padding: var(--fn-spacer2x);
  }

  .md-p3 {
    padding: var(--fn-spacer3x);
  }

  .md-pt0 {
    padding-top: 0;
  }

  .md-pt0-25 {
    padding-top: var(--fn-spacer0-25x);
  }

  .md-pt0-5 {
    padding-top: var(--fn-spacer0-5x);
  }

  .md-pt1 {
    padding-top: var(--fn-spacer);
  }

  .md-pt1-5 {
    padding-top: var(--fn-spacer1-5x);
  }

  .md-pt2 {
    padding-top: var(--fn-spacer2x);
  }

  .md-pt3 {
    padding-top: var(--fn-spacer3x);
  }

  .md-pr0 {
    padding-right: 0;
  }

  .md-pr0-25 {
    padding-right: var(--fn-spacer0-25x);
  }

  .md-pr0-5 {
    padding-right: var(--fn-spacer0-5x);
  }

  .md-pr1 {
    padding-right: var(--fn-spacer);
  }

  .md-pr1-5 {
    padding-right: var(--fn-spacer1-5x);
  }

  .md-pr2 {
    padding-right: var(--fn-spacer2x);
  }

  .md-pr3 {
    padding-right: var(--fn-spacer3x);
  }

  .md-pb0 {
    padding-bottom: 0;
  }

  .md-pb0-25 {
    padding-bottom: var(--fn-spacer0-25x);
  }

  .md-pb0-5 {
    padding-bottom: var(--fn-spacer0-5x);
  }

  .md-pb1 {
    padding-bottom: var(--fn-spacer);
  }

  .md-pb1-5 {
    padding-bottom: var(--fn-spacer1-5x);
  }

  .md-pb2 {
    padding-bottom: var(--fn-spacer2x);
  }

  .md-pb3 {
    padding-bottom: var(--fn-spacer3x);
  }

  .md-pl0 {
    padding-left: 0;
  }

  .md-pl0-25 {
    padding-left: var(--fn-spacer0-25x);
  }

  .md-pl0-5 {
    padding-left: var(--fn-spacer0-5x);
  }

  .md-pl1 {
    padding-left: var(--fn-spacer);
  }

  .md-pl1-5 {
    padding-left: var(--fn-spacer1-5x);
  }

  .md-pl2 {
    padding-left: var(--fn-spacer2x);
  }

  .md-pl3 {
    padding-left: var(--fn-spacer3x);
  }

  .md-px0 {
    padding-left: 0;
    padding-right: 0;
  }

  .md-px0-25 {
    padding-left: var(--fn-spacer0-25x);
    padding-right: var(--fn-spacer0-25x);
  }

  .md-px0-5 {
    padding-left: var(--fn-spacer0-5x);
    padding-right: var(--fn-spacer0-5x);
  }

  .md-px1 {
    padding-left: var(--fn-spacer);
    padding-right: var(--fn-spacer);
  }

  .md-px1-5 {
    padding-left: var(--fn-spacer1-5x);
    padding-right: var(--fn-spacer1-5x);
  }

  .md-px2 {
    padding-left: var(--fn-spacer2x);
    padding-right: var(--fn-spacer2x);
  }

  .md-px3 {
    padding-left: var(--fn-spacer3x);
    padding-right: var(--fn-spacer3x);
  }

  .md-py0 {
    padding-top: 0;
    padding-bottom: 0;
  }

  .md-py0-25 {
    padding-top: var(--fn-spacer0-25x);
    padding-bottom: var(--fn-spacer0-25x);
  }

  .md-py0-5 {
    padding-top: var(--fn-spacer0-5x);
    padding-bottom: var(--fn-spacer0-5x);
  }

  .md-py1 {
    padding-top: var(--fn-spacer);
    padding-bottom: var(--fn-spacer);
  }

  .md-py1-5 {
    padding-top: var(--fn-spacer1-5x);
    padding-bottom: var(--fn-spacer1-5x);
  }

  .md-py2 {
    padding-top: var(--fn-spacer2x);
    padding-bottom: var(--fn-spacer2x);
  }

  .md-py3 {
    padding-top: var(--fn-spacer3x);
    padding-bottom: var(--fn-spacer3x);
  }
}

@media (min-width: 992px) {
  .lg-p0 {
    padding: 0;
  }

  .lg-p0-25 {
    padding: var(--fn-spacer0-25x);
  }

  .lg-p0-5 {
    padding: var(--fn-spacer0-5x);
  }

  .lg-p1 {
    padding: var(--fn-spacer);
  }

  .lg-p1-5 {
    padding: var(--fn-spacer1-5x);
  }

  .lg-p2 {
    padding: var(--fn-spacer2x);
  }

  .lg-p3 {
    padding: var(--fn-spacer3x);
  }

  .lg-pt0 {
    padding-top: 0;
  }

  .lg-pt0-25 {
    padding-top: var(--fn-spacer0-25x);
  }

  .lg-pt0-5 {
    padding-top: var(--fn-spacer0-5x);
  }

  .lg-pt1 {
    padding-top: var(--fn-spacer);
  }

  .lg-pt1-5 {
    padding-top: var(--fn-spacer1-5x);
  }

  .lg-pt2 {
    padding-top: var(--fn-spacer2x);
  }

  .lg-pt3 {
    padding-top: var(--fn-spacer3x);
  }

  .lg-pr0 {
    padding-right: 0;
  }

  .lg-pr0-25 {
    padding-right: var(--fn-spacer0-25x);
  }

  .lg-pr0-5 {
    padding-right: var(--fn-spacer0-5x);
  }

  .lg-pr1 {
    padding-right: var(--fn-spacer);
  }

  .lg-pr1-5 {
    padding-right: var(--fn-spacer1-5x);
  }

  .lg-pr2 {
    padding-right: var(--fn-spacer2x);
  }

  .lg-pr3 {
    padding-right: var(--fn-spacer3x);
  }

  .lg-pb0 {
    padding-bottom: 0;
  }

  .lg-pb0-25 {
    padding-bottom: var(--fn-spacer0-25x);
  }

  .lg-pb0-5 {
    padding-bottom: var(--fn-spacer0-5x);
  }

  .lg-pb1 {
    padding-bottom: var(--fn-spacer);
  }

  .lg-pb1-5 {
    padding-bottom: var(--fn-spacer1-5x);
  }

  .lg-pb2 {
    padding-bottom: var(--fn-spacer2x);
  }

  .lg-pb3 {
    padding-bottom: var(--fn-spacer3x);
  }

  .lg-pl0 {
    padding-left: 0;
  }

  .lg-pl0-25 {
    padding-left: var(--fn-spacer0-25x);
  }

  .lg-pl0-5 {
    padding-left: var(--fn-spacer0-5x);
  }

  .lg-pl1 {
    padding-left: var(--fn-spacer);
  }

  .lg-pl1-5 {
    padding-left: var(--fn-spacer1-5x);
  }

  .lg-pl2 {
    padding-left: var(--fn-spacer2x);
  }

  .lg-pl3 {
    padding-left: var(--fn-spacer3x);
  }

  .lg-px0 {
    padding-left: 0;
    padding-right: 0;
  }

  .lg-px0-25 {
    padding-left: var(--fn-spacer0-25x);
    padding-right: var(--fn-spacer0-25x);
  }

  .lg-px0-5 {
    padding-left: var(--fn-spacer0-5x);
    padding-right: var(--fn-spacer0-5x);
  }

  .lg-px1 {
    padding-left: var(--fn-spacer);
    padding-right: var(--fn-spacer);
  }

  .lg-px1-5 {
    padding-left: var(--fn-spacer1-5x);
    padding-right: var(--fn-spacer1-5x);
  }

  .lg-px2 {
    padding-left: var(--fn-spacer2x);
    padding-right: var(--fn-spacer2x);
  }

  .lg-px3 {
    padding-left: var(--fn-spacer3x);
    padding-right: var(--fn-spacer3x);
  }

  .lg-py0 {
    padding-top: 0;
    padding-bottom: 0;
  }

  .lg-py0-25 {
    padding-top: var(--fn-spacer0-25x);
    padding-bottom: var(--fn-spacer0-25x);
  }

  .lg-py0-5 {
    padding-top: var(--fn-spacer0-5x);
    padding-bottom: var(--fn-spacer0-5x);
  }

  .lg-py1 {
    padding-top: var(--fn-spacer);
    padding-bottom: var(--fn-spacer);
  }

  .lg-py1-5 {
    padding-top: var(--fn-spacer1-5x);
    padding-bottom: var(--fn-spacer1-5x);
  }

  .lg-py2 {
    padding-top: var(--fn-spacer2x);
    padding-bottom: var(--fn-spacer2x);
  }

  .lg-py3 {
    padding-top: var(--fn-spacer3x);
    padding-bottom: var(--fn-spacer3x);
  }
}

@media (min-width: 1200px) {
  .xl-p0 {
    padding: 0;
  }

  .xl-p0-25 {
    padding: var(--fn-spacer0-25x);
  }

  .xl-p0-5 {
    padding: var(--fn-spacer0-5x);
  }

  .xl-p1 {
    padding: var(--fn-spacer);
  }

  .xl-p1-5 {
    padding: var(--fn-spacer1-5x);
  }

  .xl-p2 {
    padding: var(--fn-spacer2x);
  }

  .xl-p3 {
    padding: var(--fn-spacer3x);
  }

  .xl-pt0 {
    padding-top: 0;
  }

  .xl-pt0-25 {
    padding-top: var(--fn-spacer0-25x);
  }

  .xl-pt0-5 {
    padding-top: var(--fn-spacer0-5x);
  }

  .xl-pt1 {
    padding-top: var(--fn-spacer);
  }

  .xl-pt1-5 {
    padding-top: var(--fn-spacer1-5x);
  }

  .xl-pt2 {
    padding-top: var(--fn-spacer2x);
  }

  .xl-pt3 {
    padding-top: var(--fn-spacer3x);
  }

  .xl-pr0 {
    padding-right: 0;
  }

  .xl-pr0-25 {
    padding-right: var(--fn-spacer0-25x);
  }

  .xl-pr0-5 {
    padding-right: var(--fn-spacer0-5x);
  }

  .xl-pr1 {
    padding-right: var(--fn-spacer);
  }

  .xl-pr1-5 {
    padding-right: var(--fn-spacer1-5x);
  }

  .xl-pr2 {
    padding-right: var(--fn-spacer2x);
  }

  .xl-pr3 {
    padding-right: var(--fn-spacer3x);
  }

  .xl-pb0 {
    padding-bottom: 0;
  }

  .xl-pb0-25 {
    padding-bottom: var(--fn-spacer0-25x);
  }

  .xl-pb0-5 {
    padding-bottom: var(--fn-spacer0-5x);
  }

  .xl-pb1 {
    padding-bottom: var(--fn-spacer);
  }

  .xl-pb1-5 {
    padding-bottom: var(--fn-spacer1-5x);
  }

  .xl-pb2 {
    padding-bottom: var(--fn-spacer2x);
  }

  .xl-pb3 {
    padding-bottom: var(--fn-spacer3x);
  }

  .xl-pl0 {
    padding-left: 0;
  }

  .xl-pl0-25 {
    padding-left: var(--fn-spacer0-25x);
  }

  .xl-pl0-5 {
    padding-left: var(--fn-spacer0-5x);
  }

  .xl-pl1 {
    padding-left: var(--fn-spacer);
  }

  .xl-pl1-5 {
    padding-left: var(--fn-spacer1-5x);
  }

  .xl-pl2 {
    padding-left: var(--fn-spacer2x);
  }

  .xl-pl3 {
    padding-left: var(--fn-spacer3x);
  }

  .xl-px0 {
    padding-left: 0;
    padding-right: 0;
  }

  .xl-px0-25 {
    padding-left: var(--fn-spacer0-25x);
    padding-right: var(--fn-spacer0-25x);
  }

  .xl-px0-5 {
    padding-left: var(--fn-spacer0-5x);
    padding-right: var(--fn-spacer0-5x);
  }

  .xl-px1 {
    padding-left: var(--fn-spacer);
    padding-right: var(--fn-spacer);
  }

  .xl-px1-5 {
    padding-left: var(--fn-spacer1-5x);
    padding-right: var(--fn-spacer1-5x);
  }

  .xl-px2 {
    padding-left: var(--fn-spacer2x);
    padding-right: var(--fn-spacer2x);
  }

  .xl-px3 {
    padding-left: var(--fn-spacer3x);
    padding-right: var(--fn-spacer3x);
  }

  .xl-py0 {
    padding-top: 0;
    padding-bottom: 0;
  }

  .xl-py0-25 {
    padding-top: var(--fn-spacer0-25x);
    padding-bottom: var(--fn-spacer0-25x);
  }

  .xl-py0-5 {
    padding-top: var(--fn-spacer0-5x);
    padding-bottom: var(--fn-spacer0-5x);
  }

  .xl-py1 {
    padding-top: var(--fn-spacer);
    padding-bottom: var(--fn-spacer);
  }

  .xl-py1-5 {
    padding-top: var(--fn-spacer1-5x);
    padding-bottom: var(--fn-spacer1-5x);
  }

  .xl-py2 {
    padding-top: var(--fn-spacer2x);
    padding-bottom: var(--fn-spacer2x);
  }

  .xl-py3 {
    padding-top: var(--fn-spacer3x);
    padding-bottom: var(--fn-spacer3x);
  }
}
`;

const Padding = () => <CodePage title="Padding" code={code} />;

export default Padding;
