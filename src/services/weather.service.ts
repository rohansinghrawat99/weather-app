import { CurrentWeatherDto } from "../dtos/current-weather.dto";
import requestPromise from "request-promise";

class WeatherService {
    static getInstance(): WeatherService {
        return new WeatherService();
    }

    async getCoordinates(data: CurrentWeatherDto): Promise<any> {
        const options = {
            method: "GET",
            uri: `http://www.mapquestapi.com/geocoding/v1/address?key=vrdWt5IYhYMGfBOlEN27cACBjRIT23Ar&location=${data.city},${data.state}`
        };


        return  requestPromise(options);
    }

    async getWeather(latitude: string, longitude: string): Promise<any> {

        const options = {
            method: "GET",
            uri: `https://api.darksky.net/forecast/e5647e9b7927984c85e630a8fdc832fc/${latitude},${longitude}`
        };
       return  requestPromise(options);
    }
}
export const weatherService = WeatherService.getInstance();
