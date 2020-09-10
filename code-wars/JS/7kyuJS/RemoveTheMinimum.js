function removeSmallest(numbers) {
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return numbers.filter((x, i) => i !== index);
}
