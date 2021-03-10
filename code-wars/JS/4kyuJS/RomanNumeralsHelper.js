const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

class RomanNumerals {
  static toRoman(num) {
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

  static fromRoman(strng) {
    let str = strng;
    let sum = 0;

    for (let i = 0; i <= nums.length; i++) {
      while (str.indexOf(roman[i]) === 0) {
        sum += nums[i];
        str = str.replace(roman[i], '');
      }
    }

    return sum;
  }
}
