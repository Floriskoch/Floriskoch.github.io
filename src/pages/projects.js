import React from 'react'
import ListFeaturedItem from '../components/list-featured-item'

export default ({ data }) => {
  return (
    <section className="content--medium content--projects">
      <h1 className="h2">Projects</h1>

      <ul className="list--featured">
        {data.allMarkdownRemark.edges.map(({ node }) => {
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

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 12
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            subtitle
            image {
              childImageSharp {
                sizes(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

