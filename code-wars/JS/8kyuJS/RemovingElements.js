function removeEveryOther(arr) {
  let answer = []
  arr.map((e, i) => {
    if (i % 2 === 0) {
      answer.push(e)
    }
  })
  return answer
}