const isTriangleNumber = (num) => {
  let n = 0, a = 0;

  while (n < num) {
    n += a;
    a++;
  }

  return n === num;
}
