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
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.size() - 1) {
      return this.removeLast();
    }
    let counter = 1;
    let node = this.head.next;
    let prev = this.head;

    while (node) {
      if (index === counter) {
        return (prev.next = node.next);
      }
      prev = node;
      node = node.next;
      prev = node;
      counter++;
    }
  }
}

module.exports = { Node, LinkedList };
