import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "./firebase";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Course() {
  const classes = useStyles();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (snapshot) => {
      const data = snapshot.val();
      const courseList = [];
      for (let id in data) {
        courseList.push({ id, ...data[id] });
      }
      setCourses(courseList);
    });
  }, []);

  return (
    <div>
      {courses.map((course) => (
        <Card key={course.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={course.title}
              height="140"
              image={course.imageUrl}
              title={course.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {course.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {course.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Teacher: {course.teacher}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Training Place: {course.trainingplace}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Date: {course.date}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
