const Calculator = function () {
  this.evaluate = string => {
    let arr = string.split(' ');

    let acc = [parseInt(arr[0])];
    let i = 2;

    while (i < arr.length) {
      switch (arr[i - 1]) {
        case '/':
          acc[acc.length - 1] /= parseInt(arr[i]);
          break;
        case '*':
          acc[acc.length - 1] *= parseInt(arr[i]);
          break;
        default:
          acc.push(arr[i - 1])
          acc.push(parseInt(arr[i]));
          break;
      }

      i += 2;
    }

    let sum = acc[0];
    let j = 2;

    while (j < acc.length) {
      switch (acc[j - 1]) {
        case '-':
          sum -= acc[j];
          break;
        case '+':
          sum += acc[j];
          break;
      }

      j += 2;
    }

    return sum;
  }
};
