import { BaseCommand } from "./BaseCommand";
import { JokeService } from "../services/JokeService";

export class JokeCommand extends BaseCommand {

    async execute() {

        const service = new JokeService();

        const joke = await service.getRandomJoke();

        console.log(`[${joke.type}]`);
        console.log(`${joke.setup}`);
        console.log(`${joke.punchline}`);

    }

}
