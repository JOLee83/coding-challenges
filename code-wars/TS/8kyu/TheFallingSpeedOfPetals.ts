export const sakuraFall = (v: number): number => {
  if (v <= 0 || v === Infinity) {
    return 0;
  }

  return 400 / v;
}
