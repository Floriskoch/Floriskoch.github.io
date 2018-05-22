import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import '../assets/styles/main.scss'
import favicon from '../assets/images/favicon-32x32.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Floris S. Koch"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'robots', content: 'noindex, nofollow'}
      ]}
      link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${ favicon }` }
      ]}
    />

    <div className="content-container">
      <div className="content-container__inner">
        <SiteHeader />

        { children() }
      </div>
    </div>

    <SiteFooter />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
