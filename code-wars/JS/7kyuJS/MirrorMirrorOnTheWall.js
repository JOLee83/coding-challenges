function mirror(data) {
  let arr = [...data].sort((a, b) => a - b);

  for (let i = arr.length - 2; i >= 0; i--) {
    arr.push(arr[i]);
  }

  return arr;
}

function mirror(data) {
  let arr = [...data].sort((a, b) => a - b);

  return [...arr, ...arr.reverse().slice(1)];
}
