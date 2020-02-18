function toWeirdCase(string) {
  return string.split(' ').map(word => {
    return word.split('').map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }).join('');
  }).join(' ');
}