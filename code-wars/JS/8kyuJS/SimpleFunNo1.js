function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col) * (nRows - row) + (nRows - row)
}