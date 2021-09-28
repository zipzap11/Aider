import React from "react";
import Card from "../../Components/Card/Card";
import classes from "./QuestionCard.module.css";
import Button from "../../Components/Button/Button";
import ForumIcon from "@mui/icons-material/Forum";
import Tag from "./Tag";
import TagContainer from "./TagContainer";

function QuestionCard({ author, title, content, tags }) {
  return (
    <Card>
      <div className={classes.contain}>
        <div className={classes.headWrapper}>
          <h3>{title}</h3>
          <div>
            <p className={classes.prag}>Created by</p>
            <p className={classes.author}>{author}</p>
          </div>
        </div>
        <div className={classes.line}></div>
        <div className={classes.flexWrapper}>
          <p>{content}</p>
          <div className={classes.forumIconWrapper}>
            <ForumIcon className={classes.forumIcon} />
            <p>1 answer</p>
          </div>
        </div>
        <TagContainer>
          {tags.map((tag) => {
            return <Tag text={tag} />;
          })}
        </TagContainer>
      </div>
      <div className={classes.btnWrapper}>
        <Button className={classes.btn} theme="light">
          Details
        </Button>
        <p>1 hour ago</p>
      </div>
    </Card>
  );
}

export default QuestionCard;
