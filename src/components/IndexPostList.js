import React from "react";

import { Box } from "grommet";

import IndexPost from "./IndexPost";

export default ({ pages }) => (
  <Box>
    {pages.map(({ node: { frontmatter, excerpt } }) => (
      <IndexPost
        key={`${frontmatter.title}-${frontmatter.date}`}
        frontmatter={frontmatter}
        excerpt={excerpt}
      />
    ))}
  </Box>
);
