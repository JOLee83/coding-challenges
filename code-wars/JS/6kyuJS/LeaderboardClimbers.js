function move(arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
    var k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }

  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);

  return arr;
};

function leaderboardSort(lb, chg) {
  let arr = [...chg].map(x => {
    let y = x.split(' ');
    y[1] = parseInt(y[1]);
    return { n: y[0], i: y[1] };
  })

  let array = [...lb];
  for (let obj of arr) {
    let old = array.indexOf(obj.n);
    move(array, old, old - obj.i)
  }

  return array;
}
