export function add(num1: number, num2: number): number {
  const str1: string = num1.toString().split('').reverse().join('');
  const str2: string = num2.toString().split('').reverse().join('');
  let answer: string | number = '';

  for (let i: number = 0; i < Math.max(str1.length, str2.length); i++) {
    answer = ((+str1[i] || 0) + (+str2[i] || 0)).toString().concat(answer);
  }

  return +answer;
}
