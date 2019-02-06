function containAllRots(strng, arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (strng == "") {
      return true
    }
    if (!arr.includes(strng)) {
      return false
    }
    let letter = strng[0]
    strng = strng.slice(1, strng.length).concat(letter)
  }
  return true
}