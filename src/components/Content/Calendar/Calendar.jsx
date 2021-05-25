import React from "react";
import "./Calendar.css";
import { MonthSchedule } from "./MonthSchedule";
import { WeeklySchedule } from "./WeeklySchedule";

const Calendar = () => {
  return (
    <div>
      <WeeklySchedule />
      <MonthSchedule />
    </div>
  );
};

export default Calendar;
