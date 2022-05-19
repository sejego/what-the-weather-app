function tsToWeekday(timestamp, length) {
  let weekday = new Date(timestamp).toLocaleDateString('en-US', { weekday: length });
  return weekday;
}

export { tsToWeekday };
