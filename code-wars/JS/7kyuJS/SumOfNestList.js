const sumNested = (arr) => {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i]
    } else if (arr[i] instanceof Array) {
      total += sumNested(arr[i])
    }
  }
  return total
};