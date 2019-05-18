import React from "react";

import IndexPost from "./IndexPost";
import { Grid } from "@material-ui/core";

export default ({ pages }) => (
  <Grid container spacing={16}>
    <Grid item xs={12}>
      <Grid container spacing={16}>
        {pages.map(({ node: { frontmatter, excerpt } }) => (
          <Grid key={frontmatter.title} item>
            <IndexPost frontmatter={frontmatter} excerpt={excerpt} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
);
