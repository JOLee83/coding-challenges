function hexStringToRGB(hexString) {
  let R = parseInt(hexString.slice(1, 3), 16)
  let G = parseInt(hexString.slice(3, 5), 16)
  let B = parseInt(hexString.slice(5, 7), 16)
  return { r: R, g: G, b: B }
}