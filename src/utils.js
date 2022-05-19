function tsToWeekday(timestamp, length) {
  let weekday = new Date(timestamp).toLocaleDateString('en-US', { weekday: length });
  return weekday;
}
function getMaximumDayTemp(weatherList){
  return Math.max(...weatherList.map(day => day['main']['temp']));
}
export { tsToWeekday, getMaximumDayTemp };
