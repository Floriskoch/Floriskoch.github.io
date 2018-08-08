import React from 'react'
import ListFeaturedItem from './list-featured-item'

const ProjectShowcase = data => {
  return (
    <section className="content--large project-showcase">
      <h2 className="h3">Recent work</h2>

      <ul className="list--featured">
        {data.projects.map(({ node }) => {
          const fm = node.frontmatter;
          const image = fm.image.childImageSharp;

          return (
            <ListFeaturedItem fm={fm} image={image} key={node.id} />
          )
        })}
      </ul>
    </section>
  )
}

export default ProjectShowcase
