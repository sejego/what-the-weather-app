import { generateWeatherIcon } from "./weather_icons";
import { tsToWeekday, getMaximumDayTemp } from "./utils";

/* Object representing current day weather */
class CurrentWeather {
  constructor() {
    this.location = "";
    this.description = "";
    this.pressure = 0;
    this.humidity = 0;
    this.windSpeed = 0;
    this.temperature = 0;
    this.weatherIcon = "";
  }
}

/* Object representing single day forecast of all forecasted days*/
class ForecastWeather {
  constructor() {
    this.temperature = 0;
    this.fullDayName = "";
    this.shortDayNam = "";
    this.weatherIcon = "";
  }
}

function parseData(data) {
  let currentDay = new CurrentWeather();
  let forecastDays = [];
  /* Parse current day weather */
  currentDay.location = data[0]["name"];
  currentDay.description = data[0]["weather"][0]["description"];
  currentDay.pressure = data[0]["main"]["pressure"];
  currentDay.humidity = data[0]["main"]["humidity"];
  currentDay.windSpeed = data[0]["wind"]["speed"];
  currentDay.temperature = Math.round(data[0]["main"]["temp"]);
  currentDay.weatherIcon = generateWeatherIcon(data[0]["weather"][0]["main"]);

  /* Parse next 4 days for forecast */
  for (let i = 8; i < 40; i += 8) {
    let temp = new ForecastWeather();
    let dayDataList = data[1]["list"].slice(i, i + 8);
    temp.temperature = Math.round(getMaximumDayTemp(dayDataList));
    /* Get weekdays from timestamp. Timestamp must be multiplied by 1000
     because UNIX time in JavaScript is in ms. */
    temp.fullDayName = tsToWeekday(dayDataList[0]["dt"] * 1000, "long");
    temp.shortDayName = tsToWeekday(dayDataList[0]["dt"] * 1000, "short");
    temp.weatherIcon = generateWeatherIcon(
      dayDataList[0]["weather"][0]["main"]
    );
    forecastDays.push(temp);
  }

  return { currentDay, forecastDays };
}

export { parseData };
