import React from "react";
import { Field, reduxForm } from "redux-form";
import "./TaskForm.css";

const TaskForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>Исполнитель: </div>{" "}
      <Field
        name={"executor"}
        component={"input"}
        placeholder={"Исполнитель"}
      />
      <div> Крайний срок: </div>{" "}
      <Field
        type="text"
        name="deadline"
        component="input"
        placeholder="Крайний срок"
      />
      <div> Время: </div> 
      <Field type="text" name="time" component="input" placeholder="Время"/>
      <div> Описание задачи: </div>{" "}
      <Field type="text" name="description" component="input" placeholder="Описание задачи" />
      <div> Комментарии: </div>{" "}
      <Field type="text" name="comments" component="input" placeholder="Комментарии"/>
      <div><button>Добавить</button></div>
    </form>
  );
};

const TaskReduxForm = reduxForm({ form: "current_task" })(TaskForm);

export default TaskReduxForm;
