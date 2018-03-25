import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import '../assets/styles/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Floris S. Koch"
      meta={[
        { name: 'description', content: '' },
        { name: 'keywords', content: '' },
        { name: 'robots', content: 'noindex, nofollow'}
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
