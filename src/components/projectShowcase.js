import React from 'react'
import Link from 'gatsby-link'

const ProjectShowcase = data => {
  return (
    <div className="showcase">

      {data.projects.map(({ node }) => {
        const fm = node.frontmatter;
        const image = fm.image.childImageSharp.responsiveSizes;

        return (
          <div key={node.id} className="showcase__item">
            <Link to={ fm.path }>
              <h3>{ fm.title }</h3>
              <img src={ image.src } />
            </Link>
          </div>
        );
      })}

      <div className="showcase__item">
        <Link to="/projects">
          See all projects
        </Link>
      </div>
    </div>
  )
};

export default ProjectShowcase
