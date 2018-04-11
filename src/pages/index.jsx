import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section className="content tac">
    <h1 className="fs6-4 fwn">fn.css</h1>
    <h2>Functional shorthand CSS utilities</h2>
    <p>
      fn.css is a collection of abbreviated CSS rules composed in such a way to make
       their meaning obvious.
    </p>
    <p>
      If you know CSS, you know fn.css.
    </p>
    <Link 
      to="/page-2/"
      className="dib px1 py0-5 tdn bdrd0-25 fs1-2 bg-green cl-white bgh-dark-green"
    >
      Download
    </Link>
    <code className="db p0-5 bg-light c6 mxa">npm install fn.css</code>
  </section>
)

export default IndexPage
