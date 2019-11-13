import {Request, Response} from "express";
import {CurrentWeatherDto} from "../dtos/current-weather.dto";
import {weatherService} from "../services/weather.service";

export class WeatherController {
static async weather(req: Request, res: Response) {
    const inputData = req.body as CurrentWeatherDto;
    const currentWeather = await weatherService.currentWeather(inputData);

}
}
