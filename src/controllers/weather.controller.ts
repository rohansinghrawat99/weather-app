import {Request, Response} from "express";
import {CurrentWeatherDto} from "../dtos/current-weather.dto";
import { weatherService } from "../services/weather.service";
import { UnprocessableEntityException } from "../exceptions/root/unprocessable-entity.exception";
import { WeatherLocationValidator } from "../validators/weather-location.validator";

export class WeatherController {
static async weather(req: Request, res: Response) {
    const inputData = req.body as CurrentWeatherDto;

    try {
        await (new WeatherLocationValidator().validate(inputData));
    } catch (e) {
        throw new UnprocessableEntityException(e);
    }

    const coordinates = JSON.parse(await weatherService.getCoordinates(inputData) || {});

    const weather = JSON.parse(await weatherService.getWeather(coordinates.results[0].locations[0].latLng.lat,coordinates.results[0].locations[0].latLng.lng) || {});

    return res.json({
        temperature: weather.currently.temperature
    });
}
}
