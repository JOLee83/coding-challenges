function scoobydoo(villain, villains) {
  const a = 'abcdefghijklmnopqrstuvwxyz';
  const b = 'fghijklmnopqrstuvwxyzabcde';

  const str = villain.substr(-5)
    .concat(villain.substr(0, villain.length - 5))
    .toLowerCase()
    .split('')
    .reverse()
    .map((x, i) => {
      return i % 2 !== 0 ? b[a.indexOf(x)] : x;
    }).join('');

  return villains.find(x => x.toLowerCase().replace(' ', '') === str);
}