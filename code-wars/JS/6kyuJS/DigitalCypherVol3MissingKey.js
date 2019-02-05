function findTheKey(str, code) {
  let answer = [];
  str.split("").map((letter, index) => {
    answer.push(-(letter.charCodeAt() - (96 + code[index])))
  })
  str = answer.join("")
  for (let i = 0; i <= str.length; i++) {
    let test = new Array(str.length).fill(str.slice(0, i)).join("").slice(0, str.length)
    if (test === str) {
      return +str.slice(0, i)
    }
  }
}