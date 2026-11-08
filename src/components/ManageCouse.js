import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import Navbar from "./Navbar";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
//import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";

const ManageCourse = ({ userEmail }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const coursesRef = firebase.database().ref("courses");

    coursesRef.on("value", (snapshot) => {
      const courses = snapshot.val();
      const courseList = [];
      for (let id in courses) {
        courseList.unshift({ id, ...courses[id] });
      }
      setCourses(courseList);
    });
  }, []);

  const handleDeleteCourse = (id) => {
    firebase.database().ref(`courses/${id}`).remove();
  };

  return (
    <div>
      <Navbar title="Manage Course" />
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Fab color="primary" aria-label="add" component={Link} to="/add-course">
          <AddIcon />
        </Fab>
      </div>
      <List>
        {courses.map((course) => (
          <div key={course.id}>
            <ListItem>
              <ListItemText
                primary={course.title}
                secondary={`วันที่ ${course.date}`}
              />
              <ListItemSecondaryAction>
                {/* <IconButton
                  edge="end"
                  aria-label="edit"
                  component={Link}
                  to={{
                    pathname: "/edit-course",
                    search: `?id=${course.id}`,
                    state: {
                      title: course.title,
                      description: course.description,
                      teacher: course.teacher,
                      trainingplace: course.trainingplace,
                      date: course.date,
                    },
                  }}
                >
                  <EditIcon />
                </IconButton>*/}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default ManageCourse;
