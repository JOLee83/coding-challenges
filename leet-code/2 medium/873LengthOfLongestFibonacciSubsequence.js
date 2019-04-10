var lenLongestFibSubseq = function (A) {
  let longest = 0;
  let count = 2;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      let [a, b] = [A[i], A[j]]
      while (A.includes(a + b)) {
        [a, b] = [b, a + b]
        count++
      }
      if (count > 2 && count > longest) {
        longest = count
      }
      count = 2
    }
  }
  return longest
}