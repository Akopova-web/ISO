import React from "react";
import "./Tasks.css"

const Tasks = (props) => {
  return (
    <form className="taskForm" action="#">
      <button>Выберите опцию</button>
      <div>Кто выполняет: <input type="text" /></div>
      <div>Крайний срок: <input type="text" /></div>
      <div>Описание задачи: <input type="text" /></div>
      <div>Итерация: <input type="text" /></div>
      <div>Комментарии: <input type="text" /></div>
      <button>Выполнить</button>
    </form>
  );
};
export default Tasks;