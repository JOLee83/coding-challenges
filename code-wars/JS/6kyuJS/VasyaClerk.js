function tickets(pil) {
  let f = 0
  let t = 0
  for (let i = 0; i < pil.length; i++) {
    if (pil[i] === 25) {
      t++
    }
    else if (pil[i] === 50 && t > 0) {
      f++
      t--
    }
    else if (pil[i] === 100 && t > 0 && f > 0) {
      f--
      t--
    }
    else if (pil[i] === 100 && t > 2) {
      t -= 3
    }
    else {
      return 'NO'
    }
  }
  return 'YES'
}