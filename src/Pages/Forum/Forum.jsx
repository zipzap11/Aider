import React from "react";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import HelpIcon from "@mui/icons-material/Help";
import classes from "./Forum.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { questions } from "./questionList";
import QuestionCard from "./QuestionCard";
import { Switch, Route } from "react-router-dom";
import QuestionDetail from "./QuestionDetail";

function Forum() {
  return (
    <Switch>
      <Route path="/forum" exact>
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
              <Button theme="light" className={classes.btn}>
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
                    <SearchIcon onClick className={classes.searchBtn} />
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
      </Route>
      <Route path="/forum/detail" exact component={QuestionDetail} />
    </Switch>
  );
}

export default Forum;
