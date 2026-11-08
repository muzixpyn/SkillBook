import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  },
  textField: {
    marginBottom: "20px",
    width: "300px",
  },
  button: {
    marginTop: "20px",
    width: "200px",
  },
});

const Login = ({ setUserEmail }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Check login credentials
    if (email === "sucpsk@admin.com" && password === "123456789") {
      setUserEmail(email);
      navigate("/manage-course", { state: { userEmail: email } }); // Redirect to home page after successful login and pass email as state
    } else {
      alert("Invalid email or password. Please try again."); // Show error message for invalid login credentials
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className={classes.textField}
        required
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={classes.textField}
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
