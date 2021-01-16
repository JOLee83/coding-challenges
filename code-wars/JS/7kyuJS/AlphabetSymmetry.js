function solve(arr) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  return arr.map(x => {
    return [...x.toLowerCase()].reduce((a, c, i) => {
      if (c === alpha[i]) {
        return a + 1;
      }

      return a;
    }, 0)
  });
};
