function array_diff(a, b) {
  let array = [];
  if (a.length) {
    a.map(el => {
      if (!b.includes(el)) {
        array.push(el)
      }
    })
  }
  return array
}