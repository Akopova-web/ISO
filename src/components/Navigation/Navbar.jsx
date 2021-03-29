import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink to="main_menu_content">Главная</NavLink>
      </li>
      <li>
        <NavLink to="/tasks">Задачи</NavLink>
      </li>
      {/* <NavLink><li>Календарь</li></NavLink>
        <NavLink><li>Шаблоны</li></NavLink>
        <NavLink><li>Консультация</li></NavLink> */}
    </ul>
  );
};

export default Navbar;
