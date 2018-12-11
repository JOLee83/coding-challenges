function dbSort(a) {
  let nums = a.filter(x => x !== x.toString()).sort((a, b) => a - b)
  let strs = a.filter(y => y === y.toString()).sort()
  return nums.concat(strs)
}