let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let city = document.getElementById("city");
let feelsLike = document.getElementById("feels-like");

function parseDataIntoDOM(data) {
  temperature.textContent = Math.round(data["main"]["temp"]) + "°C";
  humidity.textContent = data["main"]["humidity"] + "%";
  pressure.textContent = data["main"]["pressure"];
  city.textContent = data["name"];
  feelsLike.textContent = data["main"]["feels_like"];
}

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
