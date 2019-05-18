import React, { useCallback } from "react";

import { navigate } from "gatsby";

import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Page = styled.section`
  margin-left: 5vw;
  margin-right: 5vw;
`;

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Footer = styled.footer`
  min-height: 40px;
  background-color: grey;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ children, title = "Blog" }) => {
  const goHome = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <Container>
      <CssBaseline />
      <Toolbar>
        <Header>
          <IconButton onClick={goHome}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Header>
      </Toolbar>
      <Page>{children}</Page>
      <Footer>
        <Typography>devoncoleman.com - I'm a nerd</Typography>
      </Footer>
    </Container>
  );
};
