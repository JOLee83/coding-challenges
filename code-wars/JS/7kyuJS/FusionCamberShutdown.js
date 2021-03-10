function burner(c, h, o) {
  let C = c, H = h, O = o;

  const h2o = H / 2 >= O ? O : Math.floor(H / 2);
  H -= h2o * 2;
  O -= h2o;
  const co2 = O / 2 >= C ? C : Math.floor(O / 2);
  O -= co2 * 2
  C -= co2
  const ch4 = H / 4 >= C ? C : Math.floor(H / 4);

  return [h2o, co2, ch4];
}
