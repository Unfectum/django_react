import React from 'react';
import s from './Topic.module.css'


export const Topic = (props) => {
  const { topic } = props

  return (
    <div className={s.topicWrapper}>
      <h1>{topic.title}</h1>
      <p>{topic.description}</p>
    </div>
  )
}