function cutFruits(fruits) {
  let array = []
  fruits.map(fruit => {
    let i = Math.ceil(fruit.length / 2)
    if (fruitsName.includes(fruit)) {
      array.push(fruit.slice(0, i))
      array.push(fruit.slice(i))
    } else {
      array.push(fruit)
    }
  })
  return array
}