function replicate(t, n) {
  return t > 0 ? [n].concat(replicate(t - 1, n)) : [];
}