import React from "react";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./Forum.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { questions } from "./questionList";
import QuestionCard from "./QuestionCard";
import { useHistory } from "react-router";

function MainForum() {
  const history = useHistory();
  const createQuestionHandler = () => {
    history.push("/forum/ask");
  };
  return (
    <Container>
      <div className={classes.contain}>
        <div className={classes.topleft}>
          <h2>Ask and Answer</h2>
          <p>
            Place where you can ask anything and get clear answer from the{" "}
            <br />
            experienced one.
          </p>
        </div>
        <div className={classes.topright}>
          <Button
            onClick={createQuestionHandler}
            theme="light"
            className={classes.btn}
          >
            Ask a Question <HelpIcon color="" />
          </Button>
          <div className={classes.search}>
            <p>Search by tag</p>
            <div className={classes.inputWrapper}>
              <div className={classes.input}>
                <span className={classes.pgr}>#</span>
                <input type="text" placeholder="i.e java" />
              </div>
              <div>
                <SearchIcon className={classes.searchBtn} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.questionContainer}>
        {questions.map((q, i) => {
          return (
            <QuestionCard
              key={i}
              author={q.author}
              title={q.title}
              content={q.content}
              tags={q.tags}
            />
          );
        })}
      </div>
    </Container>
  );
}

export default MainForum;
