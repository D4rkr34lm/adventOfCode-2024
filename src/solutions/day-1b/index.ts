import _ from "lodash";

function solve(data: string): string {
  const [leftList, rightList] = _.chain(data)
    .split("\n")
    .map(line => line.split("   "))
    .filter(line => line.length == 2 && _.isString(line[0]) && _.isString(line[1]))
    .map(([left, right]) => [parseInt(left), parseInt(right)])
    .unzip()
    .value()

  const occurrenceCounts = _.chain(rightList)
    .groupBy(value => value)
    .mapValues(occurrences => occurrences.length)
    .value()

  const solution = _.chain(leftList)
    .map(value => value * (occurrenceCounts[value.toString()] ?? 0))
    .sum()
    .value()

  console.log(solution);
  return solution.toString();
}

export default solve;
