import { updateWeather } from "./fetch_weather_data";
import { isSearchFieldEmpty} from "./utils";

const search = document.getElementsByName("Location")[0];
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", (event) => processWeatherRequest(event));

async function processWeatherRequest(event) {
  /* prevent double click event from happening */
  event.stopPropagation();
  event.preventDefault();
  if (!isSearchFieldEmpty(search)) {
    await updateWeather(search.value);
  }
  search.value = "";
}

/* Initial update with default location */
updateWeather();