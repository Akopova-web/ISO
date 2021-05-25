import React from "react";
import { Field, reduxForm } from "redux-form";
import "./TaskForm.css";


const TaskForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
     <div>Исполнитель: <Field name={"executor"} component={"input"} placeholder={"Исполнитель"} /></div>
     {/* <div> Крайний срок: <Field type="text" name="deadline" component="input"  /></div>
     <div> Время: <Field type="text" name="time" component="input"  /></div>
     <div> Описание задачи: <Field type="text" name="description" component="input"  /></div>
     <div> Итерация: <Field type="text" name="iteration" component="input"  /></div>
     <div> Комментарии: <Field type="text" name="comments" component="input"  /></div> */}
      <button>Добавить</button>
    </form>
  );
};

const TaskReduxForm = reduxForm({form: "current_task"})(TaskForm);

export default TaskReduxForm;
