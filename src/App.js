import React, { useState } from "react";
import MyComponent from "./components/MyComponent";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ManageCourse from "./components/ManageCouse";
import AddCourse from "./components/AddCouse";
import EditCourse from "./components/EditCourse";

function App() {
  const [userEmail, setUserEmail] = useState(""); // เพิ่ม state สำหรับเก็บ email ของผู้ใช้

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MyComponent userEmail={userEmail} />} // ส่ง userEmail ผ่าน props ไปยัง MyComponent
        />
        <Route
          path="/login"
          element={<Login setUserEmail={setUserEmail} />} // ส่ง setUserEmail ผ่าน props ไปยัง Login
        />
        <Route
          path="/manage-course"
          element={<ManageCourse userEmail={userEmail} />}
        />
        <Route path="/add-course" element={<AddCourse />} />

        <Route path="/edit-course" element={<EditCourse />} />

        <Route path="/dashboard" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
