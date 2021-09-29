import React from "react";
import { questions } from "../Forum/questionList";
import MyQuestion from "./MyQuestion";
import Container from "../../Components/Container/Container";
import classes from "./QuestionList.module.css";

function QuestionList() {
  return (
    <Container>
      <div className={classes.contain}>
        <h2>Your Question</h2>
        <div className={classes.questionsWrapper}>
          {questions.map((question) => {
            return <MyQuestion />;
          })}
        </div>
      </div>
    </Container>
  );
}

export default QuestionList;
