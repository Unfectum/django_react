import React, { useState } from "react";
import { topicsAPI } from "../../api/topics";
import { TopicForm } from "../../components/Topic/TopicForm";
import { useHistory } from "react-router-dom";

export const TopicFormContainer = () => {
  const [topic, setTopic] = useState({ title: "", description: "" });
  const history = useHistory();

  const handleChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(topic).some((value) => !value)) {
      alert("Please fill in all fields!");
    } else {
      topicsAPI.addTopic(topic).then((response) => {
        if (response.status === 201) {
          history.push(`/`);
        }
      });
    }
  };

  return (
    <TopicForm
      topic={topic}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
