import _ from "lodash";

const instructionRegex = new RegExp(/(mul\(\d{1,3},\d{1,3}\))|(do\(\))|(don't\(\))/, "g")
const multiplyInstructionRegex = /mul\(\d{1,3},\d{1,3}\)/
const doInstructionRegex  = /do\(\)/

type Instruction = {
  type: "mult";
  result: number
} | {
  type: "bool";
  bool: boolean;
}

function compileInstruction(text: string): Instruction {
  if(multiplyInstructionRegex.test(text)) {
    const cleanedText = text.replace("mul(", "").replace(")", "")
    const [l, r] = cleanedText.split(",");
    const multiplicationResult = parseInt(l) * parseInt(r);

    return {type: "mult", result: multiplicationResult}
  }
  else {
    const bool = doInstructionRegex.test(text);

    return {
      type: "bool",
      bool,
    }
  }
}

function solve(input: string): string {
  const instructions = [...input.matchAll(instructionRegex)]
    .map(([occurrence]) => occurrence);

  const result = _.chain(instructions)
    .map(compileInstruction)
    .reduce((acc, instruction) => {
      if(instruction.type === "bool") {
        acc.do = instruction.bool;
      }
      else if(acc.do){
        acc.sum += instruction.result;
      }
      return acc
    }, {do: true, sum: 0})
    .thru(acc => acc.sum)
    .value();

    console.log(result);
    return result.toString();
}

export default solve;
