function productArray(numbers) {
  const product = numbers.reduce((a, c) => a * c, 1);

  return numbers.map(x => product / x);
}
