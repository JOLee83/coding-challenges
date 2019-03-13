function reverseFibo(n) {
  let array = [0, 1]
  while (array.length < n) {
    array.push(array.slice(-2).reduce((a, b) => a + b))
  }
  return array.reverse().join("")
}