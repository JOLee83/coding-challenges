function rowSumOddNumbers(n) {
  let rowLength = 1;
  let number = 1;
  let tempArr = [];

  while (tempArr.length <= n) {
    let innerTempArr = [];
    for (let i = 1; i < rowLength; i++) {
      innerTempArr.push(number);
      number += 2;
    }
    rowLength++;
    tempArr.push(innerTempArr);
  }
  return tempArr[tempArr.length - 1].reduce((a, b) => a + b, 0);
}