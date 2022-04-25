import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';

const ProductTemplate = ({ data: { contentfulProduct }, location }) => {
  const image = getImage(contentfulProduct.image);

  return (
    <Layout>
      {/* Product Info */}
      <div style={{ marginLeft: '0 auto', width: '100%', textAlign: 'center' }}>
        <h2>
          {contentfulProduct.name} - 
          <span style={{ color: '#ccc' }}>Added on {contentfulProduct.createdAt}</span>
        </h2>
        <h4>${contentfulProduct.price}</h4>
        <p>{contentfulProduct.description}</p>
        <button
          style={{
            backgroundColor: 'darkorange',
            color: 'white',
            padding: '0.3em',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          className='snipcart-add-item'
          data-item-id={contentfulProduct.slug}
          data-item-price={contentfulProduct.price}
          data-item-image={contentfulProduct.image.file.url}
          data-item-name={contentfulProduct.name}
          data-item-url={location.pathname}
        >
          Add to Cart
        </button>
        <GatsbyImage image={image} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!){
    contentfulProduct(slug: { eq: $slug }) {
      slug
      name
      price
      description
      createdAt(formatString: "DD/MM/YYYY HH:mm:ss")
      image {
        file {
          url
        }
        gatsbyImageData(layout:FULL_WIDTH)
      }
    }
  }
`;

export default ProductTemplate;