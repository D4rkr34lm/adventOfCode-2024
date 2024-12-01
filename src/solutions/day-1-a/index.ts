import _ from "lodash";

function solve(data: string): string {
  const solution = _.chain(data)
    .split("\n")
    .map(line => line.split("   "))
    .filter(line => line.length == 2 && _.isString(line[0]) && _.isString(line[1]))
    .map(([left, right]) => [parseInt(left), parseInt(right)])
    .unzip()
    .map((list) => _.sortBy(list))
    .thru(([left, right]) => _.zip(left, right))
    .map(([left, right]) => Math.abs(left - right))
    .sum()
    .value()

  console.log(solution)

  return solution.toString();
}

export default solve;
