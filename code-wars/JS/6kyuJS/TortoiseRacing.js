function race(v1, v2, g) {
  if (v1 > v2) {
    return null;
  }

  const a = g,
    b = v2 - v1,
    h = Math.floor(a / b),
    m = Math.floor((a / b * 60) % 60),
    s = Math.floor((a / b * 3600) % 60);

  return [h, m, s];
}
