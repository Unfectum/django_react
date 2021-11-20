import React from 'react';
import { TopicListContainer } from './containers/Topic/TopicListContainer';
import { Switch, Route } from 'react-router-dom'
import { TopicContainer } from './containers/Topic/TopicContainer';
import { TopicFormContainer } from './containers/Topic/TopicFormContainer';
import { Header } from './components/Header/Header';
import s from './App.module.css'


export const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
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
  );
}


