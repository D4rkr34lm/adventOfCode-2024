export function slideDualWindow<T>(arr: T[], callback: (param: [a: T, b: T]) => void) {
  for(let i = 0; i < arr.length - 1; i++){
    callback([arr[i], arr[i + 1]])
  }
}
