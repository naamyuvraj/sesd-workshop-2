#!/usr/bin/env node

import { Command } from "commander";

import { GreetCommand } from "./commands/GreetCommand";
import { AddCommand } from "./commands/AddCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { GithubCommand } from "./commands/GithubCommand";

const program = new Command();

program.version("1.0.0");

program
.command("greet <name>")
.action((name) => {
    new GreetCommand().execute(name);
});

program
.command("add <num1> <num2>")
.action((a,b) => {
    new AddCommand().execute(a,b);
});

program
.command("quote")
.action(() => {
    new QuoteCommand().execute();
});

program
.command("github <username>")
.action((username) => {
    new GithubCommand().execute(username);
});



program.parse();