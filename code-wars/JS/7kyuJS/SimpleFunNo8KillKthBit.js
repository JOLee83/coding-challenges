function killKthBit(n, k) {
  let arr = n.toString(2).split('');

  arr[arr.length - k] = '0';

  return parseInt(arr.join(''), 2);
}
