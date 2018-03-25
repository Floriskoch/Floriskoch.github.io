import React from 'react'
import Link from 'gatsby-link'

const Intro = () => (
  <p className="intro">
    Hello I’m <strong>Floris</strong>,
    developer based in Amsterdam and currently working at
    <strong> <a href="https://grrr.nl" target="_blank">Grrr</a></strong>.
    You want to see my <strong><Link to="/projects">work</Link> </strong>
    or read some <strong><Link to="/blog">posts</Link></strong> about stuff.
    You can also contact me at <strong>info@floriskoch.com</strong>
  </p>
)

export default Intro
