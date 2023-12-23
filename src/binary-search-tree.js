const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

module.exports = {
  Node,
};
/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root;
    while (currentNode) {
      if (newNode.data <= currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this._root;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(/*data*/) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this._root) {
      return null;
    }
    let currentNode = this._root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this._root) {
      return null;
    }
    let currentNode = this._root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const myTree = new BinarySearchTree();
myTree.add(8);
myTree.add(9);
myTree.add(10);
myTree.add(5);
myTree.add(6);
myTree.add(11);
myTree.add(20);

console.log(myTree);
