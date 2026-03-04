#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const GreetCommand_1 = require("./commands/GreetCommand");
const AddCommand_1 = require("./commands/AddCommand");
const QuoteCommand_1 = require("./commands/QuoteCommand");
const GithubCommand_1 = require("./commands/GithubCommand");
const program = new commander_1.Command();
program.version("1.0.0");
program
    .command("greet <name>")
    .action((name) => {
    new GreetCommand_1.GreetCommand().execute(name);
});
program
    .command("add <num1> <num2>")
    .action((a, b) => {
    new AddCommand_1.AddCommand().execute(a, b);
});
program
    .command("quote")
    .action(() => {
    new QuoteCommand_1.QuoteCommand().execute();
});
program
    .command("github <username>")
    .action((username) => {
    new GithubCommand_1.GithubCommand().execute(username);
});
program.parse();
