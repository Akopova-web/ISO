import React from "react";
export const MonthSchedule = () => {
  let date = new Date();
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayNumber = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastDayNumber = new Date(
    date.getFullYear(),
    date.getMonth(),
    lastDayOfMonth
  ).getDay();
  console.log(lastDayOfMonth, firstDayNumber, lastDayNumber);

  const monthCalendar = () => {
    // `<tr>`
    if (firstDayNumber !== 0) {
      for (let i = 0; i < firstDayNumber; i++) {
        <td></td>;
      }
    } else {
      
        for (let i = 0; i <= lastDayOfMonth; i++) {
          <td>{i}</td>
        
        // if (new Date(date.getFullYear(), date.getMonth(), i)===6) {
        //   {i}
        // }
    }
  };
};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
        </thead>
        <tbody>
          {monthCalendar()}
        </tbody>
      </table>
    </div>
  );
};