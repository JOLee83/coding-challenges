function wave(str) {
  let array = [];

  str.split('').forEach((el, i, arr) => {
    if (el !== ' ') {
      let newArr = [...arr];
      newArr[i] = newArr[i].toUpperCase();
      array.push(newArr.join(''));
    }
  });

  return array;
}