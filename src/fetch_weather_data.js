import { generateAPIKey } from "./api_key";
const key = generateAPIKey();

async function fetchCurrentWeatherData(
  location,
  units = "metric"
) {
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
    return error;
  }
}

async function fetchForecastWeatherData(
  location,
  units = "metric"
) {
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
    return error;
  }
}

export { fetchCurrentWeatherData, fetchForecastWeatherData };
