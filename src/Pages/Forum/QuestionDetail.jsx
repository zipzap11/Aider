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

function QuestionDetail() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editorStateChangeHandler = (editorState) => {
    console.log(
      "bnakan",
      draftjsToMd(convertToRaw(editorState.getCurrentContent()))
    );
    setEditorState(editorState);
  };
  return (
    <Container>
      <div className={classes.questionContain}>
        <h2>Question</h2>
        <QuestionDetailCard />
      </div>

      <div className={classes.answerContain}>
        <h2>1 Answer</h2>
        <Answer />
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
        <Button theme="dark">Answer</Button>
      </div>
    </Container>
  );
}

export default QuestionDetail;
