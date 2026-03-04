import { BaseCommand } from "./BaseCommand";

export class AddCommand extends BaseCommand {

    execute(num1: string, num2: string): void {

        const sum = parseFloat(num1) + parseFloat(num2);

        console.log(`Sum: ${sum}`);
    }

}