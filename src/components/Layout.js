import React, { useCallback } from "react";

import { navigate } from "gatsby";

import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const Page = styled.main`
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default ({ children, title = "Blog" }) => {
  const goHome = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <>
      <CssBaseline />
      <Toolbar>
        <Header>
          <IconButton onClick={goHome}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>
            I pushed this: {title}
          </Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Header>
      </Toolbar>
      <Page>{children}</Page>
      <span>blah</span>
    </>
  );
};
