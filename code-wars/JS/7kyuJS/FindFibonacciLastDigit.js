function getLastDigit(index) {
  let [a, b] = [0, 1]
  let count = 1
  while (count < index) {
    [a, b] = [b, +(a + b).toString().slice(-1)]
    count++
  }
  return b
}