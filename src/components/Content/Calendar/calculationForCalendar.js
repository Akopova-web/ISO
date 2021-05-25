let date = new Date();
export const daysOfWeek = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];
export const objectiveMonths = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
let orderNumber;
date.getDay() === 0 ? (orderNumber = 6) : (orderNumber = date.getDay() - 1);

const numberOfDay = date.getDate();
export const firstNumberOfWeek = numberOfDay - orderNumber;
export const lastNumberOfWeek = firstNumberOfWeek + 6;
export let weekNumbers = [];
for (let i = firstNumberOfWeek; i <= lastNumberOfWeek; i++) {
  weekNumbers.push(i);
}

