import React from "react";

import { graphql } from "gatsby";

import { Box } from "grommet";

import { navigate } from "gatsby";

export default ({ excerpt, frontmatter: { title, date, path } }) => (
  <Box direction="row" border={{ color: "brand", size: "large" }} pad="medium">
    <Box pad="small" background="dark-3" />
    <Box onClick={() => navigate(path)} pad="medium" background="light-3">
      <span>{`${date} - ${title}`}</span>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Box>
  </Box>
);

export const query = graphql`
  fragment IndexPostFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      path
    }
  }
`;
