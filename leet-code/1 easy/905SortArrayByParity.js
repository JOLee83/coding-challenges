var sortArrayByParity = function (A) {
  return A.sort(function (a, b) {
    return (a & 1) - (b & 1) || a - b;
  })
};