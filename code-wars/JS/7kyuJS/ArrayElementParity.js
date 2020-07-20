function solve(arr) {
  return [...new Set(arr)].reduce((a, c) => a + c);
};