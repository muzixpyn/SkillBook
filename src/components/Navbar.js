import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Navbar = ({ title }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link
            to="/manage-course"
            style={{ color: "white", textDecoration: "none" }}
          ></Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
