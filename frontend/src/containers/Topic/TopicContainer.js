import React, { useEffect, useState } from "react";
import { topicsAPI } from "../../api/topics";
import { useParams } from "react-router-dom";
import { Topic } from "../../components/Topic/Topic";
import { TopicForm } from "../../components/TopicForm/TopicForm";
import { useTranslation } from "react-i18next";

export const TopicContainer = () => {
  const params = useParams();
  const [topic, setTopic] = useState({ title: "", description: "" });
  const [isEdit, setIsEdit] = useState(false);
  const { t } = useTranslation("buttons");

  useEffect(() => {
    topicsAPI.getTopic(params.topicId).then((topic) => setTopic(topic));
  }, [params.topicId]);

  const onClick = (event) => {
    event.preventDefault();
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  const handleTopicChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  if (isEdit === false) {
    return (
      <>
        <Topic topic={topic} />
        <button onClick={onClick}>Edit</button>
      </>
    );
  } else {
    return <TopicForm topic={topic} handleChange={handleTopicChange} t={t} />;
  }
};
