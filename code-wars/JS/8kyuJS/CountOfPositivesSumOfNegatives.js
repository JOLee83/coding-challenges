function countPositivesSumNegatives(input) {
  let sum = 0
  let count = 0
  console.log(input)
  if (!Array.isArray(input) || !input.length) {
    return []
  } else {
    input.map(x => {
      if (x < 0) {
        sum += x

      }
      if (x > 0) {
        count++
      }
    });
    return [count, sum]
  }
}