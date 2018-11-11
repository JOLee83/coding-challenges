function dataReverse(data) {
  let arrays = []
  for (let i = 0; data.length > 7; i = i + 8) {
    arrays.push(data.splice(0, 8))
  }
  return arrays.reverse().reduce((a, b) => a.concat(b))
}