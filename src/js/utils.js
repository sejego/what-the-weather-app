import { displayError, hideError, ErrorCodes } from "./errors";

function tsToWeekday(timestamp, length) {
  let weekday = new Date(timestamp).toLocaleDateString('en-US', { weekday: length });
  return weekday;
}
function getMaximumDayTemp(weatherList){
  return Math.max(...weatherList.map(day => day['main']['temp']));
}

function isSearchFieldEmpty(searchRequest) {
  if (searchRequest.validity.valueMissing) {
    displayError(ErrorCodes.LocationSearchEmpty);
    setTimeout(hideError, 1700);
    return true;
  }
  return false;
}

function processError(err) {
  console.log(err);
  displayError(ErrorCodes.LocationNotFound);
  setTimeout(hideError, 1700);
}

export { tsToWeekday, getMaximumDayTemp, isSearchFieldEmpty, processError };
