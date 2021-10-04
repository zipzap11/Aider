import React, { useState } from "react";
import QuestionInputCard from "./QuestionInputCard";
import TagInputCard from "./TagInputCard";
import TitleInputCard from "./TitleInputCard";
import Container from "../../../Components/Container/Container";
import classes from "./CreateQuestion.module.css";
import CodeInputCard from "./CodeInputCard";
import Button from "../../../Components/Button/Button";
import QuestionDetailPreview from "./QuestionDetailPreview";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useCreateQuestion } from "../../../Hooks/useCreateQuestion";
import { draftjsToMd } from "draftjs-md-converter";
import { Alert, CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function CreateQuestion() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const username = useSelector((state) => state.user.username);
  const uid = useSelector((state) => state.user.uid);

  const { createQuestion, errorCreateQuestion, loadingCreateQuestion } =
    useCreateQuestion();
  const [questionEditorState, setQuestionEditorState] = useState(
    EditorState.createEmpty()
  );
  const [codeEditorState, setCodeEditorState] = useState(
    EditorState.createEmpty()
  );
  const questionMarkdownState = draftjsToMd(
    convertToRaw(questionEditorState.getCurrentContent())
  );
  const codeMarkdownState = draftjsToMd(
    convertToRaw(codeEditorState.getCurrentContent())
  );
  const addTagHandler = (tag) => {
    setTags((prev) => [...prev, { tag }]);
  };

  const questionEditorChangeHandler = (editorState) => {
    setQuestionEditorState(editorState);
  };

  const codeEditorChangeHandler = (editorState) => {
    setCodeEditorState(editorState);
  };

  const resetInput = () => {
    setTags([]);
    setTitle("");
    setQuestionEditorState(EditorState.createEmpty());
    setCodeEditorState(EditorState.createEmpty());
  };

  const backHandler = () => {
    history.push("/forum");
  };

  const submitHandler = () => {
    const questionObject = {
      user_id: uid,
      username: username,
      title: title,
      question: draftjsToMd(
        convertToRaw(questionEditorState.getCurrentContent())
      ),
      code: draftjsToMd(convertToRaw(codeEditorState.getCurrentContent())),
      tags: {
        data: tags,
      },
    };
    createQuestion({
      variables: {
        object: questionObject,
      },
    });
    resetInput();
    setSubmitted(true);
  };

  return (
    <Container className={classes.contain}>
      {loadingCreateQuestion && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress
            style={{
              width: "200px",
              height: "200px",
              color: "#333533",
              margin: "20px auto",
            }}
          />
        </Box>
      )}
      {!loadingCreateQuestion && (
        <>
          <h2>Ask your Question</h2>
          <TitleInputCard value={title} onChange={setTitle} />
          <TagInputCard tags={tags} addTag={addTagHandler} />
          <QuestionInputCard
            editorState={questionEditorState}
            onChangeEditorState={questionEditorChangeHandler}
          />
          <CodeInputCard
            editorState={codeEditorState}
            onChangeEditorState={codeEditorChangeHandler}
          />
          <QuestionDetailPreview
            question={questionMarkdownState}
            code={codeMarkdownState}
          />
          {submitted && errorCreateQuestion && (
            <Alert variant="standard" severity="error">
              Something went wrong, try again later.
            </Alert>
          )}
          {submitted && !errorCreateQuestion && (
            <Alert
              className={classes.alert}
              variant="filled"
              severity="success"
            >
              Success creating question.
            </Alert>
          )}
          <div className={classes.btnWrapper}>
            <Button onClick={backHandler} theme="light">
              Cancel
            </Button>
            <Button onClick={submitHandler} theme="dark">
              Ask
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}

export default CreateQuestion;
