import React from "react";
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';

const Page3 = () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            relativePath
            extension
            size
            birthTime
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Hello Gatsby</h1>

      <Link to="/page-2">Go to page-2</Link>

      <table>
        <thead>
          <tr>
            <td>Relative Path</td>
            <td>Extension</td>
            <td>Size</td>
            <td>BirthTime</td>
          </tr>
        </thead>

        <tbody>
          {data.allFile.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.relativePath}</td>
              <td>{node.extension}</td>
              <td>{node.size}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Page3;