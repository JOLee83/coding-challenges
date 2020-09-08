function wordValue(a) {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';

  return a.map((x, i) =>
    x.split('').reduce((acc, cur) =>
      acc + alphabet.indexOf(cur)
      , 0) * (i + 1)
  );
}
