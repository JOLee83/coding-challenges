export function nextId(ids: number[]): number {
  if (!ids.length) {
    return 0;
  }

  let answer: number | null = null;

  for (const i in ids) {
    if (!ids.some((x: number) => x === +i)) {
      answer = +i;
      break;
    }
  }

  return answer != null ? answer : Math.max(...ids) + 1;
}
