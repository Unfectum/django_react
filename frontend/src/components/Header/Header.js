import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <NavLink to={`/`} className={s.home}>
        Home
      </NavLink>
    </header>
  );
};
