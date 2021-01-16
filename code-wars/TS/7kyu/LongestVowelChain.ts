type Obj = { max: number, count: number };

export function solve(s: string): number {
  let v: string = 'aeiou';

  let o: Obj = [...s].reduce((a: Obj, b: string) => {
    a.count = v.includes(b.toLowerCase()) ? ++a.count : 0;
    a.max = a.count > a.max ? a.count : a.max;
    return a;
  }, { max: 0, count: 0 });

  return o.max;
}
