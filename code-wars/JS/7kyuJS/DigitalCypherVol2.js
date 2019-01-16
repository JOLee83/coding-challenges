function decode(code, n) {
  let i = n.toString().split("").map(num => {
    return +num
  })
  return code.map((n, index) => {
    while (index >= i.length) {
      index = index - i.length
    }
    return String.fromCharCode(n + 96 - i[index])
  }).join("")
}


