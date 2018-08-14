import React from 'react'
import ListFeaturedItem from './list-featured-item'
import arrow from '../assets/images/arrow.svg'
import Link from 'gatsby-link'

const ProjectShowcase = data => {
  return (
    <section className="content--large project-showcase">
      <h2>Recent work</h2>

      <ul className="list--featured">
        {data.projects.map(({ node }) => {
          const fm = node.frontmatter;
          const image = fm.image.childImageSharp;

          return (
            <ListFeaturedItem fm={fm} image={image} key={node.id} />
          )
        })}
      </ul>

      <Link to="/projects" className="project-showcase__link">See all projects</Link>
    </section>
  )
}

export default ProjectShowcase
