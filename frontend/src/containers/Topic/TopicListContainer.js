import React, { useEffect, useState } from 'react';
import { TopicList } from '../../components/Topic/TopicList';
import { topicsAPI } from '../../api/topics';


export const TopicListContainer = () => {
  const [topicList, setTopicList] = useState([])

  useEffect(() => {
    topicsAPI.getAllTopics()
      .then(allTopics => setTopicList(allTopics))
  }, []);

  return (
    <TopicList topicList={topicList}/>
  )
}
