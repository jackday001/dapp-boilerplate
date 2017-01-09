import React from "react";

// ** Import Material UI Components
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";

// ** Import Assets
import useStyles from "../assets/styles";

const Footer = () => {
  const classes = useStyles.footer();
  return (
    <AppBar position="static" component="footer" className={classes.footer}>
      <Toolbar>
        <Container>Footer</Container>
      </Toolbar>
    </AppBar>
  );
};
export default Footer;
