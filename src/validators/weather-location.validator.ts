import { BaseValidator } from "./base.validator";

export class WeatherLocationValidator extends BaseValidator{
    protected getSchemaName(): string {
        return "/weather-location.schema.json";
    }
}