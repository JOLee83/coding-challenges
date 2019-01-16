function encode(str, n) {
  let i = n.toString().split("").map(num => {
    return +num
  })
  return str.split("").map((letter, index) => {
    while (index >= i.length) {
      index = index - i.length
    }
    return letter.charCodeAt() - 96 + i[index]
  })
}
