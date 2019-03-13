function tiyFizzBuzz(s) {
  let lowerVowel = 'aeiou';
  let upperVowel = 'AEIOU';
  let upperConsonants = 'QWRTYPSDFGHJKLZXCVBNM';
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