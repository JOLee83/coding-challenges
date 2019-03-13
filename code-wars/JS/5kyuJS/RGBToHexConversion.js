function rgb(r, g, b) {

  r = r > 255 ? 255 : r < 0 ? 0 : r
  g = g > 255 ? 255 : g < 0 ? 0 : g
  b = b > 255 ? 255 : b < 0 ? 0 : b

  r = r.toString(16).toUpperCase()
  g = g.toString(16).toUpperCase()
  b = b.toString(16).toUpperCase()

  r = r == "0" ? "00" : r
  g = g == "0" ? "00" : g
  b = b == "0" ? "00" : b

  return [r, g, b].join("")
}