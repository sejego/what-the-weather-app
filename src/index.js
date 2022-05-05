import {WeatherDataFetcher} from './WeatherDataFetcher';

let fetcher = new WeatherDataFetcher();

// top level await doesn't seem to work...
fetcher.getWeatherByLocation("Tallinn").then(data => {
  console.log(data);
  let temp = data['main']['temp'];
  console.log(temp);
});
