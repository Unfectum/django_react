import React from "react";
import { TopicListItem } from "./TopicListItem";
import s from "./TopicList.module.scss";
import { LinkButton } from "../LinkButoon/LinkButton";

export const TopicList = (props) => {
  const { topicList, path, label } = props;

  return (
    <div className={s.topicListWrapper}>
      <LinkButton path={path} label={label} />
      {topicList.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};
