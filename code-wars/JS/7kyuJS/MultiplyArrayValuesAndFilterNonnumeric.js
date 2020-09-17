function multiplyAndFilter(array, m) {
  return array.reduce((a, c) => typeof c === 'number' ? a.concat(c * m) : a, []);
}
