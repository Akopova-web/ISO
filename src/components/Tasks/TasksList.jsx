import React from "react";
import "./TasksList.css";
import doneButton from "./../../assets/Images/Check_mark.png";

export const TasksList = ({ tasks }) => {
  return (
    <table className="taskTable">
      <thead>
        <tr>
          <th>Исполнитель</th>
          <th>Крайний срок</th>
          <th>Время</th>
          <th>Описание</th>
          <th>Итерация</th>
          <th>Комментарии</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr>
            <td>{task.executor}</td>
            <td>{task.deadline}</td>
            <td>{task.time}</td>
            <td>{task.description}</td>
            <td>{task.iteration}</td>
            <td>{task.comments}</td>
            <td><button><img src={doneButton}></img></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};