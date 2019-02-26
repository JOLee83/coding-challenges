function solution(number) {
  let three = 0;
  let five = 0;
  let both = 0;
  number--
  while (number > 0) {
    if (number % 15 === 0) {
      both++
      number--
    }
    if (number % 5 === 0) {
      five++
      number--
    }
    if (number % 3 === 0) {
      three++
      number--
    } else {
      number--
    }
  }
  return [three, five, both]
}