function add(num1, num2) {
  const str1 = num1.toString().split('').reverse().join('');
  const str2 = num2.toString().split('').reverse().join('');
  let answer = '';

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    answer = ((+str1[i] || 0) + (+str2[i] || 0)).toString().concat(answer);
  }

  return +answer;
}
