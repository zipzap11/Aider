import React from "react";
import classes from "./CommentList.module.css";
import Comment from "./Comment";

const dummyComments = [
  {
    id: 1,
    author: "Budi",
    comment:
      "i think there is another shorter way, just set  width of the inner witdth and apply margin auto for all of the side (top, right, bottom, left).",
  },
  {
    id: 2,
    author: "Andi",
    comment: "That is very clear answer.",
  },
];

function CommentList() {
  return (
    <div className={classes.contain}>
      <h5>Comments</h5>
      {dummyComments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            author={comment.author}
            comment={comment.comment}
          />
        );
      })}
    </div>
  );
}

export default CommentList;
