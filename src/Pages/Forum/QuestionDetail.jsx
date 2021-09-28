import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { draftjsToMd } from "draftjs-md-converter";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Editor } from "react-draft-wysiwyg";
import Container from "../../Components/Container/Container";
import QuestionDetailCard from "./QuestionDetailCard";
import classes from "./QuestionDetail.module.css";
import Answer from "./Answer";

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

      <div>
        <ReactMarkdown
          children={draftjsToMd(convertToRaw(editorState.getCurrentContent()))}
          skipHtml={true}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={atomOneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
      <div className="editor">
        <Editor
          editorStyle={{
            backgroundColor: "#fff",
            // color: "#333533",
            color: "#333533",
            padding: "1rem",
            fontWeight: "",
            border: "1px solid #333533",
            borderRadius: "5px",
            marginTop: "1rem",
            boxShadow: "2px 2px 3px 0px #00000040 inset",
          }}
          toolbarStyle={{
            // backgroundColor: "#333533",
            // border: "1px solid black",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            border: "none",
            padding: "0",
          }}
          wrapperStyle={{
            // backgroundColor: "#333533",
            // borderRadius: "10px",
            // borderTopLeftRadius: "100px",
            border: "1px solid #333533",
            borderRadius: "7px",
            padding: "1.2rem",
            backgroundColor: "white",
          }}
          editorState={editorState}
          onEditorStateChange={editorStateChangeHandler}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
        ></Editor>
      </div>
    </Container>
  );
}

export default QuestionDetail;
