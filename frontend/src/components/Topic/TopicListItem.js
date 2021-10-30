import React from 'react';
import {Link} from "react-router-dom";
import s from './Topic.module.css'


export const TopicListItem = (props) => {
  const {topic} = props

  return (
    <div className={s.topicListItem}>
      <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
    </div>
  )
}
