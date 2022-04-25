import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const Blog = ({ data, pageContext }) => {
  const { currentPage, isFirstPage, isLastPage, totalPages } = pageContext;
  const nextPage = `/blog/${String(currentPage + 1)}`;
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${String(currentPage - 1)}`;

  useEffect(() => {
    console.log('garb_data:', data, pageContext);
  }, [data, pageContext]);

  return (
    <Layout>
      <h1 style={{
        display: 'inlineBlock',
        borderBottom: '1px solid grey',
      }}>Gatsby Garb Blog</h1>

      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={`/posts${node.fields.slug}`}>{node.frontmatter.title}</Link>
            <span style={{ color: '#bbb', fontSize: '16px' }}>
              - {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}

      {/* Pagination Links */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxWidth: 300,
        margin: '0 auto',
      }}>
        {!isFirstPage && (
          <Link to={prevPage} rel="prev">
            Prev Page
          </Link>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <Link key={index} to={`/blog/${index === 0 ? "" : index + 1}`}>
            {index + 1}
          </Link>
        ))}

        {!isLastPage && (
          <Link to={nextPage} rel="next">
            Next Page
          </Link>
        )}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip,
      limit: $limit,
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "DD/MMM/YYYY", locale: "pt-br")
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;