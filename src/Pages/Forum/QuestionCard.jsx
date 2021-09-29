import React from "react";
import Card from "../../Components/Card/Card";
import classes from "./QuestionCard.module.css";
import Button from "../../Components/Button/Button";
import ForumIcon from "@mui/icons-material/Forum";
import Tag from "./Tag";
import TagContainer from "./TagContainer";
import { useHistory } from "react-router-dom";

function QuestionCard({ author, title, content, tags }) {
  const history = useHistory();
  const detailClickHandler = () => {
    console.log("click");
    history.push("/forum/detail");
  };

  return (
    <Card className={classes.card}>
      <div className={classes.headWrapper}>
        <h3>{title}</h3>
        <div>
          <p className={classes.prag}>Created by</p>
          <p className={classes.author}>{author}</p>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className={classes.padd}>
        <div className={classes.flexWrapper}>
          <p>{content}</p>
          <div className={classes.forumIconWrapper}>
            <ForumIcon fontSize="large" className={classes.forumIcon} />
            <p>1 answer</p>
          </div>
        </div>
        <TagContainer>
          {tags.map((tag, i) => {
            return <Tag key={i} text={tag} />;
          })}
        </TagContainer>
        <div className={classes.btnWrapper}>
          <Button
            onClick={detailClickHandler}
            className={classes.btn}
            theme="light"
          >
            Details
          </Button>
          <p>1 hour ago</p>
        </div>
      </div>
    </Card>
  );
}

export default QuestionCard;
