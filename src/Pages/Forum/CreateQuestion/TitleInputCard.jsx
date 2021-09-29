import React from "react";
import Card from "../../../Components/Card/Card";
import classes from "./TitleInputCard.module.css";

function TitleInputCard() {
  return (
    <Card className={classes.contain}>
      <h3>Title</h3>
      <p>Create some short title for your question summary.</p>
      <textarea></textarea>
    </Card>
  );
}

export default TitleInputCard;
