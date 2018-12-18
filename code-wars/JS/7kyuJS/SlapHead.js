function bald(x) {
  let head = []
  let hair = 0
  x.split("").map(y => {
    if (y === '-') {
      head.push(y)
    } else {
      hair++
      head.push("-")
    }
  })
  let rating
  if (hair == 0) {
    rating = "Clean!"
  }
  if (hair == 1) {
    rating = "Unicorn!"
  }
  if (hair == 2) {
    rating = "Homer!"
  }
  if (hair > 2 && hair < 6) {
    rating = "Careless!"
  }
  if (hair > 5) {
    rating = "Hobo!"
  }
  return [head.join(""), rating]
}