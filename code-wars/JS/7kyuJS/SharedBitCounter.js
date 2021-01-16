function sharedBits(a, b) {
  const c = [...a.toString(2)].reverse();
  const d = [...b.toString(2)].reverse();
  let count = 0;

  for (const i in c) {
    if (c[i] === '1' && d[i] === '1') {
      ++count;
    }

    if (count > 1) {
      return true;
    }
  }

  return false;
}
