import { generateWeatherIcon } from "./weather_icons";
const tempSmall = document.getElementsByClassName("info-small");
const tempMain = document.getElementById('temperature')
const weekdays = document.getElementsByClassName("week-day");
const smallIcons = document.getElementsByClassName('icons');
const location = document.getElementById('location');
const mainIcon = document.getElementsByClassName('icon')[0];
const infoMain = document.getElementsByClassName('column');

function parseDataIntoDOM(data) {
  updateMainBox(data);
}

function updateMainBox(data){
  let condition = data['weather'][0]['description'];
  location.textContent = data['name'];
  infoMain[0].textContent = `Sky: ${condition}`;
  infoMain[1].textContent = `Pressure: ${data['main']['pressure']}`;
  infoMain[2].textContent = `Humidity: ${data['main']['humidity']}%`;
  infoMain[3].textContent = `Wind: ${data['wind']['speed']}`;
  let temp = Math.round(data['main']['temp']);
  tempMain.textContent = `${temp}°C`;
  mainIcon.children[0].src = generateWeatherIcon(condition);
}

/*
function updateForecastBoxes(data){
  for(let i = 0; i < 4; i++){ // 4 days only

  }
}
*/

/*
function convertUnits(units) {
  try {
    switch (units) {
      case "metric":
        temperature.textContent = () + "°C";
        break;
      case "imperial":
        temperature.textContent = temp + "°C";
        break;
    }
  } catch (e) {}
}
*/
export { parseDataIntoDOM};
