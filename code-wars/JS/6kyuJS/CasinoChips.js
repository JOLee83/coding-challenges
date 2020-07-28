// passes test but Execution Timed Out (12000 ms)

function solve(arr) {
  let day = 0;
  let sorted = arr.sort((a, b) => b - a);

  while (sorted[0] > 0 && sorted[1] > 0) {
    --sorted[0]
    --sorted[1]
    ++day
    sorted = sorted.sort((a, b) => b - a);
  }

  return day;
}

// Recursive method
// passes test but RangeError: Maximum call stack size exceeded

function solve(arr, day = 0) {
  let sorted = arr.sort((a, b) => b - a);

  if (sorted[0] > 0 && sorted[1] > 0) {
    sorted[0]--;
    sorted[1]--;

    return solve(sorted, ++day);
  } else {
    return day;
  }
}