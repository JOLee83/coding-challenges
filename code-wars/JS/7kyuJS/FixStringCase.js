function solve(s) {
  let isLower = 0;
  const len = s.length / 2;

  for (const letter of s) {
    isLower = letter === letter.toLowerCase() ? ++isLower : isLower;
  }

  return isLower >= len ? s.toLowerCase() : s.toUpperCase();
}
