function spinWords(str) {
  return str.split(" ").map(el => {
    return el.length >= 5 ? el.split("").reverse().join("") : el
  }).join(" ")
}