function reverseFizzBuzz(s) {
  let high = 0;
  let mod = 0;
  s = s.split(" ")
  if (s.length === 1) {
    if (s[0] === "FizzBuzz") {
      return [15]
    }
    if (s[0] === "Buzz") {
      return [5]
    }
    if (s[0] === "Fizz") {
      return [3]
    }
  }
  if (s.length === 2) {
    if (s[0] === "Fizz" && s[1] === "Buzz") {
      return [9, 10]
    }
    if (s[0] === "Buzz" && s[1] === "Fizz") {
      return [5, 6]
    }
  }
  s = s.map((n, i) => {
    if (!isNaN(n)) {
      if (parseInt(n) > high) {
        high = parseInt(n)
        mod = i
      }
      return parseInt(n)
    } else {
      return n
    }
  }).map(n => {
    n = high - mod
    mod--
    return n
  })
  return s
}