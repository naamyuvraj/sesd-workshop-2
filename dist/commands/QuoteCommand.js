"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
const QuoteService_1 = require("../services/QuoteService");
class QuoteCommand extends BaseCommand_1.BaseCommand {
    async execute() {
        const service = new QuoteService_1.QuoteService();
        const quote = await service.getQuote();
        console.log(`${quote.content} — ${quote.author}`);
    }
}
exports.QuoteCommand = QuoteCommand;
