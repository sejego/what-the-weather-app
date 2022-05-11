import { fetchCurrentWeatherData } from "./fetch_weather_data";
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

searchBtn.addEventListener("click", updateWeather, false);

async function updateWeather() {
  // top level await doesn't seem to work...
  await fetchCurrentWeatherData(search.value)
    .then((data) => {
      parseDataIntoDOM(data);
    })
    .catch((err) => {
      displayError(ErrorCodes.LocationNotFound);
      setTimeout(hideError, 2500);
    });
}
