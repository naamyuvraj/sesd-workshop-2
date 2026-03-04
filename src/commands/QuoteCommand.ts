import { BaseCommand } from "./BaseCommand";
import { QuoteService } from "../services/QuoteService";

export class QuoteCommand extends BaseCommand {

    async execute() {

        const service = new QuoteService();

        const quote = await service.getQuote();

        console.log(`${quote.content} — ${quote.author}`);

    }

}