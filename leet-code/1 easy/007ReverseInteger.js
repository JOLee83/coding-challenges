var reverse = function (x) {
  if (x > 0) {
    x = +x.toString().split("").reverse().join("")
  } else {
    x = Math.abs(x)
    x = -x.toString().split("").reverse().join("")
  }
  if (x > Math.pow(2, 31) || x < -Math.pow(2, 31)) {
    return 0
  } else {
    return x
  }
};