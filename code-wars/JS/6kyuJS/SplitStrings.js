function solution(str) {
  const arr = [];

  for (let i = 0; i < str.length; i += 2) {
    arr.push(`${str[i]}${str[i + 1] ? str[i + 1] : '_'}`);
  }

  return arr;
}