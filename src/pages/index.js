import React from "react";

import { graphql } from "gatsby";

import { Grommet } from "grommet";

import IndexPostList from "../components/IndexPostList";

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Grommet full>
      <IndexPostList pages={edges} />
    </Grommet>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          ...IndexPostFragment
          excerpt(pruneLength: 160, format: HTML)
        }
      }
    }
  }
`;
