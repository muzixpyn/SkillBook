import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Course from "./Course";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f2f2f2",
    "&:hover": {
      backgroundColor: "#e6e6e6",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const { userEmail } = props;
  useEffect(() => {
    fetch("https://fw.cp.su.ac.th:8445/skillbook/mydatabase.php")
      .then(resp => resp.json())
      .then((data) => {console.log("data", data)})
  }, []);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SkillBook
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* เช็คว่าผู้ใช้ล็อคอินอยู่หรือไม่ */}
          {userEmail ? (
            <Button color="inherit" component={Link} to="/manage-course">
              {userEmail}
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Course />
    </div>
  );
}
