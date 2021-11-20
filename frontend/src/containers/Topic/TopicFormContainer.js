import React, { useState } from "react";
import { topicsAPI } from "../../api/topics";
import { TopicForm } from "../../components/TopicForm/TopicForm";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TopicFormContainer = () => {
  const [topic, setTopic] = useState({ title: "", description: "" });
  const history = useHistory();
  const { t } = useTranslation("buttons");
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
      t={t}
    />
  );
};
