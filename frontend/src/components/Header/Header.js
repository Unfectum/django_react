import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <NavLink to={`/`}>Home</NavLink>
    </header>
  );
};
