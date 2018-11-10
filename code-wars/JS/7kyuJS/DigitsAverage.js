function digitsAverage(input) {
  if (input < 10) {
    return input
  }
  while (input > 9) {
    input = input.toString()
    let array = [];
    for (let i = 0; i < input.length - 1; i++) {
      array.push(Math.ceil((+input[i] + +input[i + 1]) / 2))
    }
    input = +(array.join(''))
    if (input < 10) {
      return input
    }
  }
}