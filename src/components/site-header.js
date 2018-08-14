import React from 'react'
import Link from 'gatsby-link'

const SiteHeader = () => (
  <header className="site-header">
    <Link to="/">Floris S. Koch</Link>
    <Link to="/projects">Projects</Link>
    <a href="mailto:hi@floriskoch.com">hi@floriskoch.com</a>
  </header>
)

export default SiteHeader
