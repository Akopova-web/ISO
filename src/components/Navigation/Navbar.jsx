import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <nav className="navbar">
    <li>
      <NavLink to="/">Главная</NavLink>
    </li>
    <li>
      <NavLink to="/tasks">Задачи</NavLink>
    </li>
    <li>
      <NavLink to="/calendar">Календарь</NavLink>
    </li>
    <li>
      <NavLink to="/templates">Шаблоны</NavLink>
    </li>
    <li>
      <NavLink to="/consulting">Консультация</NavLink>
    </li>
  </nav>
);