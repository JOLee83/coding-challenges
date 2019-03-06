function solution(str, ending) {
  let answer = true
  for (let i = 1; i <= ending.length; i++) {
    if (str[str.length - i] !== ending[ending.length - i]) {
      answer = false
    }
  }
  return answer
}