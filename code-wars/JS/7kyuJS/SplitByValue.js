function splitByValue(k, arr) {
  return arr.sort((a, b) => {
    if (a < k && b >= k) {
      return -1;
    }

    if (b < k && a >= k) {
      return 1;
    }

    return 0;
  });
}
