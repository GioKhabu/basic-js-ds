const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode  = null;
  }

  root() {
    return this.rootNode ;
  }

  add(data) {
    this.rootNode  = this.addNewNode(this.rootNode, data);
  }

  addNewNode(node, data) {
    if (!node) return new Node(data);

    if (node.data === data) return node;

    if (data < node.data) {
      node.left = this.addNewNode(node.left, data);
    } else {
      node.right = this.addNewNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return this.searchNode(this.rootNode, data);
  }

  searchNode(node, data) {
    if (!node) return null;

    if (node.data === data) return node;

    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else {
      return this.searchNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left || !node.right) {
        return node.left || node.right;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;

      node.right = this.removeNode(node.right, minRight.data);

      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let current = this.rootNode;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};