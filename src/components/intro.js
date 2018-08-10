import React from 'react'
import Link from 'gatsby-link'

const Intro = () => (
  <section className="intro">
    <p>
      Hello I’m <strong>Floris</strong>,
      a freelance developer based in Amsterdam.
      Below you'll find some of my <strong><Link to="/projects">work</Link></strong>.
      Feel free to contact me at <strong><a href="mailto:hi@floriskoch.com">hi@floriskoch.com</a></strong> if you want to collaborate.
    </p>
  </section>
)

export default Intro
