function rank(st, we, n) {
  if (st === "") return "No participants"
  if (we.length < n) return "Not enough participants"
  let names = st.split(",")
  let scores = []
  for (let i = 0; i < names.length; i++) {
    let score = names[i].length
    names[i].toUpperCase().split("").map((letter, index) => {
      score += letter.charCodeAt(0) - 64
    })
    scores.push({ name: names[i], score: score * we[i] })
  }
  let sorted = scores.sort((a, b) => {
    if (a.score === b.score) {
      return a.name.localeCompare(b.name)
    } else {
      return b.score - a.score
    }
  })
  return sorted[n - 1].name
}