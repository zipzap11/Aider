import React from "react";
import Card from "../../Components/Card/Card";
import classes from "./QuestionDetailCard.module.css";
import Tag from "./Tag";
import TagContainer from "./TagContainer";
import CommentIcon from "@mui/icons-material/Comment";
import Markdown from "../../Components/Markdown/Markdown";

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
        <div className={classes.bottomWrapper}>
          <button className={classes.btn}>
            <CommentIcon />
            add a comment
          </button>
          <p>1 hour ago</p>
        </div>
      </div>
    </Card>
  );
}

export default QuestionDetailCard;
