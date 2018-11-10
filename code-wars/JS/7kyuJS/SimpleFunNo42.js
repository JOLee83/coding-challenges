function areSimilar(A, B) {
  let x = A.reduce((total, num) => total + num)
  let y = B.reduce((total, num) => total + num)
  let count = 0
  if (x === y) {
    for (let i = 0; i < A.length; i++) {
      if (count === 3) {
        return false
      }
      if (A[i] != B[i]) {
        count++
      }
    }
  }
  if (x !== y) {
    return false
  }
  return true
}