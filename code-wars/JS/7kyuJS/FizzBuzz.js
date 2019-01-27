function fizzbuzz(n) {
  let answer = []
  let i = 1
  while (i <= n) {
    answer.push(i)
    i++
  }
  return answer.map(el => {
    if (el % 15 === 0) {
      return 'FizzBuzz'
    }
    else if (el % 3 === 0) {
      return 'Fizz'
    }
    else if (el % 5 === 0) {
      return 'Buzz'
    } else {
      return el
    }
  })
}
