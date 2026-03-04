import { BaseCommand } from "./BaseCommand";
import { GithubService } from "../services/GithubService";

export class GithubCommand extends BaseCommand {

    async execute(username: string) {

        const service = new GithubService();

        const user = await service.getUser(username);

        console.log("Name:", user.name);
        console.log("Public Repos:", user.public_repos);
        console.log("Followers:", user.followers);

    }

}