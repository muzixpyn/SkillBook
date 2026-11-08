import React, { useState } from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import firebase from "./firebase";

const database = firebase.database();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(0),
  },
  form: {
    maxWidth: "500px",
    margin: "0 auto",
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const EditCourse = ({ location }) => {
  const classes = useStyles();
  const {
    title = "",
    description = "",
    teacher = "",
    trainingplace = "",
    date = "",
  } = location.state || {};
  const [course, setCourse] = useState({
    title,
    description,
    teacher,
    trainingplace,
    date,
  });

  const handleClear = () => {
    setCourse({
      title: "",
      description: "",
      teacher: "",
      trainingplace: "",
      date: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Course:", course);
    database
      .ref("courses")
      .push({
        // เปลี่ยนเป็น push() แทน add()
        title: course.title,
        description: course.description,
        teacher: course.teacher,
        trainingplace: course.trainingplace,
        date: course.date,
      })
      .then(() => {
        console.log("Successfully saved course to Firebase");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className={classes.root}>
      <Navbar title="Edit Course" />
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}></div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Course Name"
              name="title"
              value={course.title}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Teacher"
              name="teacher"
              value={course.teacher}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Description"
              name="description"
              value={course.description}
              onChange={handleInputChange}
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="Trainingplace"
              name="trainingplace"
              value={course.trainingplace}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              label="DD/MM/YYYY"
              name="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={course.date}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginRight: "10px" }}
            >
              Submit
            </Button>
            <Button
              className={classes.submitButton}
              variant="contained"
              color="default"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditCourse;
