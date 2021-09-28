import React from "react";
import { ReactComponent as Logo } from "../Header/Assets/logo1.svg";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer}>
      <Logo />
      <Link to="/about">About</Link>
    </div>
  );
}

export default Footer;
