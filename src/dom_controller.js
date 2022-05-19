import { generateWeatherIcon } from "./weather_icons";
import { tsToWeekday, getMaximumDayTemp } from "./utils";

const tempSmall = document.getElementsByClassName("info-small");
const tempMain = document.getElementById("temperature");
const weekdays = document.getElementsByClassName("week-day");
const smallIcons = document.getElementsByClassName("icon");
const location = document.getElementById("location");
const mainIcon = document.getElementsByClassName("icon")[0];
const infoMain = document.getElementsByClassName("column");

function parseDataIntoDOM(data) {
  updateMain(data[0]);
  updateForecast(data[1]);
}

function updateMain(data) {
  location.textContent = data["name"];
  infoMain[0].children[1].textContent = `${data["weather"][0]["description"]}`;
  infoMain[1].textContent = `Pressure: ${data["main"]["pressure"]}`;
  infoMain[2].textContent = `Humidity: ${data["main"]["humidity"]}%`;
  infoMain[3].textContent = `Wind: ${data["wind"]["speed"]}`;
  let temp = Math.round(data["main"]["temp"]);
  tempMain.textContent = `${temp}°C`;
  mainIcon.children[0].src = generateWeatherIcon(data["weather"][0]["main"]);
}

function updateForecast(data) {
  let date = new Date();
  // 4 days only
  for (let i = 0; i < 4; i++) {
    let dayStartIdx = i*8;
    let dayData = data["list"].slice(dayStartIdx, dayStartIdx + 8);
    console.log(dayData);
    updateForecastSingle(dayData, i);
  }
}

function updateForecastSingle(data, cardIdx) {
  let temp = Math.round(getMaximumDayTemp(data));
  //let temp = Math.round(data["main"]["temp"]);
  tempSmall[cardIdx].textContent = `${temp}°C`;
  /* Get weekdays from timestamp. Timestamp must be multiplied by 1000
       because UNIX time in JavaScript is in ms. */
  weekdays[cardIdx].children[0].textContent = tsToWeekday(
    data[0]["dt"] * 1000,
    "long"
  );
  weekdays[cardIdx].children[1].textContent = tsToWeekday(
    data[0]["dt"] * 1000,
    "short"
  );
  smallIcons[cardIdx + 1].children[0].src = generateWeatherIcon(
    data[0]["weather"][0]["main"]
  ); // incremebt by 1 becuse 0 is the main temperature
}

export { parseDataIntoDOM };