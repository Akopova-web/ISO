import React from "react";
import "./Tasks.css";
import { TasksList } from "./TasksList";
import TaskReduxForm from "./TaskForm";

const Tasks = ({tasks, addTask}) => {
  const onSubmit = (formData) => {
   return Object.keys(formData).length !==0 && addTask (formData);
  }
  return (
    <div className="tasksPage">
      <h3>Добавление задачи</h3>
      <h3>Список текущих задач</h3>
      <TaskReduxForm onSubmit={onSubmit} addTask={addTask}/>
      <TasksList tasks={tasks} />
    </div>
  );
};
export default Tasks;
