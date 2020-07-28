export class G964 {
  public static movie(card: number, ticket: number, perc: number): number {
    let count: number = 1;
    let discTicket: number = ticket * perc;
    let systemB: number = card + discTicket;
    let systemA: number = ticket * count;

    while (Math.ceil(systemB) >= systemA) {
      count++;
      discTicket = discTicket * perc;
      systemB += discTicket;
      systemA = ticket * count;
    }

    return count;
  };
}