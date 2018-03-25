import React from 'react'
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const ProjectShowcase = data => {
  return (
    <ul className="list--featured">
      {data.projects.map(({ node }) => {
        const fm = node.frontmatter;
        const image = fm.image.childImageSharp;
        return (
          <li key={node.id} className="list--featured__item">
            <Link to={ fm.path }>
              <Img sizes={{ ...image.sizes, aspectRatio: 16/9 }} />
              <div className="list--featured__item-content">
                <h3>{ fm.title }</h3>
                <p>{ fm.subtitle }</p>
              </div>
            </Link>
          </li>
        );
      })}

      <li className="list--featured__item list--featured__item--button">
        <Link to="/projects">
          <div className="list--featured__item-content"></div>
        </Link>
      </li>
    </ul>
  )
};

export default ProjectShowcase
