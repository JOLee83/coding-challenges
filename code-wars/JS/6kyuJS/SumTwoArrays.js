function addArrays(array1, array2) {
  if (!array1.length || !array2.length) {
    return !array1.length ? array2 : array1;
  }

  let int = parseInt(array1.join('')) + parseInt(array2.join(''));
  let arr = [...Math.abs(int).toString()];

  return arr.map((x, i) => int < 0 && i === 0 ? -x : +x);
}
