function thirt(n) {
  let divs = [1, 10, 9, 12, 3, 4]
  let test = n
  n = n.toString().split("").reverse().map((num, i) => {
    i = i >= divs.length ? i - divs.length : i
    return +num * divs[i]
  }).reduce((a, b) => a + b)
  if (test == n) {
    return n
  } else {
    return thirt(n)
  }
}