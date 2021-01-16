const getLCD = (arr) => {
  let candidate = Math.max(...arr);
  while (true) {
    if (arr.every(x => (candidate / x) % 1 === 0)) {
      return candidate;
    }
    candidate++;
  }
}

function convertFrac(lst) {
  const lcd = getLCD(lst.map(x => x[1]));

  return lst.map(x => `(${x[0] * (lcd / x[1])},${lcd})`).join('');
}
