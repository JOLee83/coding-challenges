function maxGap(numbers) {
  let gap = -Infinity;

  let arr = numbers.sort((a, b) => a - b)

  for (let i = 1; i < arr.length; i++) {
    const n = arr[i] - arr[i - 1];
    gap = n > gap ? n : gap;
  }

  return gap;
}
