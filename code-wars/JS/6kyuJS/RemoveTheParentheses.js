function removeParentheses(s) {
  let skip = 0;
  let str = '';

  for (const char of s) {
    if (char === '(') {
      skip++;
    } else if (char === ')') {
      skip--;
    } else if (!skip) {
      str += char;
    }
  }

  return str;
}
