function getOrder(input) {
  return ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'].reduce((a, c) => {
    const re = new RegExp(c.toLowerCase(), 'g');
    const len = (input.match(re) || []).length;

    return len > 0 ? a.concat(new Array(len).fill(c).join(' ')) : a;
  }, []).join(' ');
}
