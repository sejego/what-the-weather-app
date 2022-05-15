import iconAsh from "./icons/ash.svg";
import iconClearDay from "./icons/clear-day.svg";
import iconClearNight from "./icons/clear-night.svg";
import iconClouds from "./icons/clouds.svg";
import iconDrizzle from "./icons/drizzle.svg";
import iconDustAndSand from "./icons/dust-sand.svg";
import iconHazeAndFog from "./icons/haze-fog.svg";
import iconMist from "./icons/mist.svg";
import iconRain from "./icons/rain.svg";
import iconSmoke from "./icons/smoke.svg";
import iconSnow from "./icons/snow.svg";
import iconSquallAndTornado from "./icons/squall-tornado.svg";
import iconThunderstorm from "./icons/thunderstorm.svg";

const weatherObject = {
  ash: {
    icon: iconAsh,
  },
  clear: {
    day: {
      icon: iconClearDay,
    },
    night: {
      icon: iconClearNight,
    },
  },
  clouds: {
    icon: iconClouds,
  },
  drizzle: {
    icon: iconDrizzle,
  },
  dust: {
    icon: iconDustAndSand,
  },
  sand: {
    icon: iconDustAndSand,
  },
  haze: {
    icon: iconHazeAndFog,
  },
  fog: {
    icon: iconHazeAndFog,
  },
  mist: {
    icon: iconMist,
  },
  rain: {
    icon: iconRain,
  },
  smoke: {
    icon: iconSmoke,
  },
  snow: {
    icon: iconSnow,
  },
  squall: {
    icon: iconSquallAndTornado,
  },
  tornado: {
    icon: iconSquallAndTornado,
  },
  thunderstorm: {
    icon: iconThunderstorm,
  },
};

function generateWeatherIcon(currentWeather, currentTimeOfDay = "d") {
  if (currentWeather === "Clear") {
    if (currentTimeOfDay === "d") {
      return weatherObject[currentWeather].day.icon;
    } else {
      return weatherObject[currentWeather].night.icon;
    }
  }
  return weatherObject[currentWeather].icon;
}

export { generateWeatherIcon };
