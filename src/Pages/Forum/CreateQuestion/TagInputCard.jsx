import React from "react";
import classes from "./TagInputCard.module.css";
import Card from "../../../Components/Card/Card";
import Button from "../../../Components/Button/Button";

function TagInputCard() {
  return (
    <Card className={classes.contain}>
      <h3>Tags</h3>
      <p>
        Add some tag that relate to your question’s topic. (e.g java, python,
        html, docker)
      </p>
      <div className={classes.inputWrapper}>
        <input type="text" max />
        <Button theme="dark">Add</Button>
      </div>
    </Card>
  );
}

export default TagInputCard;
