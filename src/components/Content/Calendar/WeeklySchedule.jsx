import React from "react";
import "./Calendar.css";
import {
  daysOfWeek,
  firstNumberOfWeek,
  lastNumberOfWeek,
  objectiveMonths,
  weekNumbers,
} from "./calculationForCalendar";

export const WeeklySchedule = () => {
  let date = new Date();
  return (
    <div className="calendar">
      <h3>Календарь на неделю</h3>
      <h4>
        <span onClick={() => console.log("влево")}>ᐊ</span> {firstNumberOfWeek}{" "}
        - {lastNumberOfWeek} {objectiveMonths[date.getMonth()]}{" "}
        <span onClick={() => console.log("вправо")}>ᐅ</span>
      </h4>
      <table className="weekCalendar">
        <thead>
          <tr>
            {daysOfWeek.map((days) => (
              <th>{days}</th>
            ))}
          </tr>
          <tr>
            {weekNumbers.map((numberDays) => (
              <th>{numberDays}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>some task</td>
            <td>some task</td>
            <td>some task</td>
            <td>some task</td>
            <td>some task</td>
            <td>some task</td>
            <td>some task</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};