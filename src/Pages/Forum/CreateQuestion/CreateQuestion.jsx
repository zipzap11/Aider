import React from "react";
import QuestionInputCard from "./QuestionInputCard";
import TagInputCard from "./TagInputCard";
import TitleInputCard from "./TitleInputCard";
import Container from "../../../Components/Container/Container";
import classes from "./CreateQuestion.module.css";
import CodeInputCard from "./CodeInputCard";
import Button from "../../../Components/Button/Button";
import QuestionDetailPreview from "./QuestionDetailPreview";

function CreateQuestion() {
  return (
    <Container className={classes.contain}>
      <h2>Ask your Question</h2>
      <TitleInputCard />
      <TagInputCard />
      <QuestionInputCard />
      <CodeInputCard />
      <QuestionDetailPreview />
      <div className={classes.btnWrapper}>
        <Button theme="light">Cancel</Button>
        <Button theme="dark">Ask</Button>
      </div>
    </Container>
  );
}

export default CreateQuestion;
