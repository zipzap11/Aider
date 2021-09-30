import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { draftjsToMd } from "draftjs-md-converter";
import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Container from "../../Components/Container/Container";
import QuestionDetailCard from "./QuestionDetailCard";
import classes from "./QuestionDetail.module.css";
import Answer from "./Answer";
import TextEditor from "../../Components/Editor/TextEditor";
import Markdown from "../../Components/Markdown/Markdown";
import Card from "../../Components/Card/Card";
import { draftToMarkdown } from "markdown-draft-js";
import Button from "../../Components/Button/Button";
import { useSubmitAnswer } from "../../Hooks/useSubmitAnswer";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { getQuestionDetailById } from "../../Graphql/query";

function QuestionDetail() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { submitAnswer, loadingSubmitAnswer } = useSubmitAnswer();
  const { id } = useParams();
  const { data, error, loading } = useQuery(getQuestionDetailById, {
    variables: { id },
  });

  const editorStateChangeHandler = (editorState) => {
    console.log(
      "bnakan",
      draftjsToMd(convertToRaw(editorState.getCurrentContent()))
    );
    setEditorState(editorState);
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;
  const { answers, ...questionData } = data.question_by_pk;

  const submitHandler = () => {
    const answerObject = {
      user_id: 1,
      question_id: id,
      answer: draftToMarkdown(convertToRaw(editorState.getCurrentContent())),
    };
    console.log("answer = ", answerObject);
    submitAnswer({
      variables: {
        object: answerObject,
      },
    });
  };

  return (
    <Container>
      <div className={classes.questionContain}>
        <h2>Question</h2>
        <QuestionDetailCard data={questionData} />
      </div>

      <div className={classes.answerContain}>
        <h2>{answers.length} Answer</h2>
        {answers.map((ans) => {
          return <Answer key={ans.id} str={ans.answer} />;
        })}
      </div>

      <div className={classes.editorContain}>
        <h2>Type your answer here</h2>
        <TextEditor
          editorState={editorState}
          onChange={editorStateChangeHandler}
        />
      </div>
      <div className={classes.previewContain}>
        <h2>Your answer preview</h2>
        <Card className={classes.card}>
          <Markdown
            str={draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
          />
        </Card>
      </div>

      <div className={classes.btnContain}>
        <Button theme="light">Cancel</Button>
        <Button onClick={submitHandler} theme="dark">
          Answer
        </Button>
      </div>
    </Container>
  );
}

export default QuestionDetail;
