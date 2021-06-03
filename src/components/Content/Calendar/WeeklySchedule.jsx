import React from "react";
import "./Calendar.css";
import { daysOfWeek, months, objectiveMonths } from "./constansForCalendar";

export const WeeklySchedule = () => {
  let date = new Date();
  
  //Предварительные вычисления
  let orderNumber;
  date.getDay() === 0 ? (orderNumber = 6) : (orderNumber = date.getDay() - 1); //номер дня недели по порядку в русской неделе

  let lastDayOfMonth = new Date( date.getFullYear(), date.getMonth() + 1, 0 ).getDate(); //последний день месяца
  let firstDayNumber = new Date( date.getFullYear(), date.getMonth(), 1 ).getDay(); //нахождение дня недели первого дня месяца
  firstDayNumber === 0
    ? (firstDayNumber = 6)
    : (firstDayNumber = firstDayNumber - 1); //переприсваивание дня недели на русский манер

  const numberOfDay = date.getDate(); //день недели сегодняшнего дня
  const firstNumberOfWeek = numberOfDay - orderNumber; //определение числа понедельника

  const prevLastDay = new Date( date.getFullYear(), date.getMonth(), 0 ).getDate(); //последний день предыдущего месяца

  let weekNumbers = [];
  let currentDay = firstNumberOfWeek; //назначение понедельника текущим днем
  let i = 0;
  while (i < 7) {
    if (currentDay <= 0) {
      currentDay = prevLastDay - firstDayNumber + 1; //переприсваивание понедельника на положительное число прошлого месяца
      lastDayOfMonth = prevLastDay; //переприсваивание последнего дня месяца в случае, когда сегодня уже другой месяц
    }
    currentDay === lastDayOfMonth + 1 && (currentDay = 1); //назначение 1 числа после последнего дня месяца
    weekNumbers.push(currentDay);
    currentDay++;
    i++;
  }
  return (
    <div className="calendar">
      <h3>Календарь на неделю</h3>
      <h4>
        {months[date.getMonth()]}
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
              <td>{numberDays}</td>
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