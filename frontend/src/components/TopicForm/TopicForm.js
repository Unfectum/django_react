import React from "react";
import s from "./TopicForm.module.scss";

export const TopicForm = (props) => {
  const { handleSubmit, handleChange, topic, t } = props;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={topic.title}
          name={"title"}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={topic.description}
          name={"description"}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value={t("submit")} />
    </form>
  );
};
