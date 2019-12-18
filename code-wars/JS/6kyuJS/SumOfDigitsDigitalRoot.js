function digital_root(n) {
  while (n > 10) {
    n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0)
  }
  return n
}