function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  let newNode = new Node(data);

  if (head == null) {
    return newNode;
  }

  if (head.data > data) {
    newNode.next = head;
    head = newNode;
    return head;
  }

  let current = head;

  while (current.next && current.next.data < data) {
    current = current.next;
  }

  newNode.next = current.next;
  current.next = newNode;

  return head;
}
