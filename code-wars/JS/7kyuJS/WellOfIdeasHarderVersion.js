function well(x) {
  const count = x.reduce((a, c) => a.concat(c.filter(el => typeof el === 'string' && el.toLowerCase() === 'good')), []).length;

  return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!';
}
