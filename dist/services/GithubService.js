"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
const axios_1 = __importDefault(require("axios"));
class GithubService {
    async getUser(username) {
        const res = await axios_1.default.get(`https://api.github.com/users/${username}`);
        return res.data;
    }
}
exports.GithubService = GithubService;
