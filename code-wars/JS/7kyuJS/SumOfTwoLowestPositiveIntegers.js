function sumTwoSmallestNumbers(num) {
  let answer = Infinity
  for (let i = 0; i < num.length; i++)
    for (let j = i + 1; j < num.length; j++)
      if (num[i] >= 0 && num[j] >= 0)
        answer = num[i] + num[j] < answer ? num[i] + num[j] : answer
  return answer
};