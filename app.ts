import express from 'express';
import { WeatherController } from "./src/controllers/weather.controller";
import { errorHandler } from "./src/handlers/error-handler";

const app = express();

app.use(express.json());

const port = 3000;


//ROUTES
app.post('/', errorHandler(WeatherController.weather));




app.listen(port, err => {
    if(err) {
        return console.error(err);
    }
    return console.log(`server is running on port ${port}`);
})
