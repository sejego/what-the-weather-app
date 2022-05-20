// TODO: Add Fahrenheit - Celsius toggle
// TODO: Add weather animations / images

import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from "./fetch_weather_data";
import { updateDOM } from "./dom_controller";
import { displayError, hideError, ErrorCodes } from "./errors";
import { parseData } from "./weather_data_parser";

const search = document.getElementsByName("Location")[0];
const searchBtn = document.getElementById("search-btn");

search.addEventListener("input", function (event) {
  if (search.validity.valueMissing) {
    displayError(ErrorCodes.LocationSearchEmpty);
    setTimeout(hideError, 1700);
  }
});
function removeSearchText() {
  search.value = "";
}

searchBtn.addEventListener("click", () => {
  updateWeather(search.value);
  removeSearchText();
});

async function updateWeather(location = "Tallinn") {
  Promise.all([
    fetchCurrentWeatherData(location),
    fetchForecastWeatherData(location),
  ])
    .then(
      function (weatherData) {
        let parsedData = parseData(weatherData);
        updateDOM(parsedData);
      },
      function (err) {
        throw err;
      }
    )
    .catch((err) => {
      console.log(err);
      displayError(ErrorCodes.LocationNotFound);
      setTimeout(hideError, 1700);
    });
}
updateWeather();
