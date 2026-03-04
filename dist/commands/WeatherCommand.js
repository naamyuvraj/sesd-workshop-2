"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const WeatherService_1 = require("../services/WeatherService");
class WeatherCommand extends BaseCommand_1.BaseCommand {
    async execute(city) {
        const service = new WeatherService_1.WeatherService();
        const data = await service.getWeather(city);
        const temp = data.current_condition[0].temp_C;
        console.log(`Weather in ${city}: ${temp}°C`);
    }
}
exports.WeatherCommand = WeatherCommand;
