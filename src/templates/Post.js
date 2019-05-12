import React from "react";

import { graphql, Link } from "gatsby";

export default function Post({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Link to="/">
        <span>{frontmatter.title}</span>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
