"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherService = void 0;
const axios_1 = __importDefault(require("axios"));
class WeatherService {
    async getWeather(city) {
        const res = await axios_1.default.get(`https://wttr.in/${city}?format=j1`);
        return res.data;
    }
}
exports.WeatherService = WeatherService;
