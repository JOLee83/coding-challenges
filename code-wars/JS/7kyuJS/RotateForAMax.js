function maxRot(n) {
  let max = n;
  let str = n.toString();

  for (const i in str) {

    str = str.slice(0, +i) + str.slice(+i + 1) + str.slice(+i, +i + 1);

    max = +str > max ? +str : max;
  }

  return max;
}
