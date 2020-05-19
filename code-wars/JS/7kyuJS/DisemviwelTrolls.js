disemvowel = (str) => {
  let answer = '';
  const vowels = 'aeiouAEIOU';

  for (let char of str) {
    answer += vowels.includes(char) ? '' : char;
  }

  return answer;
}