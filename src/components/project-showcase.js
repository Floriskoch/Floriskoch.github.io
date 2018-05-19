import React from 'react'
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

const ProjectShowcase = data => {
  return (
    <div className="content--large">
      <div className="section-heading">
        <h2>Recent work</h2>
      </div>

      <ul className="list--featured">
        {data.projects.map(({ node }) => {
          const fm = node.frontmatter;
          const image = fm.image.childImageSharp;
          return (
            <li key={node.id} className="list--featured__item">
              <Link to={ fm.path }>
                <Img sizes={{ ...image.sizes, aspectRatio: 4/3 }} />
                <h3>{ fm.title }</h3>
                <p>{ fm.subtitle }</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

export default ProjectShowcase
