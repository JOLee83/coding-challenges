function narcissistic(value) {
  let num = 0
  let array = value.toString().split('').map(el => {
    return parseInt(el)
  })
  for (let i = 0; i < array.length; i++) {
    num += Math.pow(array[i], array.length)
  }
  return num === value
}