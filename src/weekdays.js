const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getWeekDay(day) {
  let fullDay = weekdays[day];
  let shortDay = fullDay.substring(0, 3);
  return { fullDay: fullDay, shortDay: shortDay };
}

export { getWeekDay };
