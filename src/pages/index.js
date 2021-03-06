import React from "react";

import { graphql } from "gatsby";

import IndexPostList from "../components/IndexPostList";
import Layout from "../components/Layout";

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <IndexPostList pages={edges} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          ...IndexPostFragment
        }
      }
    }
  }
`;
