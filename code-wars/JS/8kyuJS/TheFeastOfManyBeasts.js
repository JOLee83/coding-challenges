function feast(beast, dish) {
  return dish[0] === beast[0] && dish[dish.length - 1] === beast[beast.length - 1] ? true : false
}