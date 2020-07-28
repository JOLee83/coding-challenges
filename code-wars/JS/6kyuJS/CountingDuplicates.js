function duplicateCount(text) {
  const length = text.length;

  const unique = [...new Set(text.toLowerCase().split(''))]

  if (unique.length === length) {
    return 0;
  }

  let count = 0;
  const lowerText = text.toLowerCase().split('');

  unique.forEach(x => {
    const filtered = lowerText.filter(y => y !== x);
    if (filtered.length < length - 1) {
      count++
    }
  });

  return count;
}
