import iconAsh from "../icons/ash.svg";
import iconClearDay from "../icons/clear-day.svg";
import iconClearNight from "../icons/clear-night.svg";
import iconClouds from "../icons/clouds.svg";
import iconDrizzle from "../icons/drizzle.svg";
import iconDustAndSand from "../icons/dust-sand.svg";
import iconHazeAndFog from "../icons/haze-fog.svg";
import iconMist from "../icons/mist.svg";
import iconRain from "../icons/rain.svg";
import iconSmoke from "../icons/smoke.svg";
import iconSnow from "../icons/snow.svg";
import iconSquallAndTornado from "../icons/squall-tornado.svg";
import iconThunderstorm from "../icons/thunderstorm.svg";

const weatherObject = {
  Ash: {
    icon: iconAsh,
  },
  Clear: {
    day: {
      icon: iconClearDay,
    },
    night: {
      icon: iconClearNight,
    },
  },
  Clouds: {
    icon: iconClouds,
  },
  Drizzle: {
    icon: iconDrizzle,
  },
  Dust: {
    icon: iconDustAndSand,
  },
  Sand: {
    icon: iconDustAndSand,
  },
  Haze: {
    icon: iconHazeAndFog,
  },
  Fog: {
    icon: iconHazeAndFog,
  },
  Mist: {
    icon: iconMist,
  },
  Rain: {
    icon: iconRain,
  },
  Smoke: {
    icon: iconSmoke,
  },
  Snow: {
    icon: iconSnow,
  },
  Squall: {
    icon: iconSquallAndTornado,
  },
  Tornado: {
    icon: iconSquallAndTornado,
  },
  Thunderstorm: {
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
