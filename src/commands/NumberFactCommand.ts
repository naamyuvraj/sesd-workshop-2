import { BaseCommand } from "./BaseCommand";
import { NumberFactService } from "../services/NumberFactService";

export class NumberFactCommand extends BaseCommand {

    async execute(number: string) {

        const service = new NumberFactService();

        const num = parseInt(number, 10);

        if (isNaN(num)) {
            console.log("Please provide a valid number.");
            return;
        }

        const fact = await service.getFact(num);

        console.log(fact);

    }

}
