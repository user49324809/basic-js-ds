const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Initialize an empty array to store stack elements
  }

  push(element) {
    this.items.push(element); // Add the element to the stack
  }

  pop() {
    return this.items.pop(); // Remove and return the top element from the stack
  }

  peek() {
    return this.items[this.items.length - 1]; // Return the top element without removing it
  }
}

module.exports = {
  Stack
};

