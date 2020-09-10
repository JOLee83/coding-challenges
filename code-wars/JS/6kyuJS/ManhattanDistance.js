function sortReduce(arr) {
  return arr.sort((a, b) => a - b).reduce((a, c) => c - a, 0);
}

function manhattanDistance(a, b) {
  return sortReduce([a[0], b[0]]) + sortReduce([a[1], b[1]]);
}
