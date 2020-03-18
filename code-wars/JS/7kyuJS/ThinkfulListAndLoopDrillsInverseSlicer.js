function inverseSlice(items, a, b) {
  let end = items.splice(b, items.length - 1)
  let start = items.splice(0, a)
  return start.concat(end)
}

inverseSlice = (items, a, b) => items.slice(0, a).concat(items.slice(b));
