import { BaseCommand } from "./BaseCommand";
import { GithubService } from "../services/GithubService";

export class GithubReposCommand extends BaseCommand {

    async execute(username: string) {

        const service = new GithubService();

        const repos = await service.getRepos(username);

        console.log(`Public repositories for ${username}:\n`);

        if (repos.length === 0) {
            console.log("No public repositories found.");
            return;
        }

        for (const repo of repos.slice(0, 10)) {
            console.log(`  ${repo.name}`);
            console.log(`    ${repo.description || "No description"}`);
            console.log(`    Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count} | Language: ${repo.language || "N/A"}`);
            console.log();
        }

    }

}
