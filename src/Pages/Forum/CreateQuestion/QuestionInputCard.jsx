import React from "react";
import classes from "./QuestionInputCard.module.css";
import Card from "../../../Components/Card/Card";
import TextEditor from "../../../Components/Editor/TextEditor";

function QuestionInputCard() {
  return (
    <>
      <Card className={classes.contain}>
        <h3>Question Detail</h3>
        <p>
          Add some detail for your question that describe the problem you are
          facing.
        </p>
      </Card>
      <TextEditor />
    </>
  );
}

export default QuestionInputCard;
