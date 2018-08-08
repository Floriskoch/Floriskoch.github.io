import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const ListFeaturedItem = (props) => {
  return (
    <li className="list--featured__item">
      <Link to={ props.fm.path }>
        <Img sizes={{ ...props.image.sizes, aspectRatio: 3/2 }} />
        <div className="list--featured__heading">
          <h3>{ props.fm.title }</h3>
          <p>{ props.fm.subtitle }</p>
        </div>
      </Link>
    </li>
  )
}

ListFeaturedItem.propTypes = {
  fm: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
}

export default ListFeaturedItem
