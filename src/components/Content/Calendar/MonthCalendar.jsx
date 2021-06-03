import React, { useState } from "react";
import { months } from "./constansForCalendar";
import "./Calendar.css";

export const MonthCalendar = () => {
  let date = new Date();

  let monthCalendar =
    "<table><thead><tr><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th></tr></thead><tbody><tr>";
  let [month, setMonth] = useState(date.getMonth());
  let [year, setYear] = useState(date.getFullYear());

  // Предварительные расчеты
  let firstDayNumber = new Date(year, month, 1).getDay(); //нахождение дня недели первого дня месяца
  firstDayNumber === 0
    ? (firstDayNumber = 6)
    : (firstDayNumber = firstDayNumber - 1); //переприсваивание дня недели на русский манер
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate(); //нахождение последнего дня месяца
  let lastDayNumber = new Date(year, month, lastDayOfMonth).getDay(); //нахождение дня недели последнего дня месяца
  lastDayNumber === 0
    ? (lastDayNumber = 6)
    : (lastDayNumber = lastDayNumber - 1); //переприсваивание дня недели на русский манер

  let days = [];

  for (let i = 0; i < firstDayNumber; i++) {
    days[i] = 0;
  }
  for (let i = 1; i <= lastDayOfMonth; i++) {
    days.push(i);
  }

  for (let i = 0; i < days.length; i++) {
    days[i] === 0
      ? (monthCalendar += "<td></td>")
      : i % 7 === 0
      ? (monthCalendar += `</tr><tr><td>${days[i]}</td>`)
      : (monthCalendar += `<td>${days[i]}</td>`);
  }
  for (let i = 0; i < 6 - lastDayNumber; i++) {
    monthCalendar += "<td></td>";
  }
  monthCalendar += "</tr></tbody></table>";
  const createMarkup = () => {
    return { __html: monthCalendar };
  };
  return (
    <div className="monthCalendar">
      <h3>
        <span
          onClick={() => {
            return month === 0
              ? (setMonth(11), setYear(year - 1))
              : setMonth(month - 1);
          }}
        >
          ᐊ
        </span>{" "}
        {months[month]} {year}
        <span
          onClick={() => {
            return month === 11
              ? (setMonth(0), setYear(year + 1))
              : setMonth(month + 1);
          }}
        >
          ᐅ
        </span>
      </h3>
      <div className="bodyOfCalendar" dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};
