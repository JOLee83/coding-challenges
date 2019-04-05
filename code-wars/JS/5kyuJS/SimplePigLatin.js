function pigIt(str) {
  return str.split(" ").map(word => {
    let letters = word.split("")
    if (word.length > 1) {
      return letters.splice(-letters.length + 1).join("") + letters[0] + "ay"
    } else {
      let test = word.toUpperCase().charCodeAt(0)
      if (test >= 65 && test <= 90) {
        return letters[0] + "ay"
      } else {
        return word
      }
    }
  }).join(" ")
}