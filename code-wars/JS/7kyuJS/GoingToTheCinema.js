function movie(card, ticket, perc) {
  let count = 1;
  let discTicket = ticket * perc;
  let systemB = card + discTicket;
  let systemA = ticket * count;

  while (Math.ceil(systemB) >= systemA) {
    count++;
    discTicket = discTicket * perc;
    systemB += discTicket;
    systemA = ticket * count;
  }

  return count;
};