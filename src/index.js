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
function removeSearchText() {
  search.value = "";
}

searchBtn.addEventListener("click", () => {
  updateWeather(search.value);
  removeSearchText();
});

async function updateWeather(location = 'Tallinn') {
  Promise.all([
    fetchCurrentWeatherData(location),
    fetchForecastWeatherData(location),
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
updateWeather();