function solve(arr) {
  let rv = 0
  let sa = arr.sort((a, b) => a - b);

  for (let i of sa) {
    if (i > rv + 1) {
      break
    } else {
      rv += i
    }
  }

  return rv + 1
}
