import { BaseCommand } from "./BaseCommand";
import { WeatherService } from "../services/WeatherService";

export class WeatherCommand extends BaseCommand {

    async execute(city: string) {

        const service = new WeatherService();

        const location = await service.getCoordinates(city);
        const weather = await service.getWeather(location.latitude, location.longitude);

        console.log(`Weather for ${location.name}, ${location.country}:`);
        console.log(`  Temperature: ${weather.temperature}°C`);
        console.log(`  Wind Speed:  ${weather.windspeed} km/h`);
        console.log(`  Wind Dir:    ${weather.winddirection}°`);

    }

}
