import {generateAPIKey} from './apiKey';

class WeatherDataFetcher {

  constructor() {
    this.key = generateAPIKey();
    this.units = 'metric'
  }

  toggleUnits(type) {
    this.units = type;
  }

  async getWeatherByLocation(location = 'Los Angeles') {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${this.units}&appid=${this.key}`;
    try {
      const response = await fetch(url, {mode: 'cors'});
      
      if(response.status == 200) {
        const json = await response.json();
        return json;
      } else {
        throw new Error(`Invalid query - ${response.message}`);
      }
    } catch (error) {
      return error;
    }
  }

}

export { WeatherDataFetcher }