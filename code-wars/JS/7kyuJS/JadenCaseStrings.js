String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => {
    return word.split("").map((letter, index) => {
      return index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join("")
  }).join(" ")
};