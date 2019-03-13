var countBits = function (n) {
  let count = 0;
  n.toString(2).split("").forEach(el => {
    if (el > 0) count++
  })
  return count
};