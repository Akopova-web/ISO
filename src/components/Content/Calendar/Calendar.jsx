import React from "react";
import "./Calendar.css";
import { MonthCalendar } from "./MonthCalendar";
import { WeeklySchedule } from "./WeeklySchedule";

const Calendar = () => {
  return (
    <div>
      <WeeklySchedule />
      <MonthCalendar />
    </div>
  );
};

export default Calendar;
