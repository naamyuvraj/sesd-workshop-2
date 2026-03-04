"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const BaseCommand_1 = require("./BaseCommand");
class GreetCommand extends BaseCommand_1.BaseCommand {
    execute(name) {
        console.log(`Hello, ${name}!`);
    }
}
exports.GreetCommand = GreetCommand;
