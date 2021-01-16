const keys = { 1: 'st', 2: 'nd', 3: 'rd' };

function whatCentury(year) {
  const num = Math.ceil((year - 1) / 100);
  const key = keys[num % 10] && (num < 4 || num > 20) ? keys[num % 10] : 'th';

  return num + key;
}
