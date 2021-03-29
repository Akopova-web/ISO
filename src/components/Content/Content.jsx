import AddSolve from "./AddingSolve/AddingSolve";
import Calendar from "./Calendar/Calendar";
import Notification from "./Notification/Notification";
import "./Content.css"

export const Content = () => {
  return (
    <div className="content">
      <Notification />
      <AddSolve />
      <Calendar />
    </div>
  );
};
