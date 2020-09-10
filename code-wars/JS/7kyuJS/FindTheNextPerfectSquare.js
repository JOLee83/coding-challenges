function findNextSquare(sq) {
  const n = Math.sqrt(sq);

  if (n % 1 !== 0) {
    return -1;
  }

  return Math.pow(n + 1, 2);
}
