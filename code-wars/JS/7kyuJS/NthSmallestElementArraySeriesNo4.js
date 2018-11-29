function nthSmallest(arr, pos) {
  let newArr = arr.sort(function (a, b) { return a - b })
  return newArr[pos - 1]
}