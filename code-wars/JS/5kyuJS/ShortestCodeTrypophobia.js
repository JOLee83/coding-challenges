sc = (a) => {
  let m = 0, c = {};
  a.forEach(x => x.forEach(y => {
    c[y] = c[y] ? ++c[y] : 1;
    m = c[y] > m ? c[y] : m;
  }));
  return a.map(y => y.filter(z => c[z] !== m));
}
