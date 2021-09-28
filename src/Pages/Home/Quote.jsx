import React from "react";
import classes from "./Quote.module.css";
import Card from "../../Components/Card/Card";
function Quote() {
  return (
    <Card className={classes.card}>
      <div className={classes.quote}>
        <span className={classes.corner}>&lt;</span>
        <p>What are you waiting for ? Let’s join us ! /</p>
        <span className={classes.corner}>&gt;</span>
      </div>
    </Card>
  );
}

export default Quote;
