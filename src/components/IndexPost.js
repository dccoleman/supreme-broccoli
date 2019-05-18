import React from "react";

import { graphql, navigate } from "gatsby";

import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
} from "@material-ui/core";

const Post = styled(Card)`
  min-height: 40px;
  max-width: 300px;
  margin-bottom: 8px;
`;

export default ({ excerpt, frontmatter: { title, date, path } }) => (
  <Post onClick={() => navigate(path)}>
    <CardActionArea>
      <CardHeader title={title} subheader={date} />
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </CardContent>
    </CardActionArea>
  </Post>
);

export const query = graphql`
  fragment IndexPostFragment on MarkdownRemark {
    excerpt(pruneLength: 50)
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      path
    }
  }
`;
