"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const GithubService_1 = require("../services/GithubService");
class GithubCommand extends BaseCommand_1.BaseCommand {
    async execute(username) {
        const service = new GithubService_1.GithubService();
        const user = await service.getUser(username);
        console.log("Name:", user.name);
        console.log("Public Repos:", user.public_repos);
        console.log("Followers:", user.followers);
    }
}
exports.GithubCommand = GithubCommand;
