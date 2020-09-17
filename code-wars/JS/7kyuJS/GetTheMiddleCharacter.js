function getMiddle(s) {
  const i = s.length / 2;

  return s.length % 2 === 0 ? s[i - 1] + s[i] : s[Math.floor(i)];
}
