import React from 'react';
import { TopicListContainer } from './containers/Topic/TopicListContainer';
import { Switch, Route } from 'react-router-dom'
import { TopicContainer } from './containers/Topic/TopicContainer';
import { AddTopicContainer } from './containers/Topic/AddTopicContainer';
import { Header } from './components/Header/Header';


export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path={`/topic/new`}>
          <AddTopicContainer />
        </Route>
        <Route path={`/topic/:topicId`}>
          <TopicContainer />
        </Route>
        <Route path={`/`}>
          <TopicListContainer />
        </Route>
      </Switch>
    </>
  );
}


