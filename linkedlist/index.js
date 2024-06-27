// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let counter = 0;
    function count(node) {
      if (node instanceof Node) {
        counter++;
        count(node.next);
      }
    }
    count(this.head);
    return counter;
  }
}

module.exports = { Node, LinkedList };
