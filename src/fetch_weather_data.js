import { generateAPIKey } from "./api_key";

async function fetchCurrentWeatherData(
  location = "Los Angeles",
  units = "metric"
) {
  const key = generateAPIKey();
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

export { fetchCurrentWeatherData };
