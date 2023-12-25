const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    let tree = this.tree;
    let f = false;
    if (tree === null) {
      this.tree = new Node(data);
    } else {
      while (!f) {
        if (tree.data > data) {
          if (tree.left === null) {
            tree.left = new Node(data);
            f = true;
          } else {
            tree = tree.left;
          }
        } else {
          if (tree.right === null) {
            tree.right = new Node(data);
            f = true;
          } else {
            tree = tree.right;
          }
        }
      }
    }
  }

  has(data, node = this.tree) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) return this.has(data, node.left);
      if (node.data < data) return this.has(data, node.right);  
  }

  find(data) {
    let tree = this.tree;
    while (true) {
      if (tree === null) return null;
      if (tree.data === data) return tree;
      if (data < tree.data) {
        tree = tree.left;
      } else {
        tree = tree.right;
      }
    }
  }

  remove(data, node = this.tree) {
      if (!node) return false;
      if (node.data > data) {
        node.left = this.remove(data, node.left);
        return node;
      }
       if (node.data < data) {
        node.right = this.remove(data, node.right);
        return node;
      } 
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this.remove(minRight.data, node.right);
      return node;   
  }

  min() {
    let tree = this.tree;
    while (tree.left) {
      tree = tree.left;
    }
    return tree.data;
  }

  max() {
    let tree = this.tree;
    while (tree.right) {
      tree = tree.right;
    }
    return tree.data;
  }
}

module.exports = {
  BinarySearchTree,
};
