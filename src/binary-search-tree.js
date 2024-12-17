const { NotImplementedError } = require('../extensions/index.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode; 
    } else {
      this.insertNode(this.rootNode, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode; 
      } else {
        this.insertNode(node.left, newNode); 
      }
    } else {
      if (!node.right) {
        node.right = newNode; 
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.searchNode(this.rootNode, data) !== null; // Проверяем наличие узла
  }

  searchNode(node, data) {
    if (!node) {
      return null; 
    }
    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    }
    return node; 
  }

  find(data) {
    const node = this.searchNode(this.rootNode, data);
    return node ? node.data : null; 
  }

  // Реализация методов min и max
  min() {
    return this.minNode(this.rootNode); 
  }

  max() {
    return this.maxNode(this.rootNode); 
  }

  minNode(node) {
    if (!node) return null; 
    while (node.left) {
      node = node.left; 
    }
    return node.data; 
  }

  maxNode(node) {
    if (!node) return null;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null; 
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data); 
      return node;
    } else {
      if (!node.left && !node.right) {
        return null; 
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      const minRight = this.minNode(node.right);
      node.data = minRight; 
      node.right = this.removeNode(node.right, minRight);
      return node;
    }
  }
}

module.exports = {
  BinarySearchTree
};




