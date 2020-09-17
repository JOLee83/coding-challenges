function commas(num) {
  let isNegative = (num < 0)

  num = Math.abs(num) * 1000;

  let remainder = num % 1;
  if (remainder >= 0.5) {
    num = Math.floor(num) + 1
  } else {
    num = Math.floor(num)
  }
  num /= 1000;

  let array = num.toString().split('.');
  if (array[1]) {
    return (isNegative ? '-' : '') + array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",").concat('.' + array[1].toString());
  } else {
    return (isNegative ? '-' : '') + array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}