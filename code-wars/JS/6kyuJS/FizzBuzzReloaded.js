function fizzBuzzReloaded(start, stop, step, functions) {
  const checkNumber = (num) => {
    let str = '';

    functions.forEach((func, key) => {
      if (func(num)) {
        str += key;
      }
    });

    return str === '' ? num : str;
  }

  if (start === stop) {
    return checkNumber(start);
  }

  let n = start;
  let arr = [];

  while (start > stop ? n > stop - 1 : n < stop + 1) {
    let el = checkNumber(n);

    arr.push(el);
    n += step;
  }

  return arr.join(' ');
}
