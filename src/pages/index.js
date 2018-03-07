import React from 'react'
import Link from 'gatsby-link'
import Intro from '../components/intro'
import ProjectShowcase from '../components/projectShowcase'

const IndexPage = ({ data }) => { console.log(data);
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
    allMarkdownRemark(limit: 4) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                  srcSet
                  sizes
                }
              }
            }
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
