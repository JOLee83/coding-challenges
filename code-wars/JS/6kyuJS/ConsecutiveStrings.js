function longestConsec(strarr, k) {
  let str = '';

  if (k <= 0) {
    return str;
  }

  for (let i = 0; i + k <= strarr.length; i++) {
    const string = strarr.slice(i, i + k).join('');

    if (string.length > str.length) {
      str = string;
    }
  }

  return str;
}