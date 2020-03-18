function driver(data) {
  const birth = data[3].split('-');
  const date = new Date(birth[1] + " " + birth[0] + ' ' + birth[2]);

  const last = data[2].toUpperCase().slice(0, 5).padEnd(5, '9');
  const decade = birth[2].slice(-2, -1);
  const month = data[4] === 'F' ? date.getMonth() + 51 : (date.getMonth() + 1).toString().padStart(2, '0');
  const day = birth[0];
  const year = birth[2].slice(-1);
  const first = data[0][0] || '9';
  const middle = data[1][0] || '9';

  return last + decade + month + day + year + first + middle + '9AA';
}
