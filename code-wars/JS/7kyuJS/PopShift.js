function popShift(s) {
  let popArray = []
  let shiftArray = []
  let answerArray = []
  let sArray = s.split('')
  while (sArray.length > 1) {
    popArray.push(sArray.pop())
    shiftArray.push(sArray.shift())
  }
  answerArray.push(popArray.join(''))
  answerArray.push(shiftArray.join(''))
  answerArray.push(sArray.join(''))
  return answerArray
}