function nbYear(p0, percent, aug, p) {
  let yr = 0;
  while (p0 < p) {
    p0 = p0 * (1 + percent / 100) + aug
    yr++
  }
  return yr
}