function longestRepetition(s) {
  let highCount = 0;
  let highLetter = '';
  let count = 1;
  let last = '';

  for (const current of s) {
    if (current === last) {
      count++;
    } else {
      count = 1;
    } z

    if (count > highCount) {
      highCount = count;
      highLetter = last;
    }

    last = current;
  }


  return [highLetter, highCount];
}
