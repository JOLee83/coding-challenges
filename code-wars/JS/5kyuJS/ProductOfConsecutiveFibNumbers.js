function productFib(prod) {
  let seq = [0, 1]
  let match = false
  let one = seq.slice(-2, -1)
  let two = seq.slice(-1)
  let test = one * two
  while (test < prod) {
    seq.push(seq.slice(-2).reduce((a, b) => {
      return a + b
    }))
    one = seq.slice(-2, -1)
    two = seq.slice(-1)
    test = one * two
    if (test === prod) {
      match = true
    }
  }
  return [+one.join(""), +two.join(""), match]
}