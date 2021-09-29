import React from "react";
import Card from "../../Components/Card/Card";
import Container from "../../Components/Container/Container";
import FormControl from "../../Components/FormControl/FormControl";
import Button from "../../Components/Button/Button";
import classes from "./Login.module.css";

function Login() {
  return (
    <Container>
      <Card className={classes.contain}>
        <h2>Login</h2>
        <FormControl label="Email" type="email" />
        <FormControl label="Password" type="password" />
        <div className={classes.flexWrapper}>
          <div className={classes.remember}>
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p>Foget Password</p>
        </div>
        <Button className={classes.btn} theme="dark">
          Login
        </Button>
      </Card>
    </Container>
  );
}

export default Login;
