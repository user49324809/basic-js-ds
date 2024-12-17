const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head; 
  }

  enqueue(value) {
    const newNode = new ListNode(value); 
    if (!this.head) {
      this.head = newNode; 
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return null; 
    const value = this.head.value; 
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};

