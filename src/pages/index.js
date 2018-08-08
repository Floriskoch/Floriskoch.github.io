import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import ProjectShowcase from '../components/project-showcase'
import Experience from '../components/experience'

const IndexPage = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark;
  return (
    <div>
      <Intro />
      <ProjectShowcase projects={projects} />
      <Experience />
    </div>
  );
}
export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 4
      filter: { frontmatter: { draft: { eq: false }}}
    ) {
      edges {
        node {
          id
          frontmatter {
            draft
            date
            image {
              childImageSharp {
                sizes(maxWidth: 600, quality:100) {
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
