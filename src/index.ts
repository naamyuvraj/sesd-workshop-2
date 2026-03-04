#!/usr/bin/env node

import { Command } from "commander";

import { GreetCommand } from "./commands/GreetCommand";
import { AddCommand } from "./commands/AddCommand";
import { QuoteCommand } from "./commands/QuoteCommand";
import { GithubCommand } from "./commands/GithubCommand";
import { WeatherCommand } from "./commands/WeatherCommand";
import { JokeCommand } from "./commands/JokeCommand";
import { DictionaryCommand } from "./commands/DictionaryCommand";
import { CountryCommand } from "./commands/CountryCommand";
import { NumberFactCommand } from "./commands/NumberFactCommand";
import { GithubReposCommand } from "./commands/GithubReposCommand";
import { IpInfoCommand } from "./commands/IpInfoCommand";

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

program
.command("weather <city>")
.description("Get current weather for a city")
.action((city) => {
    new WeatherCommand().execute(city);
});

program
.command("joke")
.description("Get a random joke")
.action(() => {
    new JokeCommand().execute();
});

program
.command("define <word>")
.description("Look up the definition of a word")
.action((word) => {
    new DictionaryCommand().execute(word);
});

program
.command("country <name>")
.description("Get information about a country")
.action((name) => {
    new CountryCommand().execute(name);
});

program
.command("numfact <number>")
.description("Get a fun fact about a number")
.action((number) => {
    new NumberFactCommand().execute(number);
});

program
.command("repos <username>")
.description("List GitHub repos for a user")
.action((username) => {
    new GithubReposCommand().execute(username);
});

program
.command("ipinfo")
.description("Get your public IP geolocation info")
.action(() => {
    new IpInfoCommand().execute();
});

program.parse();