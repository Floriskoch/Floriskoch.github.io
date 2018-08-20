import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import '../assets/styles/main.scss'
import favicon from '../assets/images/favicon-32x32.png'

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Helmet
          title="Floris S. Koch"
          meta={[
            { name: 'description', content: 'Floris Koch is a freelance developer based in Amsterdam.' },
            { name: 'keywords', content: '' },
          ]}
          link={[
              { rel: 'shortcut icon', type: 'image/png', href: `${ favicon }` }
          ]}
        />

        <div className="content-container">
          <div className="content-container__inner">
            <SiteHeader />

            { this.props.children() }
          </div>
        </div>

        <SiteFooter />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
