function parse(string) {
  let arr = string.split(' -> '),
    head = null;

  for (let i = arr.length - 2; i >= 0; i--) {
    let next = head;
    head = new Node(+arr[i]);
    head.next = next;
  }

  return head;
}
