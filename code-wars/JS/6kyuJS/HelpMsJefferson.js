function shortestArrang(n) {
  let array = [1]
  let i = 2
  let answer
  while (i < n) {
    if (array.reduce((a, b) => a + b) > n) {
      array.pop()
    }
    if (array.reduce((a, b) => a + b) < n) {
      array.unshift(i)
      i++
    }
    if (array.reduce((a, b) => a + b) === n) {
      if (answer == null) {
        answer = array.slice(0)
      }
      if (array.length < answer.length) {
        answer = array.slice(0)
      }
      array.pop()
    }
  }
  if (answer != null) {
    return answer
  } else {
    return [-1]
  }
};