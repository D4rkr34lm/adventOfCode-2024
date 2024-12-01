import { readFile, writeFile } from "node:fs/promises";

const solutionToPick = process.argv[2];

const input = await readFile(`./src/solutions/${solutionToPick}/input.txt`, {encoding: "utf-8"})
const solver = await import(`./solutions/${solutionToPick}/index.js`)
const solution = solver.default(input);
await writeFile(`./src/solutions/${solutionToPick}/output.txt`, solution)

