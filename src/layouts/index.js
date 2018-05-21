import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
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
    <Header />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
