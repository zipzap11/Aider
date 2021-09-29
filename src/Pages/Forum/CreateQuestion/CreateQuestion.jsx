import React from "react";
import QuestionInputCard from "./QuestionInputCard";
import TagInputCard from "./TagInputCard";
import TitleInputCard from "./TitleInputCard";
import Container from "../../../Components/Container/Container";
import classes from "./CreateQuestion.module.css";

function CreateQuestion() {
  return (
    <Container className={classes.contain}>
      <h2>Ask your Question</h2>
      <TitleInputCard />
      <TagInputCard />
      <QuestionInputCard />
    </Container>
  );
}

export default CreateQuestion;
