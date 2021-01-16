const tourney = array => {
  let reduceArr = [...array];
  let returnArr = [[...array]];

  while (reduceArr.length > 1) {
    reduceArr = reduceArr.reduce((a, c, i, arr) => {
      if (i % 2 === 0) {
        const winner = Math.max(c, arr[i + 1] || 0);

        return arr[i + 1] ? a.concat(winner) : [winner].concat(a)
      }
      return a;
    }, []);

    returnArr.push(reduceArr);
  }

  return returnArr;
}
