import "../styles/style.css";
import "../styles/error.css";

import { updateWeather } from "./fetch_weather_data";
import { isSearchFieldEmpty } from "./utils";

const search = document.getElementsByName("Location")[0];
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (event) => processWeatherRequest(event));

search.addEventListener("keypress", (event) => processEnterPress(event));

async function processWeatherRequest(event) {
  /* prevent double click event from happening */
  event.stopPropagation();
  event.preventDefault();
  if (!isSearchFieldEmpty(search)) {
    await updateWeather(search.value);
  }
  search.value = "";
}

function processEnterPress(event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
}
/* Initial update with default location */
updateWeather();
