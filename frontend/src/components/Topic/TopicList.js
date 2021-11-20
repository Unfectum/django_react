import React from 'react';
import { TopicListItem } from './TopicListItem';
import s from './Topic.module.css'
import {Link} from "react-router-dom";


export const TopicList = (props) => {
  const {topicList} = props

  return (
    <div className={s.topicListWrapper}>
      {topicList.map(topic => <TopicListItem key={topic.id} topic={topic}/>)}
      <Link to={`/topic/new`}>
        <p>+</p>
      </Link>
    </div>
  )
}