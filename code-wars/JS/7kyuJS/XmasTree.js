function xMasTree(n) {
  let arr = [];
  let str1 = '#';
  let str2 = '_'.repeat(n - 1);
  let i = 0;

  while (i < n + 2) {
    if (i < n) {
      arr.push(str2 + str1 + str2);

      str1 += '##';
      str2 = str2.substr(1);
    } else {
      str1 = '#';
      str2 = '_'.repeat(n - 1);

      arr.push(str2 + str1 + str2);
    }

    i++;
  }

  return arr;
}
