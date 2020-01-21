function maskify(cc) {
  if (cc.length < 5) {
    return cc;
  }

  let newCC = cc.slice(-4);
  let count = 0;

  while (count < cc.length - 4) {
    newCC = '#' + newCC;
    count++
  }

  return newCC;
}
