function rgb(r, g, b) {
  r > 255 ? r = 255 : r < 0 ? r = 0 : r
  g > 255 ? g = 255 : g < 0 ? g = 0 : g
  b > 255 ? b = 255 : b < 0 ? b = 0 : b
  r = r.toString(16).toUpperCase()
  g = g.toString(16).toUpperCase()
  b = b.toString(16).toUpperCase()
  r == "0" ? r = "00" : r
  g == "0" ? g = "00" : g
  b == "0" ? b = "00" : b
  return [r, g, b].join("")
}