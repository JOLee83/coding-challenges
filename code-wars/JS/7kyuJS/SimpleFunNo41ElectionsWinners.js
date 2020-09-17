function electionsWinners(votes, k) {
  const max = Math.max(...votes);
  const winners = votes.filter(x => k === 0 ? x === max : x + k > max).length;

  return winners > 1 && k === 0 ? 0 : winners;
}
