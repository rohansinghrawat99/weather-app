"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const weather_service_1 = require("../services/weather.service");
const unprocessable_entity_exception_1 = require("../exceptions/root/unprocessable-entity.exception");
const weather_location_validator_1 = require("../validators/weather-location.validator");
class WeatherController {
    static weather(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inputData = req.body;
            try {
                yield (new weather_location_validator_1.WeatherLocationValidator().validate(inputData));
            }
            catch (e) {
                throw new unprocessable_entity_exception_1.UnprocessableEntityException(e);
            }
            const coordinates = JSON.parse((yield weather_service_1.weatherService.getCoordinates(inputData)) || {});
            const weather = JSON.parse((yield weather_service_1.weatherService.getWeather(coordinates.results[0].locations[0].latLng.lat, coordinates.results[0].locations[0].latLng.lng)) || {});
            return res.json({
                temperature: weather.currently.temperature
            });
        });
    }
}
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map