import React, { useEffect, useState } from "react";
import { TopicList } from "../../components/TopicList/TopicList";
import { topicsAPI } from "../../api/topics";

export const TopicListContainer = () => {
  const [topicList, setTopicList] = useState([]);

  useEffect(() => {
    topicsAPI
      .getAllTopics()
      .catch((error) => {
        console.error(error);
        return [];
      })
      .then((allTopics) => setTopicList(allTopics));
  }, []);

  return <TopicList topicList={topicList} path={`/topic/new`} label={"New"} />;
};
