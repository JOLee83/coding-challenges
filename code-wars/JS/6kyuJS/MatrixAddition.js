function matrixAddition(a, b) {
  let arr = [];

  for (const i in a) {
    let temp = [];

    for (const j in a[i]) {
      temp.push(a[i][j] + b[i][j]);
    }

    arr.push(temp);
  }

  return arr;
}
