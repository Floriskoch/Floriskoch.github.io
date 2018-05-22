import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import ProjectShowcase from '../components/project-showcase'

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <div>
      <Intro />
      <ProjectShowcase projects={projects} />
    </div>
  );
}
export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
            path
            title
            subtitle
          }
          excerpt
        }
      }
    }
  }
`;
