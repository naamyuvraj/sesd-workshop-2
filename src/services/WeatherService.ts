import axios from "axios";

export class WeatherService {

    async getCoordinates(city: string) {

        const res = await axios.get("https://geocoding-api.open-meteo.com/v1/search", {
            params: { name: city, count: 1 }
        });

        if (!res.data.results || res.data.results.length === 0) {
            throw new Error(`City "${city}" not found.`);
        }

        const location = res.data.results[0];
        return {
            latitude: location.latitude,
            longitude: location.longitude,
            name: location.name,
            country: location.country
        };
    }

    async getWeather(latitude: number, longitude: number) {

        const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
            params: {
                latitude,
                longitude,
                current_weather: true
            }
        });

        return res.data.current_weather;
    }

}
