import {CurrentWeatherDto} from "../dtos/current-weather.dto";

class WeatherService {
    static getInstance(): WeatherService {
        return new WeatherService();
    }

    async currentWeather(data: CurrentWeatherDto) {
        const url = 'https://api.darksky.net/forecast/e5647e9b7927984c85e630a8fdc832fc/37.8267,-122.4233';


    }
}

export const weatherService = WeatherService.getInstance();
