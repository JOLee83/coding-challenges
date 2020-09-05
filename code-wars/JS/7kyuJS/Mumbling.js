function accum(s) {
  return s.split('').map((x, i) => x.toUpperCase() + Array(i).fill(x.toLowerCase()).join('')).join('-')
}
