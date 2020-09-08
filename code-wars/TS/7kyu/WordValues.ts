export function wordValue(arr: string[]): number[] {
  const alphabet: string = ' abcdefghijklmnopqrstuvwxyz';

  return arr.map((x: string, i: number) =>
    x.split('').reduce((acc: number, cur: string) =>
      acc + alphabet.indexOf(cur)
      , 0) * (i + 1)
  );
}
