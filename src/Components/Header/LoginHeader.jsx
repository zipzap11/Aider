import React from "react";
import Button from "../Button/Button";
import classes from "./LoginHeader.module.css";

function LoginHeader() {
  return (
    <>
      <Button className={classes.btn} theme="dark">
        Login
      </Button>
      <Button className={classes.btn} theme="dark">
        Register
      </Button>
    </>
  );
}

export default LoginHeader;
