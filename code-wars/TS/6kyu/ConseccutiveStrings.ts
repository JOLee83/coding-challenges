export function longestConsec(strarr: string[], k: number): string {
  let str: string = '';

  if (k <= 0) {
    return str;
  }

  for (let i: number = 0; i + k <= strarr.length; i++) {
    const string = strarr.slice(i, i + k).join('');

    if (string.length > str.length) {
      str = string;
    }
  }

  return str;
}