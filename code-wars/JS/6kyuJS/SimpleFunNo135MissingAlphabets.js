function missingAlphabets(s) {
  const { max, ...counts } = s.split('').reduce((a, c) => {
    a[c] = a[c] ? a[c] + 1 : 1;
    a.max = a.max < a[c] ? a[c] : a.max;

    return a;
  }, { max: 0 });

  return 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, cur) =>
    acc.concat(cur.repeat(max - (counts[cur] || 0)))
    , '');
}
