function queueTime(customers, n) {
  if (!customers.length) {
    return 0;
  }

  if (n < 2) {
    return customers.reduce((a, c) => a + c);
  }

  if (n > customers.length) {
    return Math.max(...customers);
  }

  let queues = new Array(n).fill(0);
  let time = 1;
  let waiting = customers.reverse();

  while (customers.length > 0) {
    for (const i in queues) {
      if (time >= queues[i] && customers.length > 0) {
        queues[i] += waiting.pop();
      }
    }
    time++;
  }

  return Math.max(...queues);
}
