import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import classes from "./QuestionDetailCard.module.css";
import Tag from "../../Components/Tag/Tag";
import TagContainer from "../../Components/Tag/TagContainer";
import Markdown from "../../Components/Markdown/Markdown";
import CommentButton from "../../Components/Button/CommentButton";
import CommentForm from "../../Components/Comment/CommentForm";
import CommentList from "../../Components/Comment/CommentList";
import { useSubmitQuestionComment } from "../../Hooks/useSubmitQuestionComment";

function QuestionDetailCard({ data }) {
  const [commentState, setCommentState] = useState(false);

  console.log("Data = ", data);
  const { title, code, question, tags, question_comments, id } = data;
  const { submitComment, errorSubmitComment, loadingSubmitComment } =
    useSubmitQuestionComment();

  const submitHandler = (comment) => {
    submitComment({
      variables: {
        object: {
          author: "Francisco",
          comment: comment,
          question_id: id,
          user_id: 1,
        },
      },
    });
  };

  return (
    <Card>
      <div className={classes.contain}>
        <h3>{title}</h3>
        <div className={classes.line}></div>
        <Markdown str={question} />
        <Markdown str={code} />
        <TagContainer>
          {tags.map((tag) => {
            return <Tag key={tag.id} text={tag.tag} />;
          })}
        </TagContainer>
        <CommentList comments={question_comments} />
        {!commentState && (
          <div className={classes.bottomWrapper}>
            <CommentButton onClick={() => setCommentState(true)} />
            <p>1 hour ago</p>
          </div>
        )}
        {commentState && (
          <CommentForm
            onCancel={() => setCommentState(false)}
            error={errorSubmitComment}
            loading={loadingSubmitComment}
            onSubmit={submitHandler}
          />
        )}
      </div>
    </Card>
  );
}

export default QuestionDetailCard;
