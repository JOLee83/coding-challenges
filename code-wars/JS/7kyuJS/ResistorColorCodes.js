function decodeResistorColors(bands) {
  const colors = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 };
  const tolerance = { gold: 5, silver: 10 };
  const arr = bands.split(" ");

  let ohms = ((colors[arr[0]] * 10) + colors[arr[1]]) * (Math.pow(10, colors[arr[2]]));

  if (ohms >= 1000 && ohms < 1000000) {
    ohms = (ohms / 1000).toString().concat('k');
  } else if (ohms >= 1000000) {
    ohms = (ohms / 1000000).toString().concat('M');
  }

  return `${ohms} ohms, ${arr[3] ? tolerance[arr[3]] : 20}%`;
}
