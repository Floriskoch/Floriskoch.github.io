import React from 'react'
import Link from 'gatsby-link'

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <ul>
        <li><a href="https://www.linkedin.com/in/floriskoch" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/floriskoch" target="_blank">GitHub</a></li>
        <li><a href="https://twitter.com/kochfloris" target="_blank">Twitter</a></li>
        <li><a href="mailto:floriskoch@gmail.com" target="_blank">Email</a></li>
      </ul>

      <p><small>Copyright Floris S. Koch { (new Date()).getFullYear() } ©</small></p>
    </div>
  </footer>
)

export default SiteFooter
