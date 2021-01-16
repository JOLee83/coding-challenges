multiplicationTable = function (size) {
  let arr = Array.from({ length: size }, (_, i) => i + 1);
  let arrays = [arr];
  let count = 2;

  while (count <= size) {
    arr = arr.map((x, i) => x + i + 1);
    arrays.push(arr);
    count++
  }
  return arrays
}
