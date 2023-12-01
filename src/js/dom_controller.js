const tempSmall  = document.getElementsByClassName("info-small");
const tempMain   = document.getElementById("temperature");
const weekdays   = document.getElementsByClassName("week-day");
const smallIcons = document.getElementsByClassName("icon");
const location   = document.getElementById("location");
const mainIcon   = document.getElementsByClassName("icon")[0];
const infoMain   = document.getElementsByClassName("column");

/**
 * Wrapper to update today's and upcoming days'
 *  weather information in the weather cards
 * @param {JSON} data
 */
function updateWeatherComponents(data) {
  updateCurrentWeather(data["currentDay"]);
  updateForecast(data["forecastDays"]);
}

/**
 * Update today's weather data in the weather cards
 * @param {json} data - should contain only data of the current day
 */
function updateCurrentWeather(data) {
  location.textContent = data.location;
  infoMain[0].children[1].textContent = data.description;
  infoMain[1].textContent = `Pressure: ${data.pressure}`;
  infoMain[2].textContent = `Humidity: ${data.humidity}%`;
  infoMain[3].textContent = `Wind: ${data.windSpeed}`;
  tempMain.textContent = `${data.temperature}°C`;
  mainIcon.children[0].src = data.weatherIcon;
}

/**
 * Update upcoming days' weather data in the weather cards
 * @param {json} data - should contain only data of the forecast days
 */
function updateForecast(data) {
  /* 4 days only */
  for (let i = 0; i < 4; i++) {
    updateForecastSingle(data[i], i);
  }
}

/**
 * Update single day in the forecast in the smaller weather cards.
 * @param {json} data - data for the day
 * @param {any} cardIdx - index of the weather card that will be updated
 */
function updateForecastSingle(data, cardIdx) {
  tempSmall[cardIdx].textContent = `${data.temperature}°C`;
  weekdays[cardIdx].children[0].textContent = data.fullDayName;
  weekdays[cardIdx].children[1].textContent = data.shortDayName;
  /* increment by 1 becuse smallIcon[0] is the today's weather icon */
  smallIcons[cardIdx + 1].children[0].src = data.weatherIcon;
}

export { updateWeatherComponents };
