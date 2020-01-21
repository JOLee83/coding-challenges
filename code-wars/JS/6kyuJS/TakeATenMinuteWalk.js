function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let x = 0;
  let y = 0;

  walk.forEach(way => {
    switch (way) {
      case 'n':
        y++;
        break;
      case 'e':
        x++;
        break;
      case 's':
        y--
        break;
      case 'w':
        x--;
        break;
      default:
        break;
    }
  })

  if (x === 0 && y === 0) {
    return true;
  } else {
    return false;
  }
}