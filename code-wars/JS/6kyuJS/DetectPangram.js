function isPangram(str) {
  const arr = [...str.toLowerCase()]
    .filter(x => x.charCodeAt(0) > 96 && x.charCodeAt(0) < 123);

  const aSet = new Set(arr);

  return aSet.size > 25;
}
