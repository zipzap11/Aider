import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import classes from "./QuestionDetailCard.module.css";
import Tag from "../../Components/Tag/Tag";
import TagContainer from "../../Components/Tag/TagContainer";
import Markdown from "../../Components/Markdown/Markdown";
import CommentButton from "../../Components/Button/CommentButton";
import CommentForm from "../../Components/Comment/CommentForm";

const str = `
So i wanna center my div inside a parent component which is a div too. How should my css file look like? 

This is my html code
\`\`\`html
<div class="outer">
     <div ="inner"></div>
</div> 
\`\`\`
`;

function QuestionDetailCard() {
  const [commentState, setCommentState] = useState(false);

  console.log(commentState);
  return (
    <Card>
      <div className={classes.contain}>
        <h3>How to center a div in html</h3>
        <div className={classes.line}></div>
        <Markdown str={str} />
        <TagContainer>
          {["html", "css"].map((tag, i) => {
            return <Tag key={i} text={tag} />;
          })}
        </TagContainer>
        {!commentState && (
          <div className={classes.bottomWrapper}>
            <CommentButton onClick={() => setCommentState(true)} />
            <p>1 hour ago</p>
          </div>
        )}
        {commentState && (
          <CommentForm onCancel={() => setCommentState(false)} />
        )}
      </div>
    </Card>
  );
}

export default QuestionDetailCard;
