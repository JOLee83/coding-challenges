function rgb(r, g, b) {
  r > 255 ? r = 255 : r
  g > 255 ? g = 255 : g
  b > 255 ? b = 255 : b
  r < 0 ? r = 0 : r
  g < 0 ? g = 0 : g
  b < 0 ? b = 0 : b
  let x = r.toString(16).toUpperCase()
  let y = g.toString(16).toUpperCase()
  let z = b.toString(16).toUpperCase()
  x == "0" ? x = "00" : x
  y == "0" ? y = "00" : y
  z == "0" ? z = "00" : z
  return [x, y, z].join("")
}