import React from "react";
import { TopicListContainer } from "../containers/Topic/TopicListContainer";
import { Switch, Route } from "react-router-dom";
import { TopicContainer } from "../containers/Topic/TopicContainer";
import { TopicFormContainer } from "../containers/Topic/TopicFormContainer";
import { Header } from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import s from "./App.module.scss";

export const App = () => {
  return (
    <Router>
      <Header />
      <div className={s.wrapper}>
        <Switch>
          <Route path={`/topic/new`}>
            <TopicFormContainer />
          </Route>
          <Route path={`/topic/:topicId`}>
            <TopicContainer />
          </Route>
          <Route path={`/`}>
            <TopicListContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
