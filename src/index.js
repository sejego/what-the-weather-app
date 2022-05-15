import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from "./fetch_weather_data";
import { parseDataIntoDOM } from "./dom_controller";
import { displayError, hideError, ErrorCodes } from "./errors";

const search = document.getElementsByName("Location")[0];
const searchBtn = document.getElementById("search-btn");

search.addEventListener("input", function (event) {
  if (search.validity.valueMissing) {
    displayError(ErrorCodes.LocationSearchEmpty);
    setTimeout(hideError, 2500);
  }
});

searchBtn.addEventListener("click", () => {
  updateWeather();
  removeSearchText();
});

async function updateWeather() {
  Promise.all([
    fetchCurrentWeatherData(search.value),
    fetchForecastWeatherData(search.value),
  ])
    .then((weatherData) => {
      parseDataIntoDOM(weatherData);
    })
    .catch((err) => {
      console.log(err);
      displayError(ErrorCodes.LocationNotFound);
      setTimeout(hideError, 2500);
    });
}

function removeSearchText() {
  search.value = "";
}
