"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class AddCommand extends BaseCommand_1.BaseCommand {
    execute(num1, num2) {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log(`Sum: ${sum}`);
    }
}
exports.AddCommand = AddCommand;
