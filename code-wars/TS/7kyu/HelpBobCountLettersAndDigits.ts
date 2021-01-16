export function countLettersAndDigits(input: string): number {
  return [...input.toLowerCase()]
    .filter((x: string) => (x.charCodeAt(0) < 123 && x.charCodeAt(0) > 96) || !isNaN(parseInt(x)))
    .length;
}