import { BaseCommand } from "./BaseCommand";

export class GreetCommand extends BaseCommand {

    execute(name: string): void {
        console.log(`Hello, ${name}!`);
    }

}