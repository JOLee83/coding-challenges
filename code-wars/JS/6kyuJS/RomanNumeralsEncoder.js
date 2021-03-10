function solution(num) {
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  let str = '';
  let n = num;

  for (let i = 0; n > 0; i++) {
    if (n >= nums[i]) {
      const re = Math.floor(n / nums[i]);
      str += roman[i].repeat(re);
      n -= nums[i] * re;
    }
  }

  return str;
}