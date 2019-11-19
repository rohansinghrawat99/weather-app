"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const weather_controller_1 = require("./src/controllers/weather.controller");
const error_handler_1 = require("./src/handlers/error-handler");
const app = express_1.default();
app.use(express_1.default.json());
const port = 3000;
//ROUTES
app.post('/', error_handler_1.errorHandler(weather_controller_1.WeatherController.weather));
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is running on port ${port}`);
});
//# sourceMappingURL=app.js.map