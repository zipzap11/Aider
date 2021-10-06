import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import classes from "./EditQuestion.module.css";
import TitleInputCard from "../Forum/CreateQuestion/TitleInputCard";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { draftjsToMd, mdToDraftjs } from "draftjs-md-converter";
import QuestionInputCard from "../Forum/CreateQuestion/QuestionInputCard";
import TagInputCard from "../Forum/CreateQuestion/TagInputCard";
import CodeInputCard from "../Forum/CreateQuestion/CodeInputCard";
import QuestionDetailPreview from "../Forum/CreateQuestion/QuestionDetailPreview";
import Button from "../../Components/Button/Button";
import { useHistory } from "react-router";
import { useUpdateQuestion } from "../../Hooks/useUpdateQuestion";
import CenteredSpinner from "../../Components/Loading/CenteredSpinner";
import { markdownToDraft } from "markdown-draft-js";

function EditQuestion(props) {
  const history = useHistory();
  const {
    id,
    title: titleProps,
    question: questionProps,
    code: codeProps,
    tags: tagsProps,
    user_id,
  } = props.location.state.data;
  const convertedTags = tagsProps.map(({ question_id, tag }) => ({
    tag,
    question_id,
  }));
  const { updateQuestion, errorUpdateQuestion, loadingUpdateQuestion } =
    useUpdateQuestion(user_id);
  const [title, setTitle] = useState(titleProps);
  const [question, setQuestion] = useState(
    EditorState.createWithContent(
      convertFromRaw(markdownToDraft(questionProps))
    )
  );
  const [code, setCode] = useState(
    EditorState.createWithContent(convertFromRaw(markdownToDraft(codeProps)))
  );
  const questionMarkdown = draftjsToMd(
    convertToRaw(question.getCurrentContent())
  );
  const codeMarkdown = draftjsToMd(convertToRaw(code.getCurrentContent()));
  const [tags, setTags] = useState(convertedTags);

  const addTagHandler = (tag) => {
    setTags((prev) => [...prev, { tag, question_id: id }]);
  };

  const removeTagHandler = (removedTag) => {
    setTags((prev) => {
      const data = prev.filter((tag) => tag.tag !== removedTag);
      return data;
    });
  };
  const questionChangeHandler = (state) => {
    setQuestion(state);
  };
  const codeChangeHandler = (state) => {
    setCode(state);
  };

  const cancelHandler = () => {
    history.goBack();
  };

  const saveHandler = () => {
    console.log("tags = ", tags);
    updateQuestion({
      variables: {
        id: id,
        title: title,
        code: codeMarkdown,
        question: questionMarkdown,
        objects: tags,
      },
    });
  };

  if (errorUpdateQuestion) {
    console.log("error = ", errorUpdateQuestion);
    return <p>{errorUpdateQuestion.message}</p>;
  }

  return (
    <Container className={classes.contain}>
      {/* {loadingCreateQuestion && (
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
    )} */}
      {/* {!loadingCreateQuestion && ( */}
      <>
        <h2>Edit your Question</h2>
        <TitleInputCard value={title} onChange={setTitle} />
        <TagInputCard
          tags={tags}
          addTag={addTagHandler}
          removeTag={removeTagHandler}
        />
        <QuestionInputCard
          editorState={question}
          onChangeEditorState={questionChangeHandler}
        />
        <CodeInputCard
          editorState={code}
          onChangeEditorState={codeChangeHandler}
        />
        <QuestionDetailPreview
          question={questionMarkdown}
          code={codeMarkdown}
        />
        {/* {submitted && errorCreateQuestion && (
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
        )} */}
        <div className={classes.btnWrapper}>
          <Button onClick={cancelHandler} theme="light">
            Cancel
          </Button>
          <Button onClick={saveHandler} theme="dark">
            Save
          </Button>
        </div>
      </>
      {/* )} */}
    </Container>
  );
}

export default EditQuestion;
