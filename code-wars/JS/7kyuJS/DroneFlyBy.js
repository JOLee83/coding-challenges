function flyBy(lamps, drone) {
  return lamps.split('').reduce((a, c, i) => i < drone.length ? a + 'o' : a + c, '');
}
