function stringMerge(string1, string2, letter) {
  let x = string1.indexOf(letter)
  let a = string2.indexOf(letter)
  let y = string1.slice(0, x)
  let b = string2.slice(a, string2.length)
  return y + b
}