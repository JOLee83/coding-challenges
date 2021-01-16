function dashatize(num) {
  if (isNaN(num)) {
    return num.toString();
  }

  let arr = [...Math.abs(num).toString()];
  let str = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      str += arr[i];
    } else {
      str += '-' + arr[i];
    }
  }

  return str;
}
