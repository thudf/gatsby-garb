import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const Products = ({ data: { allContentfulProduct } }) => {
  // const image = getImage();

  return (
    <Layout>
      <div>
        {/* Products List */}
        <h2>Garb Products</h2>
        {allContentfulProduct.edges.map(({ node: product }) => (
          <div key={product.id}>
            <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none', color: '#551a8b' }}>
              <h3>{`${product.name} · `}<span style={{ fontSize: '1.2rem', fontWeight: 300, color: '#f60' }}>${product.price}</span></h3>
            </Link>
            <GatsbyImage image={getImage(product.image)} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulProduct {
      edges {
        node {
          id
          slug
          name
          price
          image {
            gatsbyImageData(layout:FULL_WIDTH, placeholder:DOMINANT_COLOR)
          }
        }
      }
    }
  }
`;

export default Products;