import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

export default ({ data }) => {
  return (
    <div className="content--medium">
      <h1>Projects</h1>

      <ul className="list--overview">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const fm = node.frontmatter;
          const image = fm.image.childImageSharp;
          return (
            <li key={ node.id } className="list--overview__item">
              <figure>
                <Img sizes={ image.sizes } />
              </figure>
              <div className="list--overview__item-body">
                <Link to={ node.frontmatter.path }>
                  <h3>{ node.frontmatter.title }</h3>
                </Link>
                <p>{ node.excerpt }</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            image {
              childImageSharp {
                sizes(maxWidth: 600) {
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
`;

