import React from "react";
import Button from "../../Components/Button/Button";
import classes from "./CommentForm.module.css";

function CommentForm({ onCancel }) {
  return (
    <div className={classes.contain}>
      <textarea placeholder="Type your comment here"></textarea>
      <div className={classes.btnWrapper}>
        <Button onClick={onCancel} theme="light">
          Cancel
        </Button>
        <Button theme="dark">Submit</Button>
      </div>
    </div>
  );
}

export default CommentForm;
