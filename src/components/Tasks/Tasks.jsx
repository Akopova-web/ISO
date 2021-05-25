import React from "react";
import "./Tasks.css";
import { TasksList } from "./TasksList";
import TaskReduxForm from "./TaskForm";

const Tasks = ({tasks}) => {
  const onSubmit = () => {
    alert ("Форма работает!")
  }
  return (
    <div className="tasksPage">
      <h3>Добавление задачи</h3>
      <h3>Список текущих задач</h3>
      <TaskReduxForm onSubmit={onSubmit}/>
      <TasksList tasks={tasks} />
    </div>
  );
};
export default Tasks;
