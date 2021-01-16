'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function locationStatus(location, grid) {
  const gridSize = grid.length;
  const dft = location.distanceFromTop;
  const dfl = location.distanceFromLeft;

  if (!grid[dft] || location.distanceFromLeft < 0 ||
    location.distanceFromLeft >= grid[dft].length ||
    location.distanceFromTop < 0 ||
    location.distanceFromTop >= gridSize) {
    return 'Invalid';
  } else if (grid[dft][dfl] === 'T') {
    return 'Goal';
  } else if (grid[dft][dfl] !== '_') {
    return 'Blocked';
  } else {
    return 'Valid';
  }
};

function exploreInDirection(currentLocation, direction, grid) {
  const newPath = currentLocation.path.slice();
  newPath.push(direction);

  let dft = currentLocation.distanceFromTop;
  let dfl = currentLocation.distanceFromLeft;

  if (direction === 'North') {
    dft -= 1;
  } else if (direction === 'East') {
    dfl += 1;
  } else if (direction === 'South') {
    dft += 1;
  } else if (direction === 'West') {
    dfl -= 1;
  }

  let newLocation = {
    distanceFromTop: dft,
    distanceFromLeft: dfl,
    path: newPath,
    status: 'Unknown'
  };
  newLocation.status = locationStatus(newLocation, grid);

  if (newLocation.status === 'Valid') {
    grid[newLocation.distanceFromTop][newLocation.distanceFromLeft] = 'Visited';
  }

  return newLocation;
};

function calculateDistance(cityMap) {
  if (!cityMap.includes('O') && !cityMap.includes('X')) {
    return -2;
  }

  let grid = cityMap.split(';').map(x => x.split(''));
  let startX = grid.findIndex(x => x.includes('O'))
  let startY = grid[startX].indexOf('O');

  let location = {
    distanceFromTop: startX,
    distanceFromLeft: startY,
    path: [],
    status: 'Start'
  };

  let queue = [location];

  while (queue.length > 0) {
    let currentLocation = queue.shift();

    let newLocation = exploreInDirection(currentLocation, 'North', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path.length;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, 'East', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path.length;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, 'South', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path.length;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }

    newLocation = exploreInDirection(currentLocation, 'West', grid);
    if (newLocation.status === 'Goal') {
      return newLocation.path.length;
    } else if (newLocation.status === 'Valid') {
      queue.push(newLocation);
    }
  }

  return -1;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const cityMap = readLine();

  const result = calculateDistance(cityMap);

  ws.write(result + '\n');

  ws.end();
}
