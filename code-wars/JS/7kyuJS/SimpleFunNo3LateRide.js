function lateRide(n) {
  let total
  if (n < 10) {
    total = n
  }
  else if (n < 60) {
    total = n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b))
  } else {
    let hr = Math.floor(n / 60).toString()
    let min = (n - (hr * 60)).toString()
    total = hr.concat(min).split("").reduce((a, b) => parseInt(a) + parseInt(b))
  }
  return total

}