function solve(str, idx) {
  if (str[idx] !== '(') return -1;

  let isOpen = 0;

  for (let i = idx; i < str.length; i++) {
    if (str[i] === '(') ++isOpen;
    if (str[i] === ')') --isOpen;
    if (!isOpen) return i;
  }
}
