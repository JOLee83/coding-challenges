function calculateYears(p, r, tx, a) {
  let t = 0;

  while (p < a) {
    p += ((p * r) * (1 - tx));
    t++
  }

  return t;
}
