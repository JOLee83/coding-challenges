function solution(str, ending) {
  for (let i = 1; i <= ending.length; i++) {
    if (str[str.length - i] !== ending[ending.length - i]) {
      return false
    }
  }
  return true
}