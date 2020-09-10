function stray(numbers) {
  return numbers.find(x => numbers.indexOf(x) === numbers.lastIndexOf(x));
}
