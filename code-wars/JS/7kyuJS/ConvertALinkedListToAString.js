function stringify(list) {
  if (!list) return 'null';
  let str = `${list.data}`, current = list;

  while (current.next) {
    str += ` -> ${current.next.data}`;
    current = current.next;
  }

  return str + ' -> null';
}
