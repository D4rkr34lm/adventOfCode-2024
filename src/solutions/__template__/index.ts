import { readFile, writeFile } from "node:fs/promises";

function parseInput(input: string): any {

}

function solve(parsedInput: any): any {

}

const inputString = await readFile("./input.txt", {encoding: "utf-8"});

const parsedInput = parseInput(inputString);
const solution = solve(parsedInput);

writeFile("./output.txt", JSON.stringify(solution))
