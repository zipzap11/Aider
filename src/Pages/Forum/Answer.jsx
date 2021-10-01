import React, { useState } from "react";
import CommentButton from "../../Components/Button/CommentButton";
import Card from "../../Components/Card/Card";
import CommentList from "../../Components/Comment/CommentList";
import Markdown from "../../Components/Markdown/Markdown";
import CommentForm from "../../Components/Comment/CommentForm";
import { useSubmitAnswerComment } from "../../Hooks/useSubmitAnswerComment";
import classes from "./Answer.module.css";

const str = `
\`\`\`css
.outer {
    display: flex;
    align-items: center;
    justify-content: center;
}
\`\`\`
You can use this code, in your css files. Make sure to connect your html to the correct css files.
`;

function Answer({ str, comments, id }) {
  const [commentState, setCommentState] = useState(false);
  const { submitComment, errorSubmitComment, loadingSubmitComment } =
    useSubmitAnswerComment();

  const submitHandler = (comment) => {
    submitComment({
      variables: {
        object: {
          author: "Francisco",
          comment: comment,
          user_id: 1,
          answer_id: id,
        },
      },
    });
  };

  return (
    <Card className={classes.contain}>
      <Markdown str={str} />
      <CommentList comments={comments} />
      {!commentState && <CommentButton onClick={() => setCommentState(true)} />}
      {commentState && (
        <CommentForm
          onSubmit={submitHandler}
          loading={loadingSubmitComment}
          error={errorSubmitComment}
          onCancel={() => setCommentState(false)}
        />
      )}
    </Card>
  );
}

export default Answer;
