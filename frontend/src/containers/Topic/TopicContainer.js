import React, { useEffect, useState } from 'react';
import { topicsAPI } from '../../api/topics';
import { useParams } from 'react-router-dom';
import { Topic } from '../../components/Topic/Topic'


export const TopicContainer = () => {

  const params = useParams()
  const [topic, setTopic] = useState({})

  useEffect(() => {
    topicsAPI.getTopic(params.topicId)
      .then(topic => setTopic(topic))
  }, [params.topicId]);

  return (
    <Topic topic={topic}/>
  )
}
