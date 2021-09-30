import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
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
import LoadingQuestionDetail from "../../Components/Loading/LoadingQuestionDetail";
import { useSubscribeQuestionDetail } from "../../Hooks/useSubscribeQuestionDetail";

function QuestionDetail() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { id } = useParams();
  const { submitAnswer, loadingSubmitAnswer, errorSubmitAnswer } =
    useSubmitAnswer(id);
  const { data, error, loading } = useQuery(getQuestionDetailById, {
    variables: { id },
  });
  const {
    errorQuestionData,
    loadingQuestionData,
    questionData: test,
  } = useSubscribeQuestionDetail(id);
  console.log("questionData = ", test);

  const editorStateChangeHandler = (editorState) => {
    setEditorState(editorState);
  };

  if (loading) {
    return <LoadingQuestionDetail />;
  }

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
