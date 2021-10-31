import React from 'react';
import {Link} from "react-router-dom";
import s from './Topic.module.css'


export const TopicListItem = (props) => {
  const {topic} = props

  return (
    <Link className={s.topicListItem} to={`/topic/${topic.id}`}>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
    </Link>
  )
}
