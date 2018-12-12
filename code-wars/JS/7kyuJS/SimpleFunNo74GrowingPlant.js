function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0
  let count = 0
  while (height < desiredHeight) {
    height = height + upSpeed
    count++
    if (height < desiredHeight) {
      height = height - downSpeed
    }
  }
  return count
}