function evaporator(content, evap, threshold) {
  let day = 0;
  let vol = content;
  const limit = content * (threshold / 100);

  while (vol > limit) {
    vol = vol - (vol * (evap / 100));
    day++;
  }

  return day;
}
