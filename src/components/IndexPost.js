import React from "react";

import { graphql, navigate } from "gatsby";

export default ({ excerpt, frontmatter: { title, date, path } }) => (
  <div onClick={() => navigate(path)}>
    <span>{`${date} - ${title}`}</span>
  </div>
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
