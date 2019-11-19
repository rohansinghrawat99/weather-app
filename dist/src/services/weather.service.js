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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
class WeatherService {
    static getInstance() {
        return new WeatherService();
    }
    getCoordinates(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: "GET",
                uri: `http://www.mapquestapi.com/geocoding/v1/address?key=vrdWt5IYhYMGfBOlEN27cACBjRIT23Ar&location=${data.city},${data.state}`
            };
            return request_promise_1.default(options);
        });
    }
    getWeather(latitude, longitude) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: "GET",
                uri: `https://api.darksky.net/forecast/e5647e9b7927984c85e630a8fdc832fc/${latitude},${longitude}`
            };
            return request_promise_1.default(options);
        });
    }
}
exports.weatherService = WeatherService.getInstance();
//# sourceMappingURL=weather.service.js.map