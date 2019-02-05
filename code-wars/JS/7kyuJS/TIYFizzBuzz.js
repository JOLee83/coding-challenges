function tiyFizzBuzz(s) {
  let lowerVowel = ['a', 'e', 'i', 'o', 'u'];
  let upperVowel = ['A', 'E', 'I', 'O', 'U'];
  let upperConsonants = ['Q', 'W', 'R', 'T', 'Y', 'P', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  return s.split("").map(letter => {
    if (upperVowel.includes(letter)) {
      return "Iron Yard"
    }
    if (lowerVowel.includes(letter)) {
      return "Yard"
    }
    if (upperConsonants.includes(letter)) {
      return "Iron"
    } else {
      return letter
    }
  }).join("")
}