function sc(arr) {
  let max = 0;
  let counts = {};

  arr.forEach(x => x.forEach(y => {
    counts[y] = counts[y] ? ++counts[y] : 1;
    max = counts[y] > max ? counts[y] : max;
  }));

  return arr.map(y => y.filter(z => counts[z] !== max));
}
