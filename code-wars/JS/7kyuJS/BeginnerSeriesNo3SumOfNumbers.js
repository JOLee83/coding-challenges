function GetSum(a, b) {
  let total = 0
  if (a < b) {
    for (let i = a; i <= b; i++) {
      total += i
    }
  } else {
    for (let i = b; i <= a; i++) {
      total += i
    }
  }
  return total
}