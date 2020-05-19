function capitalize(s) {
  let str1 = '';
  let str2 = '';

  for (const i in s) {
    str1 += i % 2 === 0 ? s[i].toUpperCase() : s[i];
    str2 += i % 2 === 0 ? s[i] : s[i].toUpperCase();
  }

  return [str1, str2];
};