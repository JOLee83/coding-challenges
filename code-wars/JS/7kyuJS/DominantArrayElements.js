function solve(array) {
  return array.reduce((a, c, i, arr) => {
    let compare = arr.slice(i + 1).filter(x => x >= c);

    if (compare.length === 0) {
      a.push(c);
    }

    return a;
  }, []);
};
