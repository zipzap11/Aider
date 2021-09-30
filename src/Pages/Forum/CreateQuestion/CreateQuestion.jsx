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
import { draftToMarkdown } from "markdown-draft-js";
import { convertToRaw } from "draft-js";
import { useCreateQuestion } from "../../../Hooks/useCreateQuestion";

function CreateQuestion() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const { createQuestion, errorCreateQuestion, loadingCreateQuestion } =
    useCreateQuestion();
  const [questionEditorState, setQuestionEditorState] = useState(
    EditorState.createEmpty()
  );
  const [codeEditorState, setCodeEditorState] = useState(
    EditorState.createEmpty()
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

  const submitHandler = () => {
    const questionObject = {
      user_id: 1,
      username: "Francisco",
      title: title,
      question: draftToMarkdown(
        convertToRaw(questionEditorState.getCurrentContent())
      ),
      code: draftToMarkdown(convertToRaw(codeEditorState.getCurrentContent())),
      tags: {
        data: tags,
      },
    };
    createQuestion({
      variables: {
        object: questionObject,
      },
    });
  };

  if (errorCreateQuestion) return <p>{errorCreateQuestion}</p>;
  if (loadingCreateQuestion) return <p>loading...</p>;

  return (
    <Container className={classes.contain}>
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
        question={draftToMarkdown(
          convertToRaw(questionEditorState.getCurrentContent())
        )}
        code={draftToMarkdown(
          convertToRaw(codeEditorState.getCurrentContent())
        )}
      />
      <div className={classes.btnWrapper}>
        <Button theme="light">Cancel</Button>
        <Button onClick={submitHandler} theme="dark">
          Ask
        </Button>
      </div>
    </Container>
  );
}

export default CreateQuestion;
