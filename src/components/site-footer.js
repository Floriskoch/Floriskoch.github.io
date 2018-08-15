import React from 'react'
import Link from 'gatsby-link'
import profileImage from '../assets/images/profile.jpg'

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="content--medium">

      <div className="site-footer__inner">
        <div>
          <h3>Floris S. Koch</h3>

          <p>Want to collaborate? Great! Send me an e-mail <a href="mailto:hi@floriskoch.com">hi@floriskoch.com</a>.</p>

          <p>Or find me on:</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/floriskoch" target="_blank" rel="nofollow noopener">Linkedin</a></li>
            <li><a href="https://github.com/floriskoch" target="_blank" rel="nofollow noopener">Github</a></li>
            <li><a href="https://twitter.com/kochfloris" target="_blank" rel="nofollow noopener">Twitter</a></li>
          </ul>

          <p><small>© { (new Date()).getFullYear() } | Floris S. Koch</small></p>
        </div>
        <img src={profileImage} className="site-footer__profile-image" />
      </div>
    </div>
  </footer>
)

export default SiteFooter
