function findEvenIndex(arr) {
  let i = 0;
  let l = arr.length - 1;
  let equal = false;
  while (equal === false) {
    if (i > l) {
      i = -1;
      equal = true;
    } else {
      const left = i === 0 ? 0 : arr.slice(0, i).reduce((a, c) => a + c);
      const right = i + 1 > l ? 0 : arr.slice(i + 1).reduce((a, c) => a + c);
      if (left == right) {
        equal = true;
      } else {
        i++;
      }
    }
  }
  return i;
}