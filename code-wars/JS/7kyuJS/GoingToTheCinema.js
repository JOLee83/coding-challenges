function movie(card, ticket, perc) {
  let count = 0;
  let discTicket = ticket * perc;
  let isMore = true;
  let systemB = card;

  while (isMore) {
    count++;
    let systemA = ticket * count;
    systemB += discTicket;

    if (Math.ceil(systemB) < systemA) {
      isMore = false;
    }

    discTicket = discTicket * perc;
  }

  return count;
};