import _ from "lodash";

const multiplyInstructionRegex = new RegExp(/mul\(\d{1,3},\d{1,3}\)/, "g")

function solve(data: string): string {
  const instructionResults = [...data.matchAll(multiplyInstructionRegex)]
    .map(([occurrence]) => occurrence)
    .map((instruction) => instruction.replace("mul(", ""))
    .map((instruction) => instruction.replace(")", ""))
    .map((instruction) => instruction.split(","))
    .map(([l, r]) => [parseInt(l), parseInt(r)])
    .map(([l, r]) => l * r)

  const sum = _.sum(instructionResults);

  console.log(sum);
  return sum.toString();
}

export default solve;
