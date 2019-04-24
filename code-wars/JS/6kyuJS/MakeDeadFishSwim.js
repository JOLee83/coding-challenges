function parse(data) {
  let answer = []
  let i = 0
  data.split("").map(el => {
    if (el === "i") { i++ }
    if (el === "d") { i-- }
    if (el === "s") { i = i * i }
    if (el === "o") { answer.push(i) }
  })
  return answer
}