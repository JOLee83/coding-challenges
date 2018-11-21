function correct(string) {
  return string.split("").map(letter => {
    if (letter === "5") {
      return "S"
    }
    if (letter === "1") {
      return "I"
    }
    if (letter === "0") {
      return "O"
    } else {
      return letter
    }

  }).join("")
}