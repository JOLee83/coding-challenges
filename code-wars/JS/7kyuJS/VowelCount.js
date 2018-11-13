function getCount(str) {
  var vowelsCount = 0;
  var vowels = "aeiou"
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++
    }
  }
  return vowelsCount;
}