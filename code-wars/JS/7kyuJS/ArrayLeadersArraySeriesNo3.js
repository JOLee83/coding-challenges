var arrayLeaders = numbers => {
  let num = 0;
  return numbers.reduceRight((a, c) => {
    if (c > num) {
      a.unshift(c);
    }
    num += c;
    return a;
  }, []);
}
