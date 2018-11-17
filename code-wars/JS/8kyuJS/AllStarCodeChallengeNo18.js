function strCount(str, letter) {
  let count = 0
  str.split('').map(l => {
    l === letter ? count++ : count
  })
  return count
}