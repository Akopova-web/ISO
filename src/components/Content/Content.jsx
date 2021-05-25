import ShowTask from "./ShowTask/ShowTask";
import Notification from "./Notification/Notification";
import "./Content.css";
import { WeeklySchedule } from "./Calendar/WeeklySchedule";

export const Content = ({tasks}) => {
  return (
    <div className="main_menu">
    <h1>Главное меню</h1>
    <div className="content">
      <Notification tasks={tasks} />
      <ShowTask />
      <WeeklySchedule />
    </div>
    </div>
  );
};
