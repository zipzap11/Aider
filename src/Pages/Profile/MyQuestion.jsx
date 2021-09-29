import React from "react";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";
import classes from "./MyQuestion.module.css";
import Tag from "../../Components/Tag/Tag";
import TagContainer from "../../Components/Tag/TagContainer";
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

function MyQuestion() {
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
        <div className={classes.btnWrapper}>
          <Button theme="light">Edit</Button>
          <Button theme="dark">Delete</Button>
        </div>
      </div>
    </Card>
  );
}

export default MyQuestion;
