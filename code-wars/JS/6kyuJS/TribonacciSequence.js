function tribonacci(sig, n) {
  if (n === 0) {
    return []
  }
  if (n < 3) {
    return sig.slice(0, n)
  } else {
    while (sig.length < n) {
      sig.push(sig.slice(-3).reduce((a, b) => a + b))
    }
    return sig
  }
}