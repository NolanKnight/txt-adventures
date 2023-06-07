#! /usr/bin/env node

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

//add the following line
const program = new Command();

console.log(figlet.textSync("Game", {font: "Epic"}));
console.log("______________________________________________________________________________________________________________________________________________");

program
    .version("1.0.0")
    .description("My CLI")
    .option("-p, --pirate", "Pirate Adventure Game")
    .parse(process.argv);

const options = program.opts();

if (options.pirate) {
    console.log(figlet.textSync("\nPirate\nAdventure!", {font: "Epic"}));
}