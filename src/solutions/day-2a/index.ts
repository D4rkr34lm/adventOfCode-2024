import _ from "lodash";
import { slideDualWindow } from "../../utils/slidingWindows";

function solve(data: string): string {
  const solution = _.chain(data)
    .split("\n")
    .map(report => report.split(" ").map(n => parseInt(n)))
    .filter((report) => !_.isEqual(report, [NaN]))
    .map(report => {
      console.log(report)
      const [first, second] = _.take(report, 2)

      const isDescending = first > second;
      const comparator = (a: number, b: number) => isDescending ? a > b : a < b;

      let isStable = true;

      slideDualWindow(report, ([ a, b ]) => {
        if(!comparator(a,b) || Math.abs(a - b) > 3){
          isStable = false;
        }
      })

      return isStable;
    })
    .filter((isSafe) => isSafe === true)
    .value()
    .length;

    console.log(solution)

    return solution.toString()
}

export default solve;
