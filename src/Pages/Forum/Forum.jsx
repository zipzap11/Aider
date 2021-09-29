import React from "react";

import { Switch, Route } from "react-router-dom";
import CreateQuestion from "./CreateQuestion/CreateQuestion";
import MainForum from "./MainForum";
import QuestionDetail from "./QuestionDetail";

function Forum() {
  return (
    <Switch>
      <Route path="/forum" exact component={MainForum} />
      <Route path="/forum/detail" exact component={QuestionDetail} />
      <Route path="/forum/ask" exact component={CreateQuestion} />
    </Switch>
  );
}

export default Forum;
