// write the function isAnagram
var isAnagram = function (test, original) {
  let x = test.toLowerCase().split("").sort()
  let y = original.toLowerCase().split("").sort()
  if (y.length === x.length) {
    for (let i = 0; i < x.length; i++) {
      if (x[i] != y[i]) {
        return false
      }
    }
  } else {
    return false
  }
  return true
};
