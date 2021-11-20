import React from "react";
import { Link } from "react-router-dom";
import s from "./LinkButton.module.scss";

export const LinkButton = (props) => {
  const { path, label } = props;
  return (
    <Link to={path} className={s.button}>
      {label}
    </Link>
  );
};
