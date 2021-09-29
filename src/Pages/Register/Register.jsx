import React from "react";
import Container from "../../Components/Container/Container";
import Card from "../../Components/Card/Card";
import FormControl from "../../Components/FormControl/FormControl";
import Button from "../../Components/Button/Button";
import classes from "./Register.module.css";

function Register() {
  return (
    <Container>
      <Card className={classes.contain}>
        <h2>Register</h2>
        <FormControl label="Username" type="text" />
        <FormControl label="Email" type="text" />
        <FormControl label="Password" type="text" />
        <Button className={classes.btn} theme="dark">
          Register
        </Button>
      </Card>
    </Container>
  );
}

export default Register;
