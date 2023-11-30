const tempSmall  = document.getElementsByClassName("info-small");
const tempMain   = document.getElementById("temperature");
const weekdays   = document.getElementsByClassName("week-day");
const smallIcons = document.getElementsByClassName("icon");
const location   = document.getElementById("location");
const mainIcon   = document.getElementsByClassName("icon")[0];
const infoMain   = document.getElementsByClassName("column");

function updateWeatherComponents(data) {
  updateCurrentWeather(data["currentDay"]);
  updateForecast(data["forecastDays"]);
}

function updateCurrentWeather(data) {
  location.textContent = data.location;
  infoMain[0].children[1].textContent = data.description;
  infoMain[1].textContent = `Pressure: ${data.pressure}`;
  infoMain[2].textContent = `Humidity: ${data.humidity}%`;
  infoMain[3].textContent = `Wind: ${data.windSpeed}`;
  tempMain.textContent = `${data.temperature}°C`;
  mainIcon.children[0].src = data.weatherIcon;
}

function updateForecast(data) {
  /* 4 days only */
  for (let i = 0; i < 4; i++) {
    updateForecastSingle(data[i], i);
  }
}

function updateForecastSingle(data, cardIdx) {
  tempSmall[cardIdx].textContent = `${data.temperature}°C`;
  weekdays[cardIdx].children[0].textContent = data.fullDayName;
  weekdays[cardIdx].children[1].textContent = data.ShortDayName;
  /* increment by 1 becuse smallIcon[0] is the today's weather icon */
  smallIcons[cardIdx + 1].children[0].src = data.weatherIcon;
}

export { updateWeatherComponents };
