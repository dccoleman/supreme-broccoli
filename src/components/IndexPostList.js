import React from "react";

import IndexPost from "./IndexPost";

export default ({ pages }) => (
  <>
    {pages.map(({ node: { frontmatter, excerpt } }) => (
      <IndexPost
        key={`${frontmatter.title}-${frontmatter.date}`}
        frontmatter={frontmatter}
        excerpt={excerpt}
      />
    ))}
  </>
);
