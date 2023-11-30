import { parseData } from "./weather_data_parser";
import { generateAPIKey } from "./api_key";
import { updateWeatherComponents } from "./dom_controller";
import { processError } from "./utils";

const key = generateAPIKey();

async function fetchCurrentWeatherData(location, units = "metric") {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${key}`;
  try {
    const response = await fetch(url, { mode: "cors" });

    if (response.status == 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(`Invalid query - ${response.message}`);
    }
  } catch (error) {
    throw error;
  }
}

async function fetchForecastWeatherData(location, units = "metric") {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${units}&appid=${key}`;
  try {
    const response = await fetch(url, { mode: "cors" });

    if (response.status == 200) {
      const json = await response.json();
      return json;
    } else {
      throw new Error(`Invalid query - ${response.message}`);
    }
  } catch (error) {
    throw error;
  }
}

async function updateWeather(location = "Tallinn") {
  try {
    const [currentWeatherData, forecastWeatherData] = await Promise.all([
      fetchCurrentWeatherData(location),
      fetchForecastWeatherData(location),
    ]);

    const parsedData = parseData([currentWeatherData, forecastWeatherData]);
    updateWeatherComponents(parsedData);
  } catch (error) {
    processError(error);
  }
}

export { updateWeather };
